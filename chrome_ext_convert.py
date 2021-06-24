import json

js_path = "./mist_openapi/Mist.openapi.json"
res_path ="./api.json"
js_chrome = {
    "paths": {}
}



def process_specs(specs):
    

def process_sub(parent_path: dict, splitted_path: list, specs: dict):
    #pp {}
    current_path = splitted_path[0]  # api
    splitted_path = splitted_path[1:] # [v1, orgs, ...]
    # pp {api: {}}}
    if len(splitted_path)>0:
        if not current_path in parent_path:
            parent_path[current_path] = {"paths": {}}
        if not "paths" in parent_path[current_path]:
            parent_path[current_path]["paths"] = {}
        parent_path[current_path]["paths"] =  process_sub(parent_path[current_path]["paths"], splitted_path, specs)
        
    else:
        parent_path[current_path] =  {"specs": specs}
    return parent_path


with open(js_path, 'r') as js:
    js_data = json.loads(js.read())


for path in js_data["paths"]:
    splitted_path = path.split("/")[1:]
    specs = js_data["paths"][path]
    js_chrome["paths"] = process_sub(js_chrome["paths"], splitted_path, specs)

js_chrome["components"] = js_data["components"]

with open(res_path, "w") as f:
    json.dump(js_chrome, f)

