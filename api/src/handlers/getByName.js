const { nameDB, nameAPI } = require('../controllers/_getByName');

const getByName = async (req, res) => {
    const { name, source } = req.query; 

    try {
        const pokemonNameAPI = await nameAPI(name, source);

        if(pokemonNameAPI) {
            return res.status(200).json(pokemonNameAPI);
        } else {
            const pokemonNameDB = await nameDB(name, source);
            return res.status(200).json(pokemonNameDB);
        }
    } catch(error) {
        res.status(404).json({error: `Pokemon with the name: ${name} not found.`});
    }
};


module.exports = getByName;


