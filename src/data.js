window.filterEggs= filterEggs;

function filterEggs(data, km){
    let takeKm= data.filter(egg => (egg.egg === km))
    pokecards(takeKm)
}
  