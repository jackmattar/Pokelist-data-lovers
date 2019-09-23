const pokeData = POKEMON["pokemon"];
const showPokemons= document.getElementById("1")
const homeMenu= document.getElementById("home").addEventListener("click", initial)
const menuTarget = document.getElementById('menutarget')
const menuName= document.getElementById('menuName')
const menuType= document.getElementById("menuType")
const teste= document.getElementById("teste")

function initial(){
  pokecards(pokeData)
}

menuTarget.addEventListener("click", function(e) {
    let eggId= e.target.id;
    window.filter(pokeData,"egg", eggId)
});

menuCandies.addEventListener("click", function(e) {
  let someId= e.target.id;
  candiesOrder(pokeData, "candy_count", someId)
});

menuName.addEventListener("click", function(e) {
  let someId= e.target.id;
  candiesOrder(pokeData, "name", someId)
});


function pokecards(someParameter){
  showPokemons.innerHTML= `${someParameter.map(poke =>
  `<section class="pokecard">
  <div class="inner">
      <p class="num">#${poke.num}</p>
      <p class="name">${poke.name}</p>
      <p class="pokeimg">
        <img src="${poke.img}"/>
      </p>
      <p class="candy"><img src="images/candy.png" class="icons"/> ${poke.candy_count}</p>
      <div class="insideCard">
        <p><img src="images/egg.png" class="icons egg"/> ${poke.egg}</p>
        <p><h4 class="subtittles">Tipo</h4><hr> ${poke.type}</p>
        <p class="weakness"><h4 class="subtittles">Fraquezas</h4> <hr>${poke.weaknesses}</p>
      </div>
    </div>
  </section>`
).join("")}`
}
