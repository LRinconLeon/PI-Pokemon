const {
    getAllPokemons,
    getPokemonByID,
    getPokemonByName,
    postPokemon
} = require('../controllers/pokemonController');

const getPokemonsHandler = async (req,res) =>{
    const {name} = req.query
    console.log(name)
    try {
        if(name){
            const response = await getPokemonByName(name)
            return res.status(200).json(response)
        } else {
            const response = await getAllPokemons()
            res.status(200).json(response)
        }
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

// const getAllPokemonsHandler = async (req, res) => {
//     try {
//         const allPokemons = await getAllPokemons();
//         res.status(200).json(allPokemons);
//     } catch(error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// const getPokemonByNameHandler = async (req, res) => {
//     const { name } = req.query;
//     try {
//         const pokemonByName = await getPokemonByName();

//         if(pokemonByName) return res.status(200).json(pokemonByName);
//         else return res.status(404).json(`Pokemon with the name: ${name} not found`);
//     } catch(error) {
//         res.status(500).json({ error: error.message });
//     }
// };

const getPokemonByIDHandler = async (req, res) => {
    const { id } = req.params;
    try {
        const pokemonByID = await getPokemonByID();

        if(pokemonByID) return res.status(200).json(pokemonByID);
        else return res.status(404).json(`Pokemon with ID: ${id} not found`);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};

const postPokemonHandler = async (req, res) => {
    const { name, img, hp, attack, defense, speed, height, weight, type } = req.body;
    try {
        if(!name || !hp || !attack || !defense ){
            return res.status(400).json({ error: 'Missing required fields' });
        } else {
            const newPokemon = await postPokemon(name, img, hp, attack, defense, speed, height, weight, type);
            return res.status(200).json(newPokemon);
        };
    } catch(error) {
        res.status(500).json({ error: error.message });
    };
};


module.exports = {
    getPokemonsHandler,
    getPokemonByIDHandler,
    postPokemonHandler
};

//* PREGUNTAR: Si es malo que sea tan largo el nombre de los handlers/controllers?

//? RECUERDA: Se utiliza json cuando envias un objeto, y send cuando envias un texto/HTML