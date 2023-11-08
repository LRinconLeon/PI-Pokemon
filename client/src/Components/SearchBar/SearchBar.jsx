import React from 'react';
import style from './SearchBar.module.css';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getPokemonByName } from "../../Redux/Actions/actions";

const SearchBar = () => {
    const dispatch = useDispatch();
    
    const [name, setName] = useState('');

    const inputHandle = (event) => {
        setName(event.target.value);
    };

    const submitHandle = (event) => {
        event.preventDefault();
        dispatch(getPokemonByName(name));
        //setName('');
    };

    return (
        <div className={style.mainContainer}>
            <form onSubmit={submitHandle}>
                <input 
                onChange={inputHandle}
                placeholder='Search Pokemon' 
                type="text"
                />
                <input
                onClick={submitHandle}
                type='submit' 
                />
            </form>
        </div>
    )
};

export default SearchBar;