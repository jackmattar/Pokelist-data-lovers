require("../src/data.js");

pokeData =[
  {name: "Bulbasaur", candyCount: 12, egg: "2 km"},
  {name: "Charizard", candyCount: 25, egg: "5 km"},
  {name: "Nidoqueen", candyCount: 50, egg: "10 km"},  
  {name: "Ekans", candyCount: 100, egg: "Not in Eggs"}, 
  {name: "Arbok", candyCount: 400},
  {name: "Pikachu", egg: "2 km"}     
];

describe("função filter", () => {
  it("filtra ovos", () => {
    expect(filter(pokeData, "egg", "2 km" )).toEqual([{name: "Bulbasaur", candyCount: 12, egg: "2 km"}, {name: "Pikachu", egg: "2 km"}]);
  });
  it("filtra ovos", () => {
    expect(filter(pokeData, "egg", "5 km" )).toEqual([{name: "Charizard", candyCount: 25, egg: "5 km"}]);
  });
  it("filtra ovos", () => {
    expect(filter(pokeData, "egg", "10 km" )).toEqual([{name: "Nidoqueen", candyCount: 50, egg: "10 km"}]);
  });
  it("filtra ovos", () => {
    expect(filter(pokeData, "egg", "Not in Eggs" )).toEqual([{name: "Ekans", candyCount: 100, egg: "Not in Eggs"}]);
  });
});

describe("função candiesOrder", () => {
  it("Ordena do menor para o maior", () => {
    expect(ordernation(pokeData, "candyCount", "ascending" )).toEqual([{name: "Bulbasaur", candyCount: 12, egg: "2 km"},
      {name: "Charizard", candyCount: 25, egg: "5 km"}, {name: "Nidoqueen", candyCount: 50, egg: "10 km"}, {name: "Ekans",
        candyCount: 100, egg: "Not in Eggs"}, {name: "Arbok", candyCount: 400}]);
  });    
  it("Ordena do maior para o menor", () => {
    expect(ordernation(pokeData, "candyCount", "descending" )).toEqual([{name: "Arbok", candyCount: 400}, {name: "Ekans", candyCount: 100, egg: "Not in Eggs"},
      {name: "Nidoqueen", candyCount: 50, egg: "10 km"}, {name: "Charizard", candyCount: 25, egg: "5 km"}, {name: "Bulbasaur", candyCount: 12, egg: "2 km"}]);
  }); 
  it("Não ordenaveis", () => {
    expect(ordernation(pokeData, "candyCount", "noEvolution" )).toEqual([{name: "Pikachu", egg: "2 km"}]);
  }); 
  it("Ordena de A-Z", () => {
    expect(ordernation(pokeData, "name", "A-Z" )).toEqual([{name: "Arbok", candyCount: 400}, {name: "Bulbasaur", candyCount: 12, egg: "2 km"},
      {name: "Charizard", candyCount: 25, egg: "5 km"}, {name: "Ekans", candyCount: 100, egg: "Not in Eggs"},
      {name: "Nidoqueen", candyCount: 50, egg: "10 km"}, {name: "Pikachu", egg: "2 km"}]);
  });    
  it("Ordena de Z-A", () => {
    expect(ordernation(pokeData, "name", "Z-A" )).toEqual([{name: "Pikachu", egg: "2 km"}, {name: "Nidoqueen", candyCount: 50, egg: "10 km"},
      {name: "Ekans", candyCount: 100, egg: "Not in Eggs"}, {name: "Charizard", candyCount: 25, egg: "5 km"},
      {name: "Bulbasaur", candyCount: 12, egg: "2 km"}, {name: "Arbok", candyCount: 400}]);
  }); 
});
