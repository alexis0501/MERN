import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

const EditPage = () => {

    const [name, setName] = useState("");
    const {id} = useParams()
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]); 

    useEffect( ()=>{
        axios.get("http://localhost:8000/api/author/" + id)
        .then(res => {
        setName(res.data.name)
    })
        .catch(err =>{
        console.log("ERROR",err);
        })
    },[])

    const updateAuthor = (e) =>{
        e.preventDefault()
        console.log("submitted");
        const updateAuthor = {
            name
        }
        console.log(updateAuthor);

        axios.put("http://localhost:8000/api/author/"+ id, updateAuthor) 
        .then(res =>{
            navigate("/")
        })
        .catch(err =>{
            console.log(err);
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }

    return (
    <div className='App'>
        <h1>Edit Page</h1>
        <h1>Favorite Author</h1>
        <Link to={"/"}>Home</Link>
        <h4 className='text-purple'>Edit this author:</h4>
        
        <div className='container'>
            <form onSubmit={updateAuthor}>
            {errors.map((err, index) => <p style={{color: "red"}} key={index}>{err}</p>)}
                <h4>Name:</h4>  
                <input onChange={(e) => setName(e.target.value)} value={name} />
                <Link to={"/"}>Cancel</Link>
                <button>Submit</button>
            </form>
        </div>    
    </div>
    )
}

export default EditPage