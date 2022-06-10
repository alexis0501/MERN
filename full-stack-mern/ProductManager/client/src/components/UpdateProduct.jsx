import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const UpdateProduct = () => {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]) 
    const [title ,setTitle] = useState("");  
    const [price ,setPrice] = useState(0);
    const [description ,setDescription] = useState("");  
    const {id} = useParams();

    useEffect( ()=>{
        axios.get("http://localhost:8000/api/products/" + id)
        .then(res => {
        console.log(res.data);
        setTitle(res.data.title)
        setPrice(res.data.price)
        setDescription(res.data.description)
    })
        .catch(err =>{
        console.log("ERROR",err);
        })
    },[])

    const updateProduct = (e) =>{
        e.preventDefault()
        console.log("submitted");
        const updateProduct = {
            title, 
            price, 
            description
        }
        console.log(updateProduct);

        axios.put("http://localhost:8000/api/products/"+ id, updateProduct) 
        .then(res =>{
            console.log(res.data);
            navigate("/")
        })
        .catch(err =>{
            console.log(err);
        })
    }
return (

    <div className="App">
        <h1>Update Your Product</h1>
        <form onSubmit={updateProduct } >
            Title: <input onChange={(e) => setTitle(e.target.value)} value={title} />
            Price: <input onChange={(e) => setPrice(e.target.value)} type="number" value={price} />
            Description: <input onChange={(e) => setDescription(e.target.value)} value={description} />
            <button>Update</button>
        </form>
        <hr/>
    </div>
)}

export default UpdateProduct