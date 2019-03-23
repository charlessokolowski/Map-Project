var y = [[334444,44322265,"34222"],[3443,43333,"hgfh"], [443334,43334,"34222"]]

function drer(z){
  var listy = []
  for (var i of z){
      if (i.includes("34222")){
        listy.push(i[2])
  }
}
  return listy
}
console.log(drer(y))
