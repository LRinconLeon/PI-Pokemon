import React from 'react';
import style from './Card.module.css';
import { Link } from 'react-router-dom';

const CardContainer = (props) => {
    //* Esto es para que types y name aparezca con la primera letra mayuscula.
    let types = props.types && props.types.map(t => t[0].toUpperCase() + t.slice(1)).join(' and ');
    let name = props.name && props.name[0].toUpperCase().concat(props.name.slice(1));

    return(
        <div className={style.card}>
            <div className={style.divName}>
                <p className={style.pName}>{name}</p>
            </div>
            <Link to={`/detail/${props.id}`}>
                <img className={props.name} src={props.img} alt={`Pic of ${props.name}`} />
            </Link>
            <div className={style.divTypes}>
                <p className={style.pTypes}>{types}</p>
            </div>
        </div>
    )
};

export default CardContainer;