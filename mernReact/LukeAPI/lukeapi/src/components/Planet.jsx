import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


const Planet = (props) => {
    const [planet, setPlanet] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(someRes =>{
            setPlanet(someRes.data)})
            .catch(err =>{
                console.log(err);
            })
    },[id]);
    
    return (
        <div>
            <h2>Name:{planet.name} </h2>
            <h2>Climate:{planet.climate} </h2>
            <h2>Surface Water:{planet.surface_water} </h2>
            <h2>Terrain:{planet.terrain} </h2>
            <h2>Population:{planet.population} </h2>
        </div>
    )
}

export default Planet