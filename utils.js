export function getRandomPokemon(pokeArray, amount) {
    const randPokeSet = new Set([]);

    while (randPokeSet.size < amount) {
        const randIndex = Math.floor(Math.random() * pokeArray.length);
        randPokeSet.add(pokeArray[randIndex]);
    }   
    return Array.from(randPokeSet);
}
