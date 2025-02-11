
const cardContainer = document.querySelector(".pokemon-card-container");

export let pokemonID = 1;

export function createElement(pokemon) {

  cardContainer.innerHTML = "";

  const card = document.createElement("div");
  card.classList.add("pokemon-card");

  const abilities = pokemonAbilities(pokemon);
  const stats = pokemonStats(pokemon);
  const name = document.createElement("h2");
  const image = document.createElement("img");
  const id = document.createElement("p");

  const { leftArrow, rightArrow } = createArrows();
  rightArrow.addEventListener("click", () => nextPokemon(pokemon));

  name.textContent = pokemon.name;
  image.src = pokemon.sprites.front_default;
  id.textContent = pokemon.id;
  card.append(name, id, leftArrow, image, rightArrow, abilities, stats);
  cardContainer.appendChild(card);
}

function pokemonAbilities(pokemon) {
  const abilities = document.createElement("p");
  abilities.textContent = pokemon.abilities
    .map((ability) => ability.ability.name)
    .join(", ");
  return abilities;
}

function pokemonStats(pokemon) {
  const stats = document.createElement("p");
  stats.textContent = pokemon.stats.map((stat) => stat.stat.name);
  return stats;
}

function createArrows() {
  const leftArrow = document.createElement("div");
  leftArrow.classList.add("left-arrow");
  leftArrow.append();

  leftArrow.addEventListener("click", () => {
    console.log("left arrow");
  });

  const rightArrow = document.createElement("div");
  rightArrow.classList.add("right-arrow");

  return {
    leftArrow,
    rightArrow,
  };
}

export async function nextPokemon(pokemon) {
  pokemonID = pokemonID + 1;
  createElement(pokemon);
}
