module.exports = (pokemon) => {
    const types = pokemon.Types ? pokemon.Types.map(type => type.dataValues.name) : [];

    return {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.img,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types
    }
};