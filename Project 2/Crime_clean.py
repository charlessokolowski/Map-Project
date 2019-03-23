import urllib.request
import json

def cleanCrimeData():
    Listy = []
    PyStr= urllib.request.urlopen("https://data.buffalony.gov/resource/d6g9-xbgu.json").read().decode().strip()
    stri = json.loads(PyStr)
    for i in range(0, len(stri)):
        if ("latitude" and "longitude") in stri[i]:
            Listy.append([float(stri[i]["latitude"]), float(stri[i]["longitude"]), stri[i]["incident_type_primary"], stri[i]["hour_of_day"]])
    a = sorted(Listy, key = lambda x:int(x[3]))
    return json.dumps(a)
