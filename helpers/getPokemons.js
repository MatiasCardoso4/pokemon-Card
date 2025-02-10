
export async function getPokemons(callback) {
  const URL = "https://pokeapi.co/api/v2/pokemon/15";
  try {
    const req = new XMLHttpRequest();
    req.open("GET", URL);
    req.onload = () => {
      if (req.status === 200) {
        const pokemon = JSON.parse(req.response)
        console.log(pokemon);
        callback(pokemon)
      }
    };
    req.send();
  } catch (e) {
    console.error(e);
  }
}

