import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from './SearchBar.module.css';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getPokemonByName } from "../../Redux/Actions/actions";

const SearchBar = () => {
    const dispatch = useDispatch();
    const pokemonName = useSelector(state => state.pokemonName);
    const [searchValue, setSearchValue] = useState(pokemonName);

    const inputHandle = (event) => {
        setSearchValue(event.target.value);
    };

    const submitHandle = (event) => {
        event.preventDefault();
        dispatch(getPokemonByName(searchValue));
        setSearchValue('');
    };

    return (
        <div className={style.mainContainer}>
            <form onSubmit={submitHandle}>
                <input 
                type="text"
                onChange={inputHandle}
                value={searchValue}
                placeholder='Search Pokemon' 
                />
                <button type='submit' className={style.btnSubmit}>Search</button>
            </form>
        </div>
    )
};

export default SearchBar;