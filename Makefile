# Build one browser package 
define BUILD_EXTENSION
	@echo ""
	@echo "---------------------------------------"
	@echo "---- $(1)"
	@echo "---------------------------------------"
	## Copy the appropriate manifest file
	@cd ./angular && \
		echo "Using manifest_$(1).json" && \
		cp ./src/manifest_$(1).json ./src/manifest.json
	## Copy the browser-specific session loader
	@cd ./angular && \
		echo "Using browser.loader.$(1).ts" && \
		cp ./src/app/services/browser.loader.$(1).ts ./src/app/services/browser.loader.ts
	## Build the Angular app in production mode
	@cd ./angular && npm run build:prod
	## Build the web extension package
	@cd ./angular && npx web-ext build -s ./dist -o
	## Rename and unpack the zip file based on browser type
	@cd ./angular && \
		VERSION=$$(jq -r '.version' ./src/manifest.json) && \
		cd ./web-ext-artifacts && \
		mv mist_extension-$$VERSION.zip mist_extension-$(1)-$$VERSION.zip && \
		rm -rf mist_extension-$(1) && \
		unzip -q mist_extension-$(1)-$$VERSION.zip -d mist_extension-$(1)
endef

.PHONY: help init-openapi init-angular init update-openapi run build webext-ffx webext-chrome webext-safari webext-safari-init webext-all

# Use bash as shell
SHELL := /bin/bash

# Project name (from top-level directory name)
PROJECT_NAME ?= $(shell basename $(CURDIR))

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z0-9_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

init-openapi: ## Initialize or update OpenAPI submodule
	@if [ ! -d "mist_openapi/.git" ]; then \
		echo "Initializing OpenAPI submodule..."; \
		git submodule update --init mist_openapi; \
	fi
	@echo "Updating OpenAPI submodule..."; \
	git submodule update --remote mist_openapi

init-angular: ## Initialize Angular project
	@if [ ! -d "./angular/node_modules" ]; then \
		echo "Installing Angular dependencies..."; \
		npm install --prefix ./angular; \
	fi
	@echo "Building Angular project..."; \
	npm run build --prefix ./angular

init: init-openapi init-angular ## Initialize the project


update-openapi: init-openapi ## Update OpenAPI submodule
	@echo "Generating code from OpenAPI spec..."
	@python3 ./scripts/oas_converter.py


run: ## Run the Angular application
	@if [ ! -d "./angular/node_modules" ]; then \
		echo "Angular dependencies not installed. Run 'make init-angular' first."; \
		exit 1; \
	fi
	@echo "Starting Angular application..."
	npm start --prefix ./angular



update-version: ## Update the version in package.json and manifest.json
	@if [ -z "$(VERSION)" ]; then \
		echo "Error: VERSION variable is required. Usage: make update-version VERSION=x.y.z"; \
		exit 1; \
	fi
	@echo "Updating version to $(VERSION)..."
	@sed -i '' 's/"version": "[^"]*"/"version": "$(VERSION)"/' ./angular/package.json
	@sed -i '' 's/"version": "[^"]*"/"version": "$(VERSION)"/' ./angular/src/manifest_ffx.json
	@sed -i '' 's/"version": "[^"]*"/"version": "$(VERSION)"/' ./angular/src/manifest_chrome.json
	@sed -i '' 's/"version": "[^"]*"/"version": "$(VERSION)"/' ./angular/src/manifest_safari.json
	@echo "Version updated to $(VERSION)."

webext-safari: ## Build the Safari ext, refresh resources + sync version in the existing Xcode project in place (preserves signing/category/icon). Run webext-safari-init first if no project exists.
	@echo "Building Safari web extension package..."
	$(call BUILD_EXTENSION,safari)
	@if [ -d "./angular/Mist Extension/Mist Extension.xcodeproj" ]; then \
		echo "Refreshing extension resources + version in the existing Xcode project (signing/category/icon untouched)..." && \
		rsync -a --delete "./angular/web-ext-artifacts/mist_extension-safari/" "./angular/Mist Extension/Mist Extension Extension/Resources/" && \
		PBX="./angular/Mist Extension/Mist Extension.xcodeproj/project.pbxproj" && \
		V=$$(jq -r '.version' ./angular/src/manifest.json) && \
		B=$$(date +%s) && \
		sed -i '' "s/MARKETING_VERSION = [^;]*;/MARKETING_VERSION = $$V;/g" "$$PBX" && \
		sed -i '' "s/CURRENT_PROJECT_VERSION = [^;]*;/CURRENT_PROJECT_VERSION = $$B;/g" "$$PBX" && \
		echo "Done (version $$V, build $$B). Team / App Category / icon preserved. If Xcode was open, reopen it before Archiving." ; \
	else \
		echo "No Xcode project found. Run 'make webext-safari-init' first." && exit 1 ; \
	fi

webext-safari-init: ## First-time only: generate the Safari Xcode project + one-time App Store settings (then set Team + App Category once in Xcode)
	@echo "Generating Safari Xcode project from scratch..."
	$(call BUILD_EXTENSION,safari)
	## Convert to Safari format using xcrun
	@cd ./angular && \
		xcrun safari-web-extension-converter ./web-ext-artifacts/mist_extension-safari \
			--project-location . \
			--app-name "Mist Extension" \
			--bundle-identifier fr.mist-lab.Mist-Extension \
			--swift \
			--macos-only \
			--copy-resources \
			--no-open \
			--no-prompt \
			--force
	## App Store needs category + export-compliance + copyright; the converter omits them and --force regenerates the plist (macOS-only layout: Mist Extension/Info.plist)
	@cd ./angular && \
		PLIST="./Mist Extension/Mist Extension/Info.plist" && \
		( /usr/libexec/PlistBuddy -c "Add :LSApplicationCategoryType string public.app-category.developer-tools" "$$PLIST" 2>/dev/null || \
		  /usr/libexec/PlistBuddy -c "Set :LSApplicationCategoryType public.app-category.developer-tools" "$$PLIST" ) && \
		( /usr/libexec/PlistBuddy -c "Add :ITSAppUsesNonExemptEncryption bool false" "$$PLIST" 2>/dev/null || \
		  /usr/libexec/PlistBuddy -c "Set :ITSAppUsesNonExemptEncryption false" "$$PLIST" ) && \
		( /usr/libexec/PlistBuddy -c "Add :NSHumanReadableCopyright string '© 2026 Thomas Munzer'" "$$PLIST" 2>/dev/null || \
		  /usr/libexec/PlistBuddy -c "Set :NSHumanReadableCopyright '© 2026 Thomas Munzer'" "$$PLIST" )
	## Replace the converter's upscaled-from-128px app icon with crisp renders from the vector source
	@bash ./scripts/gen_safari_appicon.sh
	## Re-apply version, deployment target, and a unique (date-based) build number (Team + App Category are set once in Xcode and then preserved by 'make webext-safari')
	@cd ./angular && \
		PBX="./Mist Extension/Mist Extension.xcodeproj/project.pbxproj" && \
		V=$$(jq -r '.version' ./src/manifest.json) && \
		B=$$(date +%s) && \
		sed -i '' "s/MARKETING_VERSION = [^;]*;/MARKETING_VERSION = $$V;/g" "$$PBX" && \
		sed -i '' "s/MACOSX_DEPLOYMENT_TARGET = [^;]*;/MACOSX_DEPLOYMENT_TARGET = 11.0;/g" "$$PBX" && \
		sed -i '' "s/CURRENT_PROJECT_VERSION = [^;]*;/CURRENT_PROJECT_VERSION = $$B;/g" "$$PBX"
	@echo "Project generated. In Xcode (once): Signing & Capabilities -> Team -> Thomas Munzer (5UZ24A5VY3) on both targets, and General -> App Category -> Developer Tools. Then 'make webext-safari' updates the code and preserves them."

webext-ffx: ## Build the Firefox web extension package
	@echo "Building Firefox web extension package..."
	$(call BUILD_EXTENSION,ffx)

webext-chrome: ## Build the Chrome web extension package
	@echo "Building Chrome web extension package..."
	$(call BUILD_EXTENSION,chrome) 

webext-all: webext-ffx webext-chrome webext-safari ## Build all web extension packages


build: ## Build the project
	@if [ -z "$(VERSION)" ]; then \
		echo "Error: VERSION variable is required. Usage: make build VERSION=x.y.z"; \
		exit 1; \
	fi
	@echo "Building project..."
	${MAKE} update-version VERSION=$(VERSION)
	@if [ ! -d "./angular/node_modules" ]; then \
		echo "Installing Angular dependencies..."; \
		npm install --prefix ./angular; \
	fi
	${MAKE} update-openapi
	$(MAKE) webext-all
