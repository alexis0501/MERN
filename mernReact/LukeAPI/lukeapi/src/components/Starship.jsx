import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Starship = (props) => {
    const[starship, setStarship] = useState({});
    const {id} = useParams();

    useEffect(() =>{
        axios.get(`https://swapi.dev/api/starships/${id}`)
        .then(someRes =>{
            setStarship(someRes.data)})
            .catch(err =>{
                console.log(err);
            })
    },[id]);
    
    
    return (
        <div>
            <h2>Name: {starship.name}</h2>
            <h2>Model: {starship.model}</h2>
            <h2>Manufacturer: {starship.manufacturer}</h2>
            <h2>Speed: {starship.speed}</h2>
            <h2>Crew: {starship.crew}</h2>
        </div>
    )
}

export default Starship