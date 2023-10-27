const _postPokemon = require('../controllers/_postPokemon');

const postPokemon = async (req, res) => {
    const { id, name, img, hp, attack, defense, speed, height, weight, types } = req.body;
    try {
        if(!name || !img || !hp || !attack || !defense || !types){
            return res.status(400).json({ error: 'Missing required fields' });
        } else {
            const newPokemon = await _postPokemon(id, name, img, hp, attack, defense, speed, height, weight, types);
            return res.status(200).json(newPokemon);
        };
    } catch(error) {
        res.status(500).json({ error: error.message });
    };
};


module.exports = postPokemon;


//? RECUERDA: Se utiliza json cuando envias un objeto, y send cuando envias un texto/HTML