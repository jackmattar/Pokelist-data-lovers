let id1=document.getElementById("1")
const pokeData = POKEMON["pokemon"];
// let takeNameOfEvolution= pokeData.map(nameEvolution => nameEvolution.next_evolution)
// console.log(takeNameOfEvolution)
let takepokemon= pokeData.map(pokemons =>
 `<section>
  <img src="${pokemons.img}"/>
  <div>Nome: ${pokemons.name}</div>
  <div>Ovos: ${pokemons.egg}</div>
  </section>`)
  id1.innerHTML= takepokemon

const twoKm = pokeData.filter(egg => (egg.egg ==="2 km"))

  
console.log(typeof(twoKm))

// id1.innerHTML=pokeData
 id1.innerHTML = twoKm


// takepokemon.innerHTML = twoKm