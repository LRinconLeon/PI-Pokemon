const { Pokemon, Type } = require('../db');
const axios = require('axios');
const APInformation = require('../helpers/APInformation');
const DBInformation = require('../helpers/DBInformation');



const _allPokemonsDB = async () => {
    const pokemonesDB = await Pokemon.findAll({ include: Type });
    return pokemonesDB.map(pokemon => DBInformation(pokemon));
}

const _allPokemonsAPI = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=40`);
    const data = response.data.results;
     
    const infoPromises = data.map(async (pokemon) => {
        const pokemonResponse = await axios.get(pokemon.url); 
        const pokemonData = pokemonResponse.data;
    
        return APInformation(pokemonData);
    });

    const infoPokemons = await Promise.all(infoPromises);

    return infoPokemons;
};


module.exports = {
    _allPokemonsAPI,
    _allPokemonsDB
};