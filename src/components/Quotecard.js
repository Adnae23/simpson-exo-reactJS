import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Quotecard = () => {
    const [counter, setCounter] = useState(0)
    const [famille, setFamille] = useState("")

    useEffect(() =>{
        axios
            .get('https://simpsons-quotes-api.herokuapp.com/quotes')
            .then(response =>{
                setFamille(response.data[0])
            })
    },[counter])

    return (
        <div>
            <button onClick={() => setCounter(prevCounter => prevCounter +1)}>Click</button>
            <h1>{famille.character}</h1>
            <img src={famille.image} alt='image simpson'/>
            <p>{famille.quote}</p>
        </div>
    );
};

export default Quotecard;