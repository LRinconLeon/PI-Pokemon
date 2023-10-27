const {_allPokemonsDB, _allPokemonsAPI } = require('../controllers/_getPokemons');

const getPokemons = async (req, res) => {
    const allPokemons = [];

    try {
        const allPokemonsDB = await _allPokemonsDB();
        const allPokemonsAPI = await _allPokemonsAPI();

        if(allPokemonsDB && allPokemonsAPI){
            allPokemons.push(...allPokemonsDB);
            allPokemons.push(...allPokemonsAPI);
            res.status(200).json(allPokemons);

        } else if(!allPokemonsDB && allPokemonsAPI){
            allPokemons.push(...allPokemonsAPI);
            res.status(200).json(allPokemons);

        } else if(allPokemonsDB && !allPokemonsAPI){
            allPokemons.push(...allPokemonsDB);
            res.status(200).json(allPokemons);

        } else return res.status(404).json('No Pokemons found');
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = getPokemons;
