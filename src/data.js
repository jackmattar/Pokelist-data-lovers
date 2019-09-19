window.filterEggs= filterEggs;
window.candiesOrder=candiesOrder;

function filterEggs(data, condition){
    let takeKm= data.filter(egg => (egg.egg === condition))
    pokecards(takeKm)
}

function candiesOrder(data, sortBy, orderBy,){
    let sliceData= data.slice(0, -1)
    if(orderBy == "noEvolution"){
        let filterCandies = sliceData.filter(candies=>candies[sortBy] == undefined)
        pokecards(filterCandies)
    }else if(orderBy == "ascending"){
        let filterCandies = sliceData.filter(candies=>candies[sortBy] != undefined)
        filterCandies.sort((a,b) =>{ return a[sortBy]-b[sortBy]})
        pokecards(filterCandies)       
    }else{
        let filterCandies = sliceData.filter(candies=>candies[sortBy] != undefined)
        filterCandies.sort((a,b) =>{ return b[sortBy]-a[sortBy]})
        pokecards(filterCandies)  
    }
}        

