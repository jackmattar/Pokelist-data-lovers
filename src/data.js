window.filter= filter;
window.candiesOrder=candiesOrder;

function filter(data,filterBy,condition){
    let takeKm= data.filter(newarray => (newarray[filterBy] === condition))
    pokecards(takeKm)
}

function candiesOrder(data, sortBy, orderBy,){
    let sliceData= data.slice(0, -1)
    if(orderBy == "noEvolution"){
        let filterCandies = sliceData.filter(candies=>candies[sortBy] == undefined)
        pokecards(filterCandies)
    }else if(orderBy == "ascending"){
        let filterCandies = sliceData.filter(candies=>candies[sortBy] != undefined)
        filterCandies.sort((a,b) =>{ return a[sortBy]>b[sortBy]? 1:-1})
        pokecards(filterCandies)       
    }else{
        let filterCandies = sliceData.filter(candies=>candies[sortBy] != undefined)
        filterCandies.sort((a,b) =>{ return a[sortBy]>b[sortBy]? -1:1})
        pokecards(filterCandies)  
    }
}