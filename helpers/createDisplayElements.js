const cardContainer = document.querySelector('.pokemon-card-container')

export function createElement(pokemon) {
  const card = document.createElement('div')
  card.classList.add('pokemon-card')


  const abilities = pokemonAbilities(pokemon);
  const stats = pokemonStats(pokemon)
  const name = document.createElement("h2");
  const image = document.createElement("img");
  const id = document.createElement("p");

  name.textContent = pokemon.name;
  image.src = pokemon.sprites.front_default;
  id.textContent = pokemon.id
  card.append(name, id, image, abilities,stats);
  cardContainer.appendChild(card)
}

function pokemonAbilities(pokemon) {
  const abilities = document.createElement("p");
  abilities.textContent = pokemon.abilities.map((ability) => ability.ability.name).join(", ");
  return abilities;
}

function pokemonStats(pokemon) {
  const stats = document.createElement('p')
  stats.textContent = pokemon.stats.map(stat =>  stat.stat.name)
  return stats
}