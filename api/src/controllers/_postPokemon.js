const { Pokemon, Type } = require('../db');


const _postPokemon = async (id, name, img, hp, attack, defense, speed, height, weight, types) => { 

    const verification = await Pokemon.findOne({ where: { name: name } });

    if(verification) throw new Error('The Pokemon already exist');
    else {
        const newPokemon = await Pokemon.create({ id, name, img, hp, attack, defense, speed, height, weight, types });
        // Tipos:
        const addingTypes = types.split(',');
        addingTypes.map(async(nameType) => {
            const type = await Type.findOne({ where: { name: nameType } });
            newPokemon.addType(type);
        })  

        return newPokemon;
    }
};

module.exports = _postPokemon;
