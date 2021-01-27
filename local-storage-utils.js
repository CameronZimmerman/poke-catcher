import { findByUnderscoreId } from './utils.js';

const POKESTATS = 'POKESTATS';
const ALLTIMESTATS = 'ALLTIMESTATS';

export function getPokeStats(){
    return JSON.parse(localStorage.getItem(POKESTATS) || '[]');
}

export function getAllTimeStats(){
    return JSON.parse(localStorage.getItem(ALLTIMESTATS) || '[]');
}

export function updatePokeStats(pokemon, isCaught) {
    const pokeStats = getPokeStats();
    const pokemonStat = findByUnderscoreId(pokemon._id, pokeStats);

    if (!isCaught) {

        if (pokemonStat) pokemonStat.seen++;
        else {
            const newPokeStat = {
                height: pokemon.height,
                weight: pokemon.weight,
                speed: pokemon.speed,
                type: pokemon.type_1,
                ability: pokemon.ability_1,
                name : pokemon.pokebase,
                _id : pokemon._id,
                seen : 1,
                caught : 0
            };

            pokeStats.push(newPokeStat);
        }
    }
    else {
        pokemonStat.caught++;
    }

    localStorage.setItem(POKESTATS, JSON.stringify(pokeStats));
}

export function updateAllTimeStats(pokeStats){
    let allTimeStats = getAllTimeStats();

    allTimeStats.push(pokeStats);

    localStorage.setItem(ALLTIMESTATS, JSON.stringify(allTimeStats));
}

export function clearPokeStats(){
    localStorage.setItem(POKESTATS, '[]');
}
