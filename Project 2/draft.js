// function loadMap(){
//   Plotly.setPlotConfig({ mapboxAccessToken: 'pk.eyJ1IjoiY2pzb2tvbG8iLCJhIjoiY2pvMXNmMmRrMGV1MjNrcXlhMHNhbWN4ZyJ9.z7dxUFEJlRJ0XM53nhZMjA' });
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function(){
//     if (this.readyState === 4 && this.status === 200){
//       var mapParams = getMapParams(this.response);
//       Plotly.plot('source', mapParams.data, mapParams.layout);
//         }
//     };
//   xhttp.open("GET", "/APIinfo");
//   xhttp.send();
// }
//
// mapbox_access_token = "pk.eyJ1IjoiY2pzb2tvbG8iLCJhIjoiY2pvMXNmMmRrMGV1MjNrcXlhMHNhbWN4ZyJ9.z7dxUFEJlRJ0XM53nhZMjA"
//

var data =[{
    type: 'scattermapbox',
        lat: ['45.5017'],
        lon: ['-73.5673'],
        mode: 'markers',
    }
]
var layout = {
  autosize: true,
  hovermode:'closest',
  mapbox: {
    bearing:0,
    center: {
      lat:42.878829040877,
      lon:-78.837624002228
    },
    pitch:0,
    zoom:11,
    style:'satellite-streets',
        layers: [
          {
                sourcetype: 'geojson',
                source:'https://raw.githubusercontent.com/charlessokolowski/plotly/master/DataA.json',
                type: 'fill',
                color: 'rgba(239, 140, 97, 0.60)'
            },
            {
                sourcetype: 'geojson',
                source: 'https://raw.githubusercontent.com/charlessokolowski/plotly/master/DataB.json',
                type: 'fill',
                color: 'rgba(166, 162, 246, 0.60)'
            },
            {
                sourcetype: 'geojson',
                source: 'https://raw.githubusercontent.com/charlessokolowski/plotly/master/DataC.json',
                type: 'fill',
                color: 'rgba(200, 246, 162, 0.60)'
            },
            {
                sourcetype: 'geojson',
                source: 'https://raw.githubusercontent.com/charlessokolowski/plotly/master/DataD.json',
                type: 'fill',
                color: 'rgba(246, 233, 162, 0.60)'
            },
            {
                sourcetype: 'geojson',
                source: 'https://raw.githubusercontent.com/charlessokolowski/plotly/master/DataE.json',
                type: 'fill',
                color: 'rgba(162, 244, 246, 0.60)'
            }
        ]
    }
  }
Plotly.setPlotConfig({
  mapboxAccessToken:'pk.eyJ1IjoiY2pzb2tvbG8iLCJhIjoiY2pvMXNmMmRrMGV1MjNrcXlhMHNhbWN4ZyJ9.z7dxUFEJlRJ0XM53nhZMjA'
})

Plotly.plot('source', data, layout)




// function loadMap(){
//   Plotly.setPlotConfig({ mapboxAccessToken: 'pk.eyJ1IjoiY2pzb2tvbG8iLCJhIjoiY2pvMXNmMmRrMGV1MjNrcXlhMHNhbWN4ZyJ9.z7dxUFEJlRJ0XM53nhZMjA' });
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function(){
//     if (this.readyState === 4 && this.status === 200){
//       var mapParams = getMapParams(this.response);
//       Plotly.plot('source', mapParams.data, mapParams.layout);
//         }
//     };
//   xhttp.open("GET", "/APIinfo");
//   xhttp.send();
// }
//
// function setupMapData(y){
//   var lat = [];
//   var long = [];
//   var text = [];
//   var data = [{
//   type:'scattermapbox',
//   lat:lat,
//   lon:long,
//   mode:'markers',
//   marker: {
//     size:5,
//     color: "rgb(255,0,0)"
//   },
//   text:text
// }]
// ;
//   var mapDict = {};
//   for(var i of y){
//     lat.push(Number(i[0]));
//     long.push(Number(i[1]));
//     text.push(i[2]);
//   }
//     return data;
// }
//
// function findCenter(z){
//   var cen = []
//   var data = setupMapData(z)
//   var latit = data[0].lat
//   var long = data[0].lon
//   var cenlat = (Math.max.apply(null,latit) + Math.min.apply(null,latit))/2
//   var cenlon = (Math.max.apply(null,long)+ Math.min.apply(null,long))/2
//   cen.push(cenlat);
//   cen.push(cenlon);
//   return cen;
//
// }
//
// function setupMapLayout(c){
//   var laydata = findCenter(c)
//   var layout = {
//   mapbox: {
//     style: "satellite-streets",
//     center: {
//       lat:laydata[0],
//       lon:laydata[1]
//     },
//     zoom:11
//   }
// }
//   return layout
// }
//
// function getMapParams(g){
//   var jsDict = {}
//   var par = JSON.parse(g)
//   var data = setupMapData(par)
//   var layout = setupMapLayout(par)
//   jsDict["data"] = data
//   jsDict["layout"] = layout
//   return jsDict
// }
