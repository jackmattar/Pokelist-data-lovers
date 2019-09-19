window.filterEggs= filterEggs;
<<<<<<< HEAD
<<<<<<< HEAD
window.candiesOrder= candiesOrder;
=======
window.candiesOrder=candiesOrder;
>>>>>>> 9a0f58fa5204237357abb1403a3a718c45606ccd
=======
window.candiesOrder=candiesOrder;
>>>>>>> e9ab3983a2f189e80b30d46ab2d97c50a8a92eff

function filterEggs(data, condition){
    let takeKm= data.filter(egg => (egg.egg === condition))
    pokecards(takeKm)
}
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> e9ab3983a2f189e80b30d46ab2d97c50a8a92eff

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

<<<<<<< HEAD
    
    

>>>>>>> 9a0f58fa5204237357abb1403a3a718c45606ccd
=======
>>>>>>> e9ab3983a2f189e80b30d46ab2d97c50a8a92eff
