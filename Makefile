# Build one browser package 
define BUILD_EXTENSION
	@echo ""
	@echo "---------------------------------------"
	@echo "---- $(1)"
	@echo "---------------------------------------"
	@cd ./angular && \
		echo "Using manifest_$(1).json" && \
		cp ./src/manifest_$(1).json ./src/manifest.json && \
		npm run build:prod && \
		npx web-ext build -s ./dist -o && \
		VERSION=$$(jq -r '.version' ./src/manifest.json) && \
		cd ./web-ext-artifacts && \
		mv mist_extension-$$VERSION.zip mist_extension-$(1)-$$VERSION.zip && \
		rm -rf mist_extension-$(1) && \
		unzip -q mist_extension-$(1)-$$VERSION.zip -d mist_extension-$(1)
endef

.PHONY: help init-openapi init-angular init update-openapi run build webext-ffx webext-chrome webext-all

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


update-openapi: ## Update OpenAPI submodule
	@if [ ! -f "mist_openapi/.git" ]; then \
		echo "OpenAPI submodule not initialized. Run 'make openapi-setup' first."; \
		exit 1; \
	fi
	@echo "Updating OpenAPI submodule..."; \
	git submodule update --remote mist_openapi
	@echo "Generating code from OpenAPI spec..."


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
	@echo "Version updated to $(VERSION)."



webext-ffx: ## Build the Firefox web extension package
	@echo "Building Firefox web extension package..."
	$(call BUILD_EXTENSION,ffx)

webext-chrome: ## Build the Chrome web extension package
	@echo "Building Chrome web extension package..."
	$(call BUILD_EXTENSION,chrome) 

webext-all: webext-ffx webext-chrome ## Build all web extension packages


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
