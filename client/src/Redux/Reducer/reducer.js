import {
    GET_POKEMONS,
    GET_BY_NAME,
    GET_BY_ID,
    GET_BY_TYPE,
    FILTER_BY_ATTACK,
    FILTER_BY_ABC,
    POST_POKEMON
} from '../Actions/actions-types';

const initialState = {
    pokemons: [],
    types: [],
};

const rootReducer = (state = initialState , action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload
            };
        
        case GET_BY_NAME:
            return {
                ...state,
                pokemons: action.payload
            };

        case GET_BY_ID:
            return {
                ...state,
                pokemonID: action.payload
            };

        case GET_BY_TYPE:
            return {
                ...state,
                types: action.payload
            };

        case FILTER_BY_ATTACK:
            const attackCopy = [...state.pokemons];
            const sortedAttack = action.payload === 'Higher Attack'
            ? attackCopy.sort((a, b) => b.attack - a.attack)
            : attackCopy.sort((a, b) => a.attack - b.attack);
            return {
                ...state,
                pokemons: sortedAttack
            }

        case FILTER_BY_ABC:
            const pokemonCopy = [...state.pokemons]; //!CHECAR SI ES NECESARIO HACER COPIA
            const sortedPokes = action.payload === 'Ascendent'
            ? pokemonCopy.sort((a, b) => a.name.localeCompare(b.name))
            : pokemonCopy.sort((a, b) => b.name.localeCompare(a.name));
            return{
                ...state,
                pokemons: sortedPokes
            }
        default:
            return { ...state };
    }
};

export default rootReducer;