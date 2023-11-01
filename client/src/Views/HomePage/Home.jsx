import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons, filterByABC, filterByAttack } from "../../Redux/Actions/actions";
import SearchBar from "../../Components/SearchBar/SearchBar";

const Home = () => {
    const dispatch = useDispatch();
    const [order, setOrder] = useState('');
    const [pockeAttack, setPockeAttack] = useState('');

    useEffect(() => {
        dispatch(getPokemons());
    }, []);

    const orderHandler = (event) => {
        event.preventDefault();
        dispatch(filterByABC(event.target.value));
        setOrder(event.target.value);
    };

    const attackHandler = (event) => {
        event.preventDefault();
        dispatch(filterByAttack(event.target.value));
        setPockeAttack(event.target.value);
    }

    return(
        <div>
            <SearchBar />
            <select onChange={orderHandler}>
                <option value='Ascendent' key='Ascendent'>A to Z</option>
                <option value='Descendent' key='Descendent'>Z to A</option>
            </select>
            <select onChange={attackHandler}>
                <option value='Higher Attack' key='Higher Attack'>Higher Attack</option>
                <option value='Lower Attack' key='Lower Attack'>Lower Attack</option>
            </select>
            <CardsContainer />
        </div>
    )
};

export default Home;