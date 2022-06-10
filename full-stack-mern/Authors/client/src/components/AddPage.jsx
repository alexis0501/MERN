import React from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import { useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddPage = () => {
    
    const [author, setAuthor] = useState([]);
    const [name, setName] = useState("");
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]); 

    const createAuthor = (e) =>{
        e.preventDefault()
        console.log("submit");
        const newAuthor = {
            name
        }
        console.log(newAuthor);
        
        axios.post("http://localhost:8000/api/author", newAuthor)
        
        .then(res => {
            console.log(res.data);
            navigate("/")
        })
        .catch(err => {
            console.log(err.response);
            console.log("🚫 🚫 🚫 🚫 🚫 🚫 🚫 ");

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
        <h1>Add Page</h1>
        <h1>Favorite Authors</h1>
        <Link to={'/'}>Home</Link>
        <h4 className='text-purple'>Add a new author:</h4>

        <div className='container'>
            <form onSubmit={createAuthor}>
            {errors.map((err, index) => <p style={{color: "red"}} key={index}>{err}</p>)}
                <h4>Name:</h4>
                Name: <input onChange={(e) => setName(e.target.value)} value={name} />
                <Link to={"/"}>Cancel</Link>
                <button>Submit</button>
            </form>
        </div>    
    </div>
    )
}

export default AddPage