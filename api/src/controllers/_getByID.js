const { Pokemon, Type } = require('../db');
const axios = require('axios');
const APInformation = require('../helpers/APInformation');
const DBInformation = require('../helpers/DBInformation');


const pokemonDB = async (id, source) => {
    const searchPokemon = await Pokemon.findOne({
        where: { id: id },
        include: Type,
    });

    return DBInformation(searchPokemon);
}

const pokemonAPI = async (id, source) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = response.data;

    return APInformation(pokemon);
};


module.exports = {
    pokemonAPI,
    pokemonDB
};