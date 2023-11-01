import React from "react";
import style from "./Landing.module.css"
import { Link } from 'react-router-dom'

const Landing = () => {
    return(
        <>
        <div className={style.back}>
            <h1>For all Pokémon enthusiasts</h1>
            <h2>This Single Page Application (SPA) is designed to provide you with comprehensive information about your favorite Pokémon, and it even allows you to create new Pokémon of your own.</h2>
            <h2>LET'S CREATE A NEW POKÉMON!</h2>
        </div>
        <div>
            <Link to='/home' className={style.btn}><button>START</button></Link>

        </div>
        </>
    )
};

export default Landing;