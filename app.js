import pokeData from './data.js';
import { getRandomPokemon, renderPokemon } from './utils.js';
// import functions and grab DOM elements

const pokemonContainerDiv = document.getElementById('pokemon-container');

// initialize state

let roundsPlayed = 0;

// set event listeners to update state and DOM

const randPokeArr = getRandomPokemon(pokeData, 3);

renderPokemon(randPokeArr, pokemonContainerDiv);