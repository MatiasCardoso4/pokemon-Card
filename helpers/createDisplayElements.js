import { getPokemonById, getPokemons} from "./getPokemons.js";

const name = document.querySelector(".pokemon-name");
const image = document.querySelector(".pokemon-image");
const id = document.querySelector(".id");
const abilities = document.querySelector(".abilities");
const stats = document.querySelector(".stats");
const card = document.querySelector(".pokemon-card");
const cardContainer = document.querySelector(".pokemon-card-container");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");


const data = await getPokemons()
console.log(data.results);




function getPokemonId(index) {
  const match = data.results[index].url.match(/\/(\d+)\/?$/);
  
  return match ? match[1] : null;
}

const  firstMatch = getPokemonId(0)
const  secondMatch = getPokemonId(1303)

const firstPokemonId = firstMatch
const lastPokemonId = secondMatch

export let pokemonId = firstPokemonId

export function createElement(pokemon) {
  cardContainer.innerHTML = "";

  const abilities = pokemonAbilities(pokemon);
  const stats = pokemonStats(pokemon);

  name.textContent = pokemon.name;
  image.src = pokemon.sprites.front_default  ;
  image.alt = pokemon.name
  id.textContent = pokemon.id;
  card.append(name, id, image, abilities, stats);
  cardContainer.append(card);
}

function pokemonAbilities(pokemon) {
  abilities.textContent = pokemon.abilities.map(
    (ability) => ability.ability.name
  );
  return abilities;
}

function pokemonStats(pokemon) {
  stats.textContent = pokemon.stats.map((stat) => stat.stat.name);
  return stats;
}

export function increase() {
  pokemonId++
  if(pokemonId > lastPokemonId){
    pokemonId = firstPokemonId
  }
  getPokemonById(pokemonId)
}

export function decrease() {
  pokemonId--;
  if(pokemonId < firstPokemonId){
    pokemonId = lastPokemonId
  }
  getPokemonById(pokemonId)
}

rightArrow.addEventListener("click", increase);
rightArrow.addEventListener("click", ()=> {
  rightArrow.classList.toggle('scale')
});
leftArrow.addEventListener("click", decrease);
getPokemonById()
