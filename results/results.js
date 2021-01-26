import { clearPokeStats, getPokeStats } from '../local-storage-utils.js';
import { renderCaughtResults, renderSeenResults } from './results-utils.js';

const pokeStats = getPokeStats();
const resetButton = document.getElementById('reset-button');

for (const item of pokeStats) {
    renderCaughtResults(item);
    renderSeenResults(item);
}

resetButton.addEventListener('click', () => {
    clearPokeStats();
    window.location = '../';
});