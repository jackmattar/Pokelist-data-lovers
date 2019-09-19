const pokeData = POKEMON["pokemon"];
const showPokemons= document.getElementById("1")
const homeMenu= document.getElementById("home").addEventListener("click", initial)
const menuCandies= document.getElementById("menuCandies")
const menuEggs = document.getElementById('menuEggs')
const teste= document.getElementById("teste")

function initial(){
  pokecards(pokeData)
}
<<<<<<< HEAD
<<<<<<< HEAD
=======

menuTarget.addEventListener("click", function(e) {
    let eggId= e.target.id;
    window.filterEggs(pokeData, eggId)
});

menuCandies.addEventListener("click", function(e) {
  let someId= e.target.id;
  candiesOrder(pokeData, "candy_count", someId)
});
>>>>>>> 9a0f58fa5204237357abb1403a3a718c45606ccd
=======
>>>>>>> e9ab3983a2f189e80b30d46ab2d97c50a8a92eff

const template = (img, name, egg, type, weaknesses, candy_count) => {
  const takePokemon = `
  <section>
    <img src="${img}"/>
    <p>Nome: ${name}</p>
    <p>Ovos: ${egg}</p>
    <p>Tipo: ${type}</p>
    <p>Fraquezas: ${weaknesses}</p>
    <p>Candies: ${candy_count}</p>
  </section>`

}

menuEggs.addEventListener("click", function(e) {
let someId= e.target.id
window.filterEggs(pokeData, someId)
});

menuCandies.addEventListener("click", function(e) {
  let someId= e.target.id;
  window.candiesOrder(pokeData, "candy_count", someId)
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
