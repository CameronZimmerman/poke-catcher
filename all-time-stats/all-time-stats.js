import { getAllTimeStats } from '../local-storage-utils.js';
import renderChart from './render-chart.js';

const allTimeStats = getAllTimeStats();

const chartContainer = document.getElementById('chart-container');
const resetButton = document.getElementById('reset-button');

let chartNum = 0;
for (const pokeStats of allTimeStats) {
    chartNum ++;
    renderChart(pokeStats, chartContainer, chartNum);
}

resetButton.addEventListener('click', () => {
    window.location = '../';
});