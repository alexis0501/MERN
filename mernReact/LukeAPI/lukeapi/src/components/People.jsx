import axios from 'axios';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const People = (props) => {
    const [person, setPerson] = useState({});
    const {id} = useParams();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(someRes =>{
                setPerson(someRes.data)})
                .catch(err => {
                    console.log(err)});
                },[id]);

    return (
        <div>
            <h2>Name: {person.name}</h2>
            <h2>Height: {person.height}</h2>
            <h2>Mass: {person.mass}</h2>
            <h2>Hair Color: {person.hair_color} </h2>
            <h2>Skin Color: {person.skin_color}</h2>
        </div>
    )
}

export default People;