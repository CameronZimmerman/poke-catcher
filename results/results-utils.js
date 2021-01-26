import pokeData from '../data.js';
import { findByUnderscoreId } from '../utils.js';

export function renderCaughtResults(pokeStat) {
    if(pokeStat.caught > 0){
        const table = document.getElementById('caught-table');
        const newPokemon = findByUnderscoreId(pokeStat._id, pokeData);
        const tr = document.createElement('tr');

        const pokemonImg = document.createElement('img');
        const tdPokemon = document.createElement('td');
        pokemonImg.src = newPokemon.url_image;
        pokemonImg.classList.add('poke-img');
        tdPokemon.append(pokemonImg);

        const tdName = document.createElement('td');
        tdName.textContent = newPokemon.pokemon;

        const tdSeen = document.createElement('td');
        tdSeen.textContent = pokeStat.seen;

        const tdCaught = document.createElement('td');
        tdCaught.textContent = pokeStat.caught;

        tr.append(tdPokemon, tdName, tdSeen, tdCaught);
        table.append(tr);
    }
    
}

export function renderSeenResults(pokeStat) {
    const table = document.getElementById('seen-table');
    const newPokemon = findByUnderscoreId(pokeStat._id, pokeData);
    
    if (pokeStat.caught === 0 && pokeStat.seen >= 1) {
        const seenP = document.createElement('p');
        seenP.textContent = newPokemon.pokemon;
        table.append(seenP);

        const pokemonImg = document.createElement('img');
        const tdPokemon = document.createElement('td');
        pokemonImg.src = newPokemon.url_image;
        pokemonImg.classList.add('poke-img');
        table.append(pokemonImg);
    }
}