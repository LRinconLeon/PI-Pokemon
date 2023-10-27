const { Pokemon, Type } = require('../db');
const axios = require('axios');
const APInformation = require('../helpers/APInformation');
const DBInformation = require('../helpers/DBInformation');

const nameDB = async (name, source) => {
    const DBSource = source === 'db'; 
    const searchPokemon = await Pokemon.findOne({
        where: {name: name}, 
        include: Type
    });
    
    return DBInformation(searchPokemon);
};

const nameAPI = async (name, source) => {
    const APISource = source === 'api'; 
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
    const pokemon = response.data;

    return APInformation(pokemon);
};


module.exports = {
    nameAPI,
    nameDB
};