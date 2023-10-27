const { Router } = require('express');
const getByID = require('../handlers/getByID');
const getByName = require('../handlers/getByName');
const getPokemons = require('../handlers/getPokemons');
const postPokemon = require('../handlers/postPokemon');

const pokemonRouter = Router();


pokemonRouter.get('/name', getByName);

pokemonRouter.get('/:id', getByID);

pokemonRouter.get('/', getPokemons);

pokemonRouter.post('/', postPokemon);


module.exports = pokemonRouter;

