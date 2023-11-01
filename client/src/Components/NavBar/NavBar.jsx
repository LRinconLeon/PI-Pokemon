import { Link } from "react-router-dom";
import style from './NavBar.module.css';


const NavBarHome = () => {
    return(
        <div className={style.home}>
            <Link to='/create'>FORM</Link>
            <Link to='/'>LANDING</Link>  
        </div>
    )
};
//! REMOVER EL LANDING Y CAMBIARLO POR IMAGEN

const NavBarDetail = () => {
    return(
        <div className={style.detail}>
            <Link to='/home'>HOME</Link>
            <Link to='/create'>FORM</Link>
            <Link to='/'>LANDING</Link>
        </div>
    )
};
//! REMOVER EL LANDING Y CAMBIARLO POR IMAGEN

const NavBarForm = () => {
    return(
        <div className={style.form}>
            <Link to='/home'>HOME</Link>
            <Link to='/'>LANDING</Link>
        </div>
    )
}
//! REMOVER EL LANDING Y CAMBIARLO POR IMAGEN

export { 
    NavBarDetail,
    NavBarHome,
    NavBarForm
};