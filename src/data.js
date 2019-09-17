window.filterEggs= filterEggs;
window.candiesOrder= candiesOrder;

function filterEggs(data, condition){
    let takeKm= data.filter(egg => (egg.egg === condition))
    pokecards(takeKm)
}

function candiesOrder(data, sortBy, orderBy,){

    const a= data.map(candies=> candies[sortBy])
    if(orderBy === "Menor-Maior"){
      const takeCandies= a.sort(function (a, b){
        return a>b? 1: a<b? -1:0;
    })
    console.log(takeCandies)
    } else{
        const takeCandies=a.sort(function (a, b){
            return a<b? 1: a>b? -1:0;
        })
        console.log(takeCandies)
    }
}


  