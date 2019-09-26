const pokeData = POKEMON["pokemon"];
const showPokemons= document.getElementById("1");
const homeMenu= document.getElementById("home").addEventListener("click", initial);
const menuEgg = document.getElementById("menuEgg");
const menuName= document.getElementById("menuName");
const statistics = document.getElementById("statistics").addEventListener("click", () => printResult());

function initial() {
  pokecards(pokeData);
}

menuEgg.addEventListener("click", function (e) {
  const eggId= e.target.className;
  pokecards(window.filter(pokeData, "egg", eggId));
});

menuCandies.addEventListener("click", function(e) {
  const someId= e.target.id;
  pokecards(ordernation(pokeData, "candy_count", someId));
});

menuName.addEventListener("click", function(e) {
  const someId= e.target.id;
  pokecards(ordernation(pokeData, "name", someId));
});

function pokecards(array) {
  showPokemons.innerHTML= `${array.map(poke =>
    `<section class="pokecard">
    <div class="inner">
      <p class="num">#${poke.num}</p>
      <p class="name">${poke.name}</p>
      <p class="pokeimg">
        <img src="${poke.img}"/>
      </p>
      <p class="candy"><img src="images/candy.png" class="icons"/> ${poke.candy_count? poke.candy_count: "0"}</p>
      <div class="insideCard">
        <p id="eggs"><img src="images/egg.png" class="icons egg"/>${poke.egg != "Not in Eggs"? poke.egg:"Sem Ovos"}</p>
        <p><h4 class="subtittles">Tipo</h4><hr> ${poke.type.join(", ")}</p>
        <p class="weakness"><h4 class="subtittles">Fraquezas</h4><hr>${poke.weaknesses.join(", ")}</p>
      </div>
    </div>
  </section>`
  ).join("")}`;
}

function printResult() {
  showPokemons.innerHTML =
  `<section class="statistics"> 
  <div class="showInfo"> A porcentagem de Pokémons que vem em Ovos de 2 km é ${porcent(pokeData, "2 km")}%.
    <div>
      ${filter(pokeData, "egg", "2 km").map(img=>`<img src=${img.img}/>`).join(" ")}
    </div>
  </div> 
  <div class="showInfo"> A porcentagem de Pokémons que vem em Ovos de 5 km é ${porcent(pokeData, "5 km")}%.
    <div>
      ${filter(pokeData, "egg", "5 km").map(img=>`<img src=${img.img}/>`).join(" ")}
    </div>
  </div> 
  <div class="showInfo"> A porcentagem de Pokémons que vem em Ovos de 10 km é ${porcent(pokeData, "10 km")}%.
    <div>
      ${filter(pokeData, "egg", "10 km").map(img=>`<img src=${img.img}/>`).join(" ")}
    </div>
  </div> 
  <div class="showInfo"> A porcentagem de Pokémons que não vem em Ovos é de ${porcent(pokeData, "Not in Eggs")}%.
    <div>
      ${filter(pokeData, "egg", "Not in Eggs").map(img=>`<img src=${img.img}/>`).join(" ")}
    </div>
  </div> 
  </section>`
};








