window.filterEggs= filterEggs;
window.candiesOrder= candiesOrder;

function filterEggs(data, condition){
    let takeKm= data.filter(egg => (egg.egg === condition))
    pokecards(takeKm)
}
<<<<<<< HEAD

function candiesOrder(data, sortBy, orderBy,){

    // const a= data.map(candies=> candies[sortBy])
    if(orderBy === "Menor-Maior"){
      const takeCandies= data.sort(function (a, b){
        return a[sortBy]>b[sortBy]? 1: a[sortBy]<b[sortBy]? -1:0;
    })
    console.log(takeCandies)
    } else{
        const takeCandies=a.sort(function (a, b){
            return a<b? 1: a>b? -1:0;
        })
        console.log(takeCandies)
    }
}


  
=======
>>>>>>> 7e9f0559574b085c56e99835d5ae02f72753930c
