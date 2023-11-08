import axios from 'axios';
import {
    GET_POKEMONS,
    GET_BY_NAME,
    GET_BY_ID,
    GET_TYPES,
    FILTER_BY_SOURCE,
    FILTER_BY_TYPE,
    ORDER_BY_ATTACK,
    ORDER_BY_ABC,
    PAGINATION,
    RESET,
} from './actions-types';

const URL = 'http://localhost:3001';

export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const pokemons = await axios.get(`${URL}/pokemons`);

            const pokemonsWithTypes = pokemons.data.map(pokemon => { //Esto es para que los pokes que no tengan tipo se vayan a la clasificacion de unknown
                if(!pokemon.types || pokemon.types.length === 0) {
                    pokemon.types = ['unknown'];
                }
                return pokemon;
            })
            console.log('Datos de pokemons:', pokemons.data);

            return dispatch({
                type: GET_POKEMONS,
                payload: pokemonsWithTypes
            });
        } catch(error) {
            console.log(error.message);
        }
    };
};


export const getPokemonByName = (name) => {
    return async (dispatch) => {
        try {
            const pokemonName = await axios.get(`${URL}/pokemons/name?name=${name}`);
            const pokeData = pokemonName.data;
            dispatch({
                type: GET_BY_NAME,
                payload: pokeData
            })
        } catch(error) {
            console.log(error.message);
        }
    };
};

export const getPokemonByID = (id) => {
    return async (dispatch) => {
        try {
            const pokemonID = await axios.get(`${URL}/pokemons/${id}`);
            dispatch({
                type: GET_BY_ID,
                payload: pokemonID.data
            })
        } catch(error){
            console.log(error.message);
        }
    };  
};

export const getTypes = () => {
    return async (dispatch) => {
        try {
           const  response = await axios.get(`${URL}/types`);
           dispatch({
            type: GET_TYPES,
            payload: response.data
           })
        } catch (error) {
            console.log(error.message);
        }
    };
};

export const postPokemon = (state) => {
    return async (dispatch) => {
        try {
            await axios.post(`${URL}/pokemons/`, state)
            alert('Pokemon created successfully') 
        } catch(error) {
            if(error.response) {
                console.log("Error de respuesta del servidor:", error.response.data);
            } else if (error.response) {
                console.log("Error de la solicitud:", error.request);
            } else {
                console.log("Error general:", error.message);
            }
        }
    };
};

export const filterType = (order) => {
    return (dispatch) => {
        try {
            dispatch({
                type: FILTER_BY_TYPE,
                payload: order
            })
        } catch(error) {
            console.log(error.message);
        }
    };
};

export const filterBySource = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${URL}/pokemons/${id}`);
            dispatch({
                type: FILTER_BY_SOURCE,
                payload: response.data
            })
        } catch(error) {
            console.log(error.message);
        }
    };
};

export const orderByABC = (payload) => {
    return{
        type: ORDER_BY_ABC,
        payload
    };
};

export const orderByAttack = (payload) => {
    return {
        type: ORDER_BY_ATTACK,
        payload
    };
};

export const changePage = (order) => {
    return (dispatch) => {
        try {
            dispatch({
                type: PAGINATION,
                payload: order
            })
        } catch(error) {
            console.log(error.message);
        }
    };
};

export const restart = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: RESET
            })
        } catch(error){
            console.log(error.message);
        }
    };
};