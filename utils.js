import pokeData from './data.js';

function getRandomPokemon(pokeArray, amount) {
    const randPokeSet = new Set([]);

    while (randPokeSet.size < amount) {
        const randIndex = Math.floor(Math.random() * pokeArray.length);
        randPokeSet.add(pokeArray[randIndex]);
    }   
    return Array.from(randPokeSet);
}

function renderPokemon(randPokeArray, element) {
    for (const pokemon of randPokeArray) {
        let img = document.createElement('img');
        img.src = pokemon.url_image;
        img.addEventListener('click', () => {
            //coolzone
        });
        element.append(img);
    }
}

