import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const HomePage = (props) => {

    const [author, setAuthor] = useState([]);
    const [name, setName] = useState("")


    useEffect( ()=>{
        axios.get("http://localhost:8000/api/author")
        .then(res => {
        setAuthor(res.data)
        })
        .catch(err =>{
        console.log("ERROR",err);
        })
    },[])

    const deleteAuthor = (deleteId) =>{
        console.log(deleteId);
        axios.delete("http://localhost:8000/api/author/" + deleteId)
            .then(res =>{
                setAuthor(author.filter((author)=> author._id !== deleteId));
            })
            .catch(err => console.log("ERROR",err));
    }


    return (
    <div className='App'>
        <h1>Home Page</h1>
        <h1>Favorite Authors</h1>
        <Link to={'/new'}>Add an author</Link>
        <h3 className='text-purple'>We have quotes by:</h3>

        <table className='margin-left'>
            <thead>
                <tr>
                    <td>Author</td>
                    <td>Actions Available</td>
                </tr>
            </thead>
            <tbody>
            {
            author.map((authors)=>{
                return  <tr key={authors._id}>
                    <td>{authors.name}</td>
                        <td>
                        <Link to={"/authors/edit/" + authors._id}>Edit</Link>
                        <button onClick={() => deleteAuthor(authors._id)}>Delete</button>
                        </td>
                    </tr>
                })
            }
            </tbody>
        </table>

        {/*
        Without table
            {
            author.map((authors)=>{
                return ( <p key={authors._id}>
                    {authors.name}
                    <Link to={"/authors/edit/" + authors._id}>Edit</Link>
                    <button onClick={() => deleteAuthor(authors._id)}>Delete</button>
                    </p>)
            })
        } */}
    </div>
    )
}

export default HomePage