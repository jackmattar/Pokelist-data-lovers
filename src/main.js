let id1=document.getElementById("1")
const pokeData = POKEMON["pokemon"];
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

  id1.innerHTML += takePokemon
}

const twoKm = pokeData.filter(egg => (egg.egg ==="2 km"))

// pokeData.map(pokemons => template(pokemons.img, pokemons.name, pokemons.egg))

twoKm.map(elem => template(elem.img, elem.name, elem.egg, elem.type, elem.weaknesses, elem.candy_count));