import json

js_path = "./mist_openapi/Mist.openapi.json"
res_path ="./api.json"
js_chrome = {}



def process_specs(specs):
    for verb in specs:
        if "responses" in specs[verb]:
            del specs[verb]["responses"]
        if "summary" in specs[verb]:
            del specs[verb]["summary"]
        if "requestBody" in specs[verb]:
            del specs[verb]["requestBody"]
    return specs

def process_sub(parent_path: dict, splitted_path: list, specs: dict):
    #pp {}
    current_path = splitted_path[0]  # api
    splitted_path = splitted_path[1:] # [v1, orgs, ...]
    # pp {api: {}}}
    if len(splitted_path)>0:
        if not current_path in parent_path:
            parent_path[current_path] = {}
        # if not "paths" in parent_path[current_path]:
        #     parent_path[current_path]["paths"] = {}
        parent_path[current_path]=  process_sub(parent_path[current_path], splitted_path, specs)
        
    else:
        parent_path[current_path] =  {"specs": process_specs(specs)}
    return parent_path



### entry point
# open file
with open(js_path, 'r') as js:
    js_data = json.loads(js.read())

# loop on each path from the open api spec
for path in js_data["paths"]:
    # split the path to create the JSON levels
    splitted_path = path.split("/")[1:]
    specs = js_data["paths"][path]
    js_chrome = process_sub(js_chrome, splitted_path, specs)

js_chrome["parameters"] = js_data["components"]["parameters"]

print(js_chrome["parameters"]["org_id"])
with open(res_path, "w") as f:
    json.dump(js_chrome, f)

