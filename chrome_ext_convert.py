import json
import shutil
import re

JS_PATH = "./mist_openapi/Mist.openapi.json"
RES_PATH ="./api.json"
JS_CHROME = {
    "paths":{},
    "components": {}
}
BASE_URL="https://www.juniper.net/documentation/us/en/software/mist/api/http/api"

def gen_url(operation):
    tags = operation.get('tags', [])
    operation_id = operation.get("operationId")
    if not operation_id or len(tags) == 0:
        return
    else:
        p_parts = [BASE_URL]
        tag_name = tags[0]
        for main_cat in [
            "Sites",
            "Orgs",
            "MSPs",
            "Admins",
            "Installer",
            "Self",
            "Samples",
            "Utilities",
            "Constants",
        ]:
            if tag_name.startswith(main_cat):
                p_parts.append(main_cat.lower())
                tag_name = tag_name.replace(main_cat, "", 1).strip()
                break
        if len(p_parts) == 1:
            print(f"Missing Main Cat for {operation_id}")
        for tag_part in tag_name.split(" - "):
            p_parts.append(tag_part.replace(" ", "-").lower().strip())
        snaked_operation_id = re.sub(r'(?<!^)(?=[A-Z])', '-', operation_id).lower()
        p_parts.append(snaked_operation_id)
        return "/".join(p_parts)


def process_specs(specs):
    for verb in specs:
        if "responses" in specs[verb]:
            del specs[verb]["responses"]
        if "summary" in specs[verb]:
            del specs[verb]["summary"]
        if "requestBody" in specs[verb]:
            del specs[verb]["requestBody"]
        if verb in ["post", "get", "put", "delete"]:
            specs[verb]["doc_url"] = gen_url(specs[verb])
    return specs

def process_sub(parent_path: dict, splitted_path: list, specs: dict):
    #pp {}
    current_path = splitted_path[0]  # api
    splitted_path = splitted_path[1:] # [v1, orgs, ...]
    # pp {api: {}}}
    if len(splitted_path)>0:
        if not current_path in parent_path:
            parent_path[current_path] = {}
        if not "paths" in parent_path[current_path]:
            parent_path[current_path]["paths"] = {}
        parent_path[current_path]["paths"]=  process_sub(parent_path[current_path]["paths"], splitted_path, specs)
        
    else:
        parent_path[current_path] =  {"specs": process_specs(specs)}
    return parent_path



### entry point
# open file
with open(JS_PATH, 'r') as js:
    js_data = json.loads(js.read())

# loop on each path from the open api spec
for path in js_data["paths"]:
    # split the path to create the JSON levels
    splitted_path = path.split("/")[1:]
    specs = js_data["paths"][path]
    JS_CHROME["paths"] = process_sub(JS_CHROME["paths"], splitted_path, specs)


JS_CHROME["components"]["parameters"] = js_data["components"]["parameters"]

with open(RES_PATH, "w") as f:
    json.dump(JS_CHROME, f)

shutil.copy("./api.json", "./angular/src/assets/api.json")