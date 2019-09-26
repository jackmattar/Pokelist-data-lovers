window.filter= filter;
window.ordernation= ordernation;

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