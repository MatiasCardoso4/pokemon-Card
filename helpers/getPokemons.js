import { pokemonId, createElement } from "./createDisplayElements.js";

export async function getPokemonById() {
  const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    createElement(data)
    return data;
  } catch (e) {
    console.error(e);
  }
}

export async function getPokemons() {
  const URL = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;

  try {
    const response = await fetch(URL);
    const data = await response.json();
    
    return data;
  } catch (e) {
    console.error(e);
  }
}
