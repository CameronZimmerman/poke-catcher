import pokeData from './data.js';

export function findByUnderscoreId(_id, array) {
    for (const item of array) {
        if (item._id === _id) return item;
    }
    return null;
}

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

