import axios from 'axios';
import {
    GET_POKEMONS,
    GET_BY_NAME,
    GET_BY_ID,
    GET_BY_TYPE,
    FILTER_BY_ABC, 
    FILTER_BY_ATTACK,
    POST_POKEMON
} from './actions-types';

const URL = 'http://localhost:3001';

export const getPokemons = () => {
    return async (dispatch) => {
        try {
            const pokemons = await axios.get(`${URL}/pokemons`);
            return dispatch({
                type: GET_POKEMONS,
                payload: pokemons.data 
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
            dispatch({
                type: GET_BY_NAME,
                payload: pokemonName.data
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
        console.log(error);
    }
  };  
};

export const getByType = () => {
    return async (dispatch) => {
        try {
            let pokemonType = await axios.get(`${URL}/types`)
            dispatch({
                type: GET_BY_TYPE,
                payload: pokemonType.data
            })
        } catch(error) {
            console.log(error.message);
        }
    };
};

export const filterByABC = (payload) => {
    return{
        type: FILTER_BY_ABC,
        payload
    };
};

export const filterByAttack = (payload) => {
    return {
        type: FILTER_BY_ATTACK,
        payload
    };
};