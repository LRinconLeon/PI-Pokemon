const { Pokemon, Type } = require('../db');
const URL_API = 'https://pokeapi.co/api/v2/pokemon'
const axios = require('axios');

const getAllPokemons = async () => {
    // Aqui trae todos los pokemones de la DB
    const pokemonsDB = await Pokemon.findAll({
        include: {
            model: Type,
            attributes: ['name'],
            through: {
                attributes: [],
            },
        },
    });

    //Aqui traera los pokemones de la API, .results => porque la api trae la info que queremos en results
    const infoAPI = (await axios.get(`${URL_API}/?limit=40`)).data.results;

    const pokeDatos = infoAPI.map(async (pokemon) => {
        // Aqui extraemos a 'url' que es donde esta la info que queremos
        const pokeURL = await axios.get(pokemon.url);
        // Aqui extraemos la data dentro de 'url'
        const pokeData = pokeURL.data;
        // Aqui extraemos las caracteristicas especificas que queremos de la data de 'url'
        const character = {
            id: pokeData.id,
            name: pokeData.name,

        }
        return character;

    });
    const pokemonsAPI = await Promise.all(pokeDatos);

    return [...pokemonsDB, ...pokemonsAPI];
};

const getPokemonByName = async (name) => {
};

const getPokemonByID = async (id) => {
};

const postPokemon = async (name, img, hp, attack, defense, speed, height, weight, type) => { 
    // Aqui se crea el pokemon
    const newPokemon = await Pokemon.create({name, img, hp, attack, defense, speed, height, weight});
    // Aqui se separa la info de type (id, name)
    const typeNames = type.split(',');
    // Aqui se mapea para comparar la propiedad name de type con la propiedad de name de Type(api) y se le agrega al nuevo pokemon
    typeNames.map(async(typeName) => {
        const findType = await Type.findOne({where: {name: typeName}});
        newPokemon.addType(findType);
    })
    return newPokemon;
};

module.exports = {
    getAllPokemons,
    getPokemonByID,
    getPokemonByName,
    postPokemon
}

/*
📍 GET | /pokemons
Obtiene un arreglo de objetos, donde cada objeto es un pokemon con su información.
📍 GET | /pokemons/:idPokemon
Esta ruta obtiene el detalle de un pokemon específico. Es decir que devuelve un objeto 
con la información pedida en el detalle de un pokemon.
El pokemon es recibido por parámetro (ID).
Tiene que incluir los datos del tipo de pokemon al que está asociado.
Debe funcionar tanto para los pokemones de la API como para los de la base de datos.
📍 GET | /pokemons/name?="..."
Esta ruta debe obtener todos aquellos pokemons que coinciden con el nombre recibido por 
query.
Debe poder buscarlo independientemente de mayúsculas o minúsculas.
Si no existe el pokemon, debe mostrar un mensaje adecuado.
Debe buscar tanto los de la API como los de la base de datos.
📍 POST | /pokemons
Esta ruta recibirá todos los datos necesarios para crear un pokemon y relacionarlo con 
sus tipos solicitados.
Toda la información debe ser recibida por body.
Debe crear un pokemon en la base de datos, y este debe estar relacionado con sus tipos
indicados (debe poder relacionarse al menos con dos).
*/