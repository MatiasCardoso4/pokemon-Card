import { pokemonID } from "./createDisplayElements.js";

const URL = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`;
export async function getPokemons(callback) {
  try {
      const req = new XMLHttpRequest();
      req.open("GET", URL);
      req.onload = () => {
        if (req.status === 200) {
          const pokemon = JSON.parse(req.response)
          callback(pokemon)
        }
    };
    req.send()
  } catch (e) {
    console.error(e);
  }
}

