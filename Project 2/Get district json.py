import urllib.request
import json

def get_value_dataA():
    listy = []
    distA_data = {"type": "FeatureCollection"}
    distA_data['features'] = dist_A
    distA =[]
    jsStr = urllib.request.urlopen('https://data.buffalony.gov/api/views/j266-6xj4/rows.json?accessType=DOWNLOAD').read().decode().strip()
    stri = json.loads(jsStr)
    for i in stri['data']:
        if "District A" in i:
            listy.append(i[8])
    y =  listy[0][16: -3]
    z = y.strip()
    c = z.split(",")
    for i in range(0, len(c)):
        w = (c[i].strip().replace(" ", ",").split(","))
        distA.append([float(w[0]), float(w[1])])
    return distA

def get_value_dataB():
    listy = []
    distB = []
    jsStr = urllib.request.urlopen('https://data.buffalony.gov/api/views/j266-6xj4/rows.json?accessType=DOWNLOAD').read().decode().strip()
    stri = json.loads(jsStr)
    for i in stri['data']:
        if "District B" in i:
            listy.append(i[8])
    y =  listy[0][16: -3]
    z = y.strip()
    c = z.split(",")
    for i in range(0, len(c)):
        w = (c[i].strip().replace(" ", ",").split(","))
        distB.append([float(w[0]), float(w[1])])
    return distB

def get_value_dataC():
    listy = []
    distC = []
    jsStr = urllib.request.urlopen('https://data.buffalony.gov/api/views/j266-6xj4/rows.json?accessType=DOWNLOAD').read().decode().strip()
    stri = json.loads(jsStr)
    for i in stri['data']:
        if "District C" in i:
            listy.append(i[8])
    y =  listy[0][16: -3]
    z = y.strip()
    c = z.split(",")
    for i in range(0, len(c)):
        w = (c[i].strip().replace(" ", ",").split(","))
        distC.append([float(w[0]), float(w[1])])
    return distC

def get_value_dataD():
    listy = []
    distD = []
    jsStr = urllib.request.urlopen('https://data.buffalony.gov/api/views/j266-6xj4/rows.json?accessType=DOWNLOAD').read().decode().strip()
    stri = json.loads(jsStr)
    for i in stri['data']:
        if "District D" in i:
            listy.append(i[8])
    y =  listy[0][16: -3]
    z = y.strip()
    c = z.split(",")
    for i in range(0, len(c)):
        if "((" in c[i]:
            w = (c[i].strip().replace(" ", ",").split(","))
            w[0] = w[0][2:]
            distD.append([float(w[0]),float(w[1])])
        elif "))" in c[i]:
            w = (c[i].strip().replace(" ", ",").split(","))
            w[1] = w[1][:-2]
            distD.append([float(w[0]),float(w[1])])
        else:
            w = (c[i].strip().replace(" ", ",").split(","))
            distD.append([float(w[0]),float(w[1])])
    return distD

def get_value_dataE():
    listy = []
    distE = []
    jsStr = urllib.request.urlopen('https://data.buffalony.gov/api/views/j266-6xj4/rows.json?accessType=DOWNLOAD').read().decode().strip()
    stri = json.loads(jsStr)
    for i in stri['data']:
        if "District E" in i:
            listy.append(i[8])
    y =  listy[0][16: -3]
    z = y.strip()
    c = z.split(",")
    for i in range(0, len(c)):
        w = (c[i].strip().replace(" ", ",").split(","))
        distE.append([float(w[0]), float(w[1])])
    return distE


a = get_value_dataA()
with open("C:\\Users\\Savage\\Desktop\\DataA.json", "w") as f:
    f.write(json.dumps(a))
