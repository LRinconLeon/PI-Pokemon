import React, { useEffect, useState } from "react";
import style from './Form.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getTypes, postPokemon } from "../../Redux/Actions/actions";

const Forms = () => {
    const dispatch = useDispatch();

    const allTypes = useSelector(state => state.allTypes);

    useEffect(() => {
        dispatch(getTypes())
    }, []);

    const [state, setState] = useState({
        name: '',
        img: '',
        hp: 0,
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        types: []
    });
    
    const handleChange = (event) => {
        if(event.target.name === 'types') {
            setState({
                ...state,
                types: [...state.types, event.target.value]  
            })
        } else {
            setState({
                ...state,
                [event.target.name]: event.target.value  
            })
        }

        validate(event.target.name, {
            ...state,
            [event.target.name]: event.target.value
        }); // es como que le envia el reenderizado "futuro" para que las validacion este actualizado x el flujo 
    };

//*CONTROLLADORES:

    const [errors, setErrors] = useState({
        name: 'This field is required',
        img: 'This field is required',
        hp: 'This field is required',
        attack: 'This field is required',
        defense: 'This field is required',
        speed: '',
        height: '',
        weight: '',
        types: ''
    });

const validate = (name, state) => {
    switch (name) {
        case 'name':
            if(state.name === '') setErrors({...errors, name:'This field is required'})
            else setErrors({...errors, name: ''})
        break
        case 'img':
            if(state.img === '') setErrors({...errors, img:'This field is required'})
            else setErrors({...errors, img: ''})
        break
        case 'hp':
            if(state.hp === '') setErrors({...errors, hp:'This field is required'})
            else if (isNaN(parseInt(state.hp))){
                setErrors({...errors, hp: 'It has to be a number'}) //!CHECAR INGLES
            }
            else setErrors({...errors, hp: ''})
        break
        case 'attack':
            if(state.attack === '') setErrors({...errors, attack:'This field is required'})
            else if (isNaN(parseInt(state.attack))){
                setErrors({...errors, attack: 'It has to be a number'}) //!CHECAR INGLES
            }
            else setErrors({...errors, attack: ''})
        break
        case 'defense':
            if(state.defense === '') setErrors({...errors, defense:'This field is required'})
            else if (isNaN(parseInt(state.defense))){
                setErrors({...errors, defense: 'It has to be a number'}) //!CHECAR INGLES
            }
            else setErrors({...errors, defense: ''})
        break
        case 'speed':
            if (isNaN(parseInt(state.speed))){
                setErrors({...errors, speed: 'It has to be a number'}) //!CHECAR INGLES
            } else setErrors({...errors, speed: ''})
        break
        case 'height':
            if (isNaN(parseInt(state.height))){
                setErrors({...errors, height: 'It has to be a number'}) //!CHECAR INGLES
            } else setErrors({...errors, height: ''})
        break
        case 'weight':
            if (isNaN(parseInt(state.weight))){
                setErrors({...errors, weight: 'It has to be a number'}) //!CHECAR INGLES
            } else setErrors({...errors, weight: ''})
        break
        case 'types':
            if(state.types === '') setErrors({...errors, types:'This field is required'})
            else setErrors({...errors, img: ''})
            //!PONER ALGUNA VALIDACION DE QUE NO SE REPITAN LOS TYPES
            break;
    
        default:
            break;
    }
};

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postPokemon(state));
//con esto se limpian los campos cuando se crea un pokemon
        for(let property in state) {
            document.getElementById(property).value = ''
        }
    };

    return(
        <div className={style.divCont}>
            <div className={style.divTitle}>
                <h1>Create your Pokemon</h1>
            </div>
            {console.log(state)}
            <div className={style.formCont}>
                <div className={style.formInputs}>  
                    <form onSubmit={handleSubmit}> 
                        <label htmlFor="">Name: </label>
                        <input id="name" onChange={handleChange} name="name" type="text" />
                        <label className={style.formErrors}>{errors.name}</label>
                        <label htmlFor="">Image: </label>
                        <input id="img" onChange={handleChange} name="img" type="text" />
                        <label className={style.formErrors}>{errors.img}</label>
                        <label htmlFor="">HP: </label>
                        <input id="hp" onChange={handleChange} name="hp" type="text" />
                        <label className={style.formErrors}>{errors.hp}</label>
                        <label htmlFor="">Attack: </label>
                        <input id="attack" onChange={handleChange} name="attack" type="text" />
                        <label className={style.formErrors}>{errors.attack}</label>
                        <label htmlFor="">Defense: </label>
                        <input id="defense" onChange={handleChange} name="defense" type="text" />
                        <label className={style.formErrors}>{errors.defense}</label>
                        <label htmlFor="">Speed: </label>
                        <input id="speed" onChange={handleChange} name="speed" type="text" />
                        <label className={style.formErrors}>{errors.speed}</label>
                        <label htmlFor="">Height:</label>
                        <input id="height" onChange={handleChange} name="height" type="text" />
                        <label className={style.formErrors}>{errors.height}</label>
                        <label htmlFor="">Weight: </label>
                        <input id="weight" onChange={handleChange} name="weight" type="text" />
                        <label className={style.formErrors}>{errors.weight}</label>
                        <label htmlFor="">Type(s)</label>
                        <select onChange={handleChange} name="types" id="types">
                            {allTypes.map(types => <option key={types.key} value={types.name}>{types.name}</option>)}
                        </select>
                        <label className={style.formErrors}>{errors.types}</label>
                        <input type="submit" name="" id="" />
                    </form>
                </div>
                <div className={style.divPrev}>
                    <h2>PREV</h2>
                </div>
            </div>
        </div>
    )
};

export default Forms;