import urllib.request
import json
with open("C:\\Users\\Savage\\Desktop\\BPD Districts.geojson")as f:
    jsStr = f.read().strip()
jloads = json.loads(jsStr)
DistA = jloads["features"][3]["geometry"]["coordinates"]
DistB = jloads["features"][0]["geometry"]["coordinates"]
DistC = jloads["features"][2]["geometry"]["coordinates"]
DistD = jloads["features"][4]["geometry"]["coordinates"]
DistE = jloads["features"][1]["geometry"]["coordinates"]
DistAdict = {"type": "FeatureCollection", "features": [{"type": "feature", "properties":{"name": "District A"}, "geometry": {"type": "MultiPolygon", "coordinates":DistA
}}]}
DistBdict = {"type": "FeatureCollection", "features": [{"type": "feature", "properties":{"name": "District B"}, "geometry": {"type": "MultiPolygon", "coordinates":DistB
}}]}
DistCdict = {"type": "FeatureCollection", "features": [{"type": "feature", "properties":{"name": "District C"}, "geometry": {"type": "MultiPolygon", "coordinates":DistC
}}]}
DistDdict = {"type": "FeatureCollection", "features": [{"type": "feature", "properties":{"name": "District D"}, "geometry": {"type": "MultiPolygon", "coordinates":DistD
}}]}
DistEdict = {"type": "FeatureCollection", "features": [{"type": "feature", "properties":{"name": "District E"}, "geometry": {"type": "MultiPolygon", "coordinates":DistE
}}]}
with open("C:\\Users\\Savage\\Desktop\\DataA.json", "w")as t:
    t.write(json.dumps(DistAdict))
with open("C:\\Users\\Savage\\Desktop\\DataB.json", "w")as t:
    t.write(json.dumps(DistBdict))
with open("C:\\Users\\Savage\\Desktop\\DataC.json", "w")as t:
    t.write(json.dumps(DistCdict))
with open("C:\\Users\\Savage\\Desktop\\DataD.json", "w")as t:
    t.write(json.dumps(DistDdict))
with open("C:\\Users\\Savage\\Desktop\\DataE.json", "w")as t:
    t.write(json.dumps(DistEdict))
