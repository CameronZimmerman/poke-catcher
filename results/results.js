import { getPokeStats } from '../local-storage-utils.js';
import { renderCaughtResults, renderSeenResults } from './results-utils.js';

const pokeStats = getPokeStats();

for (const item of pokeStats) {
    renderCaughtResults(item);
    renderSeenResults(item);
}