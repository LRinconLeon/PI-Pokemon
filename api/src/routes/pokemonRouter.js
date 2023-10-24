const { Router } = require('express');
const {
    getPokemonsHandler,
    getPokemonByIDHandler,
    postPokemonHandler
} = require('../handlers/pokemonHandler');

const pokemonRouter = Router();


pokemonRouter.get('/', getPokemonsHandler);

pokemonRouter.get('/:id', getPokemonByIDHandler);

pokemonRouter.post('/', postPokemonHandler);


module.exports = pokemonRouter;

