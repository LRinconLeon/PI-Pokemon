import React from "react";
import style from './Cards.module.css'
import CardContainer from "../CardContainer/CardContainer";
import { useSelector } from "react-redux";

const CardsContainer = () => {
    const pokemons = useSelector(state=>state.pokemons);

    return(
        <div className={style.cards}>
            {pokemons.map(pokemon => {
                return <CardContainer 
                    key={pokemon.id}
                    id={pokemon.id}
                    name={pokemon.name}
                    img={pokemon.img}
                    hp={pokemon.hp}
                    attack={pokemon.attack}
                    defense={pokemon.defense}
                    speed={pokemon.speed}
                    height={pokemon.height}
                    weight={pokemon.weight}
                    types={pokemon.type}
                />
            })}
        </div>
    )
}

export default CardsContainer;