module.exports = (pokemon) => {
    const types = pokemon.types ? pokemon.types.map(_type => _type.type.name) : [];

    return {
        id: pokemon.id,
        name: pokemon.name,
        img: pokemon.sprites.front_default,
        hp: pokemon.stats.find((_stat) => _stat.stat.name === 'hp').base_stat,
        attack: pokemon.stats.find((_stat) => _stat.stat.name === 'attack').base_stat,
        defense: pokemon.stats.find((_stat) => _stat.stat.name === 'defense').base_stat,
        speed: pokemon.stats.find((_stat) => _stat.stat.name === 'speed').base_stat,
        height: pokemon.height,
        weigth: pokemon.weight,
        types: types
    }

};