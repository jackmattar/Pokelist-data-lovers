// esta é uma função de exemplo
// // veja como agregamos a função ao objeto global window

// const example = () => {
//   return "example";
// };

// window.example = example;
let id1=document.getElementById("1")
const pokedata = POKEMON["pokemon"];
let takepokemon= pokedata.map(pokemons => 
  `<section>
    <img src="${pokemons.img}"/>
    <div>Nome: ${pokemons.name}</div>
    <div>Ovos: ${pokemons.egg}</div>
    <div>Id: ${pokemons.id}</div>
    </section>`)
id1.innerHTML= takepokemon