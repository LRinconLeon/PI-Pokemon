import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, getTypes, orderByABC, orderByAttack, changePage, restart, filterType } from "../../Redux/Actions/actions";
import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import SearchBar from "../../Components/SearchBar/SearchBar";

const Home = () => {
    const dispatch = useDispatch();
    
    const pokemons = useSelector(state => state.pokemons);
    const currentPage = useSelector(state => state.currentPage);
    const allTypes = useSelector(state => state.allTypes);

    useEffect(() => {
        dispatch(getPokemons());
        dispatch(getTypes());
    }, []);

    const pagination = (event) => {
        dispatch(changePage(event.target.name));
    }

    const filterByType = (event) => {
        dispatch(filterType(event.target.value));
    };

    const orderHandler = (event) => {
        event.preventDefault();
        dispatch(orderByABC(event.target.value));
    };

    const attackHandler = (event) => {
        event.preventDefault();
        dispatch(orderByAttack(event.target.value));
    };

    const reset = (event) => {
        dispatch(restart())
    }
    

    return(
        <div>
            <SearchBar />
            <h3>FILTROS/ORDENAMIENTOS:</h3>
            <div>
            <select name='filterByType' onChange={filterByType}>
                {allTypes.map(types => <option key={types.id} value={types.name}>{types.name}</option>)}
            </select>
            </div>
            <div>
            <select onChange={orderHandler}>
                <option value='Ascendent' key='Ascendent'>A to Z</option>
                <option value='Descendent' key='Descendent'>Z to A</option>
            </select>
            </div>
            <div>
            <select onChange={attackHandler}>
                <option value='Higher Attack' key='Higher Attack'>Higher Attack</option>
                <option value='Lower Attack' key='Lower Attack'>Lower Attack</option>
            </select>
            </div>
            <div>
                <h3>RESTART</h3>
                <button onClick={reset}>Restart</button>
            </div>
            <div>
            <CardsContainer pokemons={pokemons} />
            </div>
            <div>
                <h3>currentPage: {currentPage + 1}</h3>
            </div>
            <div>
                <button onClick={pagination} name='prev'>{"<< Prev"}</button>
                <button onClick={pagination} name='next'>{"Next >>"}</button>
            </div>
        </div>
    )
};

export default Home;