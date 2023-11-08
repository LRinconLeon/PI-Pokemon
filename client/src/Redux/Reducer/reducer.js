import {
    GET_POKEMONS,
    GET_BY_NAME,
    GET_BY_ID,
    GET_TYPES,
    FILTER_BY_TYPE,
    FILTER_BY_SOURCE,
    ORDER_BY_ATTACK,
    ORDER_BY_ABC,
    PAGINATION,
    RESET
} from '../Actions/actions-types';

const initialState = {
    pokemons: [],
    allTypes: [], 
    pokemonsBackUp: [],
    pokemonsFiltered: [],
    currentPage: 0,
};

const rootReducer = (state = initialState , action) => {
    const ITEMS_PER_PAGE = 12;

    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: [...action.payload].splice(0, ITEMS_PER_PAGE), //aqui siempre seran 12 pokes
                pokemonsBackUp: action.payload //AQUI SON TODOS LOS POKES
            };

        case PAGINATION:
            const next_page = state.currentPage + 1;
            const prev_page = state.currentPage - 1;
            const firstIndex = action.payload === 'next' ? next_page * ITEMS_PER_PAGE : prev_page * ITEMS_PER_PAGE;
            
            if(action.payload === 'next' && firstIndex >= state.pokemonsBackUp.length) return state;
            if(action.payload === 'prev' && firstIndex < 0) return state; 

            return {
                ...state,
                pokemons: [...state.pokemonsBackUp].splice(firstIndex, ITEMS_PER_PAGE),
                currentPage: action.payload === 'next' ? next_page : prev_page
            }
        
        case GET_BY_NAME:
             if(action.payload.hasOwnProperty('name')){
                return {
                    ...state,
                    pokemons: [action.payload]
                };
             } 
            else {
                return {
                    ...state,
                    pokemons: [action.payload]
                };
            };
        
        case GET_BY_ID:
            return {
                ...state,
                pokemons: [...action.payload].splice(0, ITEMS_PER_PAGE),
                pokemonsFiltered: action.payload,
                filters: true 
            };
        
        case GET_TYPES:
            return {
                ...state,
                allTypes: action.payload
            };

        case FILTER_BY_TYPE:
            return {
                ...state,
                pokemons: [...state.pokemonsBackUp].filter(pokemon => pokemon.types.includes(action.payload)).splice(0,ITEMS_PER_PAGE), //se filtra los pokes e incluye el paginado (12 pokes)
                pokemonsFiltered: [...state.pokemonsBackUp].filter(pokemon => pokemon.types.includes(action.payload)) // son todos los pokes
            };
        
        case FILTER_BY_SOURCE:
            return {
                ...state,
                pokemons: action.payload,
            };
            
        case ORDER_BY_ATTACK:
            const attackCopy = [...state.pokemons];
            const sortedAttack = action.payload === 'Higher Attack'
            ? attackCopy.sort((a, b) => b.attack - a.attack)
            : attackCopy.sort((a, b) => a.attack - b.attack);
            return {
                ...state,
                pokemons: sortedAttack
            };

        case ORDER_BY_ABC:
            const pokemonCopy = [...state.pokemons]; 
            const sortedPokes = action.payload === 'Ascendent'
            ? pokemonCopy.sort((a, b) => a.name.localeCompare(b.name))
            : pokemonCopy.sort((a, b) => b.name.localeCompare(a.name));
            return{
                ...state,
                pokemons: sortedPokes
            };

        case RESET:
            return{
                ...state,
                pokemons: [...state.pokemonsBackUp].splice(0, ITEMS_PER_PAGE),
                pokemonsFiltered: []
            }
        default:
            return { ...state };
    };
};

export default rootReducer;