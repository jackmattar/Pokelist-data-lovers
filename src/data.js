window.filter= filter;
window.ordernation= ordernation;
window.porcent= porcent;

function filter(data, filterBy, condition) {
  return data.filter(newarray => (newarray[filterBy].includes(condition)));
}

function ordernation(data, sortBy, orderBy) {
  let sliceData= data.slice();
  if ((orderBy === "Z-A")|| (orderBy==="descending")) {
    let filterCandies = sliceData.filter(candies=>candies[sortBy] != undefined);
    return filterCandies.sort((a, b) =>{ return a[sortBy]>b[sortBy]? -1:1;});
    
  } else if ((orderBy === "A-Z")|| (orderBy==="ascending")) {
    let filterCandies = sliceData.filter(candies=>candies[sortBy] != undefined);
    return filterCandies.sort((a, b) =>{ return a[sortBy]>b[sortBy]? 1:-1;});
           
  } else {
    return sliceData.filter(candies=>candies[sortBy] == undefined);
  }
}

function porcent(data, condition) {
  const eggsFiltered= filter(data, "egg", condition);
  const porcent = (eggsFiltered.length / data.length)*100; 
  return porcent.toString().slice(0, 4);
  
}