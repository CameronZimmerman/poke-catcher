import pokeData from './data.js';
import { updatePokeStats } from './local-storage-utils.js';

let rounds = 0;
const roundCountSpan = document.getElementById('round-count');

export function findByUnderscoreId(_id, array) {
    for (const item of array) {
        if (item._id === _id) return item;
    }
    return null;
}

export function getRandomPokemon(pokeArray, amount) {
    const randPokeSet = new Set([]);

    while (randPokeSet.size < amount) {
        const randIndex = Math.floor(Math.random() * pokeArray.length);
        const randPokemon = pokeArray[randIndex];
        randPokeSet.add(randPokemon);
        updatePokeStats(randPokemon, false);
    }   
    return Array.from(randPokeSet);
}

export function renderPokemon(randPokeArray, element) {
    element.textContent = '';
    for (const pokemon of randPokeArray) {
        const img = document.createElement('img');
        const container = document.createElement('div');
        container.append(img);
        img.src = pokemon.url_image;
        img.addEventListener('click', () => {
            updatePokeStats(pokemon, true);
            gameLoop();
        });
        element.append(container);
    }
}

export default function gameLoop(){
    const pokeContainerDiv = document.getElementById('pokemon-container');

    rounds++;
    roundCountSpan.textContent = 11 - rounds;

    if (rounds <= 10) {
        const randPokeArray = getRandomPokemon(pokeData, 3);

        renderPokemon(randPokeArray, pokeContainerDiv);
    } else {
        window.location = './results';
    }
    
}