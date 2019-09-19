const pokeData = POKEMON["pokemon"];
const showPokemons= document.getElementById("1")
const homeMenu= document.getElementById("home").addEventListener("click", initial)
const menuTarget = document.getElementById('menutarget')
const teste= document.getElementById("teste")

function initial(){
  pokecards(pokeData)
}

menuTarget.addEventListener("click", function(e) {
    let eggId= e.target.id;
    window.filterEggs(pokeData, eggId)
});

menuCandies.addEventListener("click", function(e) {
  let someId= e.target.id;
  candiesOrder(pokeData, "candy_count", someId)
});

function pokecards(someParameter){
  showPokemons.innerHTML= `${someParameter.map(poke =>
  `<section class="pokecard">
  <p class="pokeimg">
    <img src="${poke.img}"/>
  </p>
  <p>Nome: ${poke.name}</p>
  <p>Ovos: ${poke.egg}</p>
  <p>Tipo: ${poke.type}</p>
  <p>Fraquezas: ${poke.weaknesses}</p>
  <p>Candies para evoluir: ${poke.candy_count}</p>
</section>`
).join("")}`
}
