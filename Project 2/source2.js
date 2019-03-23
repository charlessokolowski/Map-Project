function loadMap(){
  Plotly.setPlotConfig({ mapboxAccessToken: 'pk.eyJ1IjoiY2pzb2tvbG8iLCJhIjoiY2pvMXNmMmRrMGV1MjNrcXlhMHNhbWN4ZyJ9.z7dxUFEJlRJ0XM53nhZMjA' });
  var m = document.getElementById("hour").value
  var op = document.getElementById("ops");
  op.innerHTML = "You selected crime data at " + m + ":00 am / pm";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.readyState === 4 && this.status === 200){
      var mapParams = getMapParams(this.response);
      var mapParams2 = getMapParams2(this.response, m);
      Plotly.react('source2', mapParams.data, mapParams.layout);
      Plotly.react('source', mapParams2.data, mapParams2.layout);
        }
    };
  xhttp.open("GET", "/CrimeData");
  xhttp.send();
}

function setupMapData(z){
  var AssaultListLat = []
  var AssaultListLon = []
  var AssaultListName = []
  var TheftListLat = []
  var TheftListLon = []
  var TheftListName = []
  var BurglaryListLat = []
  var BurglaryListLon = []
  var BurglaryListName = []
  var MurderListLat = []
  var MurderListLon = []
  var MurderListName = []
  var UUVListLat = []
  var UUVListLon = []
  var UUVListName = []
  var AbuseListLat = []
  var AbuseListLon = []
  var AbuseListName = []
  var RapeListLat = []
  var RapeListLon = []
  var RapeListName = []
  var RobberyListLat = []
  var RobberyListLon = []
  var RobberyListName = []
  var TofSListLat = []
  var TofSListLon = []
  var TofSListName = []
  for(var i of z){
    if (i.includes("ASSAULT")){
      AssaultListLat.push(Number(i[0]));
      AssaultListLon.push(Number(i[1]));
      AssaultListName.push(i[2]);
    }
    else if (i.includes("LARCENY/THEFT")){
      TheftListLat.push(Number(i[0]));
      TheftListLon.push(Number(i[1]));
      TheftListName.push(i[2]);
    }
    else if (i.includes("BURGLARY")){
      BurglaryListLat.push(Number(i[0]));
      BurglaryListLon.push(Number(i[1]));
      BurglaryListName.push(i[2]);
    }
    else if (i.includes("MURDER")){
      MurderListLat.push(Number(i[0]));
      MurderListLon.push(Number(i[1]));
      MurderListName.push(i[2]);
    }
    else if (i.includes("UUV")){
      UUVListLat.push(Number(i[0]));
      UUVListLon.push(Number(i[1]));
      UUVListName.push(i[2]);
    }
    else if (i.includes("SEXUAL ABUSE")){
      AbuseListLat.push(Number(i[0]));
      AbuseListLon.push(Number(i[1]));
      AbuseListName.push(i[2]);
    }
    else if (i.includes("RAPE")){
      RapeListLat.push(Number(i[0]));
      RapeListLon.push(Number(i[1]));
      RapeListName.push(i[2]);
    }
    else if (i.includes("ROBBERY")){
      RobberyListLat.push(Number(i[0]));
      RobberyListLon.push(Number(i[1]));
      RobberyListName.push(i[2]);
    }
    else if (i.includes("THEFT OF SERVICES")){
      TofSListLat.push(Number(i[0]));
      TofSListLon.push(Number(i[1]));
      TofSListName.push(i[2]);
    }
  }
    var ASSAULT = {
      lat: AssaultListLat,
      lon: AssaultListLon,
      mode: 'markers',
      type: 'scattermapbox',
      name: 'Assault',
      text: AssaultListName,
      marker: {
        size: 8,
        color: "rgba(255, 255, 255, .8)"}
  };
    var THEFT = {
      lat: TheftListLat,
      lon: TheftListLon,
      mode: 'markers',
      type: 'scattermapbox',
      name: 'Theft',
      text: TheftListName,
      marker: {
        size: 8,
        color: "rgba(0,0,0, .7)"}
  };
    var BURGLARY = {
      lat: BurglaryListLat,
      lon: BurglaryListLon,
      mode: 'markers',
      type: 'scattermapbox',
      name: 'Burglary',
      text: BurglaryListName,
      marker: {
        size: 8,
        color: "rgba(0, 162, 0,.8)"}
  };
    var MURDER = {
      lat: MurderListLat,
      lon: MurderListLon,
      mode: 'markers',
      type: 'scattermapbox',
      name: 'Murder',
      text: MurderListName,
      marker: {
        size: 25,
        color: "rgba(255,0,0,.8)"}
  };
    var UUV = {
      lat: UUVListLat,
      lon: UUVListLon,
      mode: 'markers',
      type: 'scattermapbox',
      name: 'UUV',
      text: UUVListName,
      marker: {
        size: 8,
        color: "rgba(129, 0, 252, .8)"}
  };
    var SEXUAL_ABUSE = {
      lat: AbuseListLat,
      lon: AbuseListLon,
      mode: 'markers',
      type: 'scattermapbox',
      name: 'Sexual Abuse',
      text: AbuseListName,
      marker: {
        size: 8,
        color: "rgba(129, 65, 252, .8)"}
};
  var RAPE = {
    lat: RapeListLat,
    lon: RapeListLon,
    mode: 'markers',
    type: 'scattermapbox',
    name: 'Rape',
    text: RapeListName,
    marker: {
      size: 8,
      color: "rgba(129, 65, 252, .8)"}
};
  var ROBBERY = {
    lat: RobberyListLat,
    lon: RobberyListLon,
    mode: 'markers',
    type: 'scattermapbox',
    name: 'Robbery',
    text: RobberyListName,
    marker: {
      size: 8,
      color: "rgba(129, 65, 252, .8)"}
};
  var THEFT_OF_SERVICES = {
    lat: TofSListLat,
    lon: TofSListLon,
    mode: 'markers',
    type: 'scattermapbox',
    name: 'Theft of services',
    text: TofSListName,
    marker: {
      size: 8,
      color: "rgba(13, 55, 52, .8)"}
};
    var data = [ASSAULT,THEFT,MURDER,UUV,BURGLARY,SEXUAL_ABUSE,RAPE,ROBBERY, THEFT_OF_SERVICES]
    return data
}

function findCenter(z){
  var cen = []
  var data = setupMapData(z)
  var latit = data[0].lat
  var long = data[0].lon
  var cenlat = (Math.max.apply(null,latit) + Math.min.apply(null,latit))/2
  var cenlon = (Math.max.apply(null,long)+ Math.min.apply(null,long))/2
  cen.push(cenlat);
  cen.push(cenlon);
  return cen;
}

function setupMapLayout(c){
  var laydata = findCenter(c)
  var layout = {
    autosize: true,
    hovermode:'closest',
    mapbox: {
      bearing:0,
      center: {
        lat:laydata[0],
        lon:laydata[1]
      },
      pitch:0,
      zoom:11.75,
      style:'dark',
          layers: [
            {
                  sourcetype: 'geojson',
                  source:'https://raw.githubusercontent.com/charlessokolowski/plotly/master/DataA.json',
                  type: 'fill',
                  color: 'rgba(239, 140, 97, .55)',
                  below: "state-label-sm"
              },
              {
                  sourcetype: 'geojson',
                  source: 'https://raw.githubusercontent.com/charlessokolowski/plotly/master/DataB.json',
                  type: 'fill',
                  color: 'rgba(166, 162, 246, 0.55)',
                  below: "state-label-sm"
              },
              {
                  sourcetype: 'geojson',
                  source: 'https://raw.githubusercontent.com/charlessokolowski/plotly/master/DataC.json',
                  type: 'fill',
                  color: 'rgba(200, 246, 162, 0.55)',
                  below: "state-label-sm"
              },
              {
                  sourcetype: 'geojson',
                  source: 'https://raw.githubusercontent.com/charlessokolowski/plotly/master/DataD.json',
                  type: 'fill',
                  color: 'rgba(246, 233, 162, 0.55)',
                  below: "state-label-sm"

              },
              {
                  sourcetype: 'geojson',
                  source: 'https://raw.githubusercontent.com/charlessokolowski/plotly/master/DataE.json',
                  type: 'fill',
                  color: 'rgba(162, 244, 246, 0.55)',
                  below: "state-label-sm"
              }
          ]
      }
    }
  return layout
}

function getMapParams(g){
  var jsDict = {}
  var par = JSON.parse(g)
  var data = setupMapData(par)
  var layout = setupMapLayout(par)
  jsDict["data"] = data
  jsDict["layout"] = layout
  return jsDict
}

// function get_value(){
//   var e = document.getElementById('hour').value;
//   var op = document.getElementById("ops");
//   op.innerHTML = "You selected crime data at " + e + ":00 am / pm";
//   return e
// }

function setupMapData2(z, m){
  AssaultListLat1= 0
  BurglaryListLat1= 0
  TheftListLat1=0
  MurderListLat1=0
  UUVListLat1=0
  AbuseListLat1= 0
  RapeListLat1=0
  RobberyListLat1=0
  TofSListLat1=0
  // m = get_value()
  // input = window.parent.document.createElement('input')
  for (var i of z){
      if(i.includes('ASSAULT') && Number(i[3]) == Number(m)){
        AssaultListLat1+=1;
    }
      else if (i.includes("LARCENY/THEFT") && Number(i[3]) == Number(m)){
        TheftListLat1+=1;
      }
      else if (i.includes("BURGLARY") && Number(i[3]) == Number(m)){
        BurglaryListLat1+=1;
      }
      else if (i.includes("MURDER") && Number(i[3]) == Number(m)){
        MurderListLat1+=1;
      }
        else if (i.includes("UUV") && Number(i[3]) == Number(m)){
        UUVListLat1+=1;
    }
      else if (i.includes("SEXUAL ABUSE") && Number(i[3]) == Number(m)){
        AbuseListLat1+=1;
  }
      else if (i.includes("RAPE") && Number(i[3]) == Number(m)){
        RapeListLat1+=1;
  }
      else if (i.includes("ROBBERY") && Number(i[3]) == Number(m)){
        RobberyListLat1+=1;
}
      else if (i.includes("THEFT OF SERVICES") && Number(i[3]) == Number(m)){
        TofSListLat1+=1;
}
  }
  var trace1 = {
    x: ['ASSAULT', 'BURGLARY', 'LARCENY/THEFT', 'MURDER', 'UUV', 'SEXUAL ABUSE', 'RAPE', 'ROBBERY', 'THEFT OF SERVICES'],
    y: [AssaultListLat1,BurglaryListLat1,TheftListLat1,MurderListLat1,UUVListLat1, AbuseListLat1, RapeListLat1, RobberyListLat1, TofSListLat1],
    marker:{
      color: ['rgba(255, 255, 255, .8)', 'rgba(0, 162, 0,.8)', 'rgba(0,0,0, .7)', 'rgba(255,0,0,.8)', 'rgba(129, 0, 252, .8)']
      },
      type: 'bar'
    };
  var data = [trace1]
  return data
}


function getMapParams2(g, m){
  var jsDict = {}
  var par = JSON.parse(g)
  var data = setupMapData2(par, m)
  var layout =  {
  };
  jsDict["data"] = data
  jsDict["layout"] = layout
  return jsDict
}
