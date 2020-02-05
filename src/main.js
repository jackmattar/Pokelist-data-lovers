const pokeData = POKEMON["pokemon"];
const showPokemons= document.getElementById("listpoke");
const homeMenu= document.getElementById("home").addEventListener("click", initial);
const menuEgg = document.getElementById("menuEgg");
const menuName= document.getElementById("menuName");
const statistics = document.getElementById("statistics").addEventListener("click", () => printResult());
const search= document.querySelector(".searchBox");
const buttonSearch= document.getElementById("buttonSearch").addEventListener("click", searchFilter);

function initial() {
  pokecards(pokeData);
}

menuEgg.addEventListener("click", function (e) {
  const eggId= e.target.className;
  pokecards(filter(pokeData, "egg", eggId));
});

menuCandies.addEventListener("click", function(e) {
  const someId= e.target.id;
  pokecards(ordernation(pokeData, "candy_count", someId));
});

menuName.addEventListener("click", function(e) {
  const someId= e.target.id;
  pokecards(ordernation(pokeData, "name", someId));
});

search.addEventListener("keypress", function(e) {
  if (e.which == 13) {
    searchFilter()
  }
});

function searchFilter(e) {
  let searchValue = search.value;
  const toFilter=searchValue.charAt(0).toUpperCase()+searchValue.slice(1);
  const filtered= filter(pokeData, "name", toFilter);
  if ((filtered.length) == 0) {
    showPokemons.innerHTML = 
    `<div class="searchResult">
        Não encontramos este Pokémon, verifique os dados e tente novamente.
     </div>`;
  } else {
    pokecards(filtered);
  }
  search.value = "";
  event.preventDefault()
}

function pokecards(array) {
  showPokemons.innerHTML= `${array.map(poke =>
    `<section class="maincontainer">
      <div class="pokecard">
        <div class="front">
          <div class="pokeFront">
            <p> <img class="frontlogo"src="images/pokemongo.png"></p>
            <p> <img class="front-img" src="${poke.img}"/></p>
            <p>${poke.name}</p>
          </div>
        </div>  
        <div class="back">
          <p class="num">#${poke.num}</p>
          <p class="name">${poke.name}</p>
          <p class="pokeimg">
            <img class="img-card"src="${poke.img}"/>
          </p>
          <p class="egg"><img src="images/egg.png" class="cardIcons"/>${poke.egg != "Not in Eggs"? poke.egg:"Sem Ovos"}</p>
          <p class="candy"><img src="images/candy.png" class="cardIcons candyIcon"/> ${poke.candy_count? poke.candy_count: "0"}</p>
          <div class="insideCard">
            <h4 class="subtittles">Tipo</h4>
            <hr>
            <p class="type-weakness"> ${poke.type.join(", ")}</p>
            <h4 class="subtittles">Fraquezas</h4>
            <hr>
            <p class="type-weakness">${poke.weaknesses.join(", ")}</p>
          </div>
        </div>  
      </div>
      <div>
        <a href="#" class="Top">Topo</a>
      </div>
    </section>`
  ).join("")}`;
}

function printResult() {
  showPokemons.innerHTML =
  `<section class="statistics"> 
    <div class="showInfo"> A porcentagem de Pokémons que vem em Ovos de 2 km é ${porcent(pokeData, "2 km")}%.
      <div>
        ${filter(pokeData, "egg", "2 km").map(img=>`<img  class="ajustImage" src="${img.img}"/>`).join(" ")}
      </div>
    </div> 
    <div class="showInfo"> A porcentagem de Pokémons que vem em Ovos de 5 km é ${porcent(pokeData, "5 km")}%.
      <div>
        ${filter(pokeData, "egg", "5 km").map(img=>`<img  class="ajustImage" src="${img.img}"/>`).join(" ")}
      </div>
    </div> 
    <div class="showInfo"> A porcentagem de Pokémons que vem em Ovos de 10 km é ${porcent(pokeData, "10 km")}%.
      <div>
        ${filter(pokeData, "egg", "10 km").map(img=>`<img  class="ajustImage" src="${img.img}"/>`).join(" ")}
      </div>
    </div> 
    <div class="showInfo"> A porcentagem de Pokémons que não vem em Ovos é de ${porcent(pokeData, "Not in Eggs")}%.
      <div>
        ${filter(pokeData, "egg", "Not in Eggs").map(img=>`<img  class="ajustImage" src="${img.img}"/>`).join(" ")}
      </div>
    </div> 
    <div>
      <a href="#" class="Top">Topo</a>
    </div>
  </section>`;
};