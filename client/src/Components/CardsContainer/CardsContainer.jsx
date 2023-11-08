import React from "react";
import style from './Cards.module.css'
import CardContainer from "../CardContainer/CardContainer";

const CardsContainer = ({pokemons}) => {
    return(
        <div className={style.cards}>
            {pokemons.map((pokemon) => <CardContainer key={pokemon.id} props={pokemon} />)}
        </div>
    );
};

export default CardsContainer;