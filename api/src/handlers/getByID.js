const { pokemonDB, pokemonAPI } = require('../controllers/_getByID');

const getByID = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? 'db' : 'api'; //esto es para identificar de donde vendra bdd(UUID) y api (numeros)
    
    try {
        if (source === 'db') {
            const pokeDB = await pokemonDB(id, source);

            if(pokeDB) return res.status(200).json(pokeDB);
            else return res.status(404).json(`Pokemon with ID: ${id} not found`);
        } else {
            const pokeAPI = await pokemonAPI(id, source);

            if(pokeAPI) return res.status(200).json(pokeAPI);
            else return res.status(404).json(`Pokemon with ID: ${id} not found`);
        }

    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = getByID;