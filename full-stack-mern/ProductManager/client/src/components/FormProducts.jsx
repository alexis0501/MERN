import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'


const FormProducts = () => {
    const [products, setProducts] = useState([]) 
    const [title ,setTitle] = useState("");  
    const [price ,setPrice] = useState(0);
    const [description ,setDescription] = useState("");  
    const navigate = useNavigate();


    useEffect( ()=>{
        axios.get("http://localhost:8000/api/products")
        .then(res => {
        console.log(res.data);
        setProducts(res.data)
        })
        .catch(err =>{
        console.log("ERROR",err);
        })
    },[])

    //! Create
    const createProduct = (e) =>{
        e.preventDefault()
        console.log("submitted");
        const newProduct = {
            title, 
            price, 
            description
        }
        console.log(newProduct);

        axios.post("http://localhost:8000/api/products", newProduct) 

        .then(res =>{
            console.log(res.data);
        })
        .catch(err =>{
            console.log(err);
        })
    }

        //!delete
        const deleteProduct = (deleteId) =>{
            console.log(deleteId);
            axios.delete("http://localhost:8000/api/products/" + deleteId)
            .then(res =>{
                setProducts(products.filter((products)=> products._id !== deleteId));
                navigate("/")
            })
            .catch(err => console.log("ERRORRRRRR",err))
        }

return (
    <div className="App">
        <h1>Product Manager</h1>
        <form onSubmit={createProduct } >
            Title: <input onChange={(e) => setTitle(e.target.value)} value={title} />
            Price: <input onChange={(e) => setPrice(e.target.value)} type="number" value={price} />
            Description: <input onChange={(e) => setDescription(e.target.value)} value={description} />
            <button>Create</button>
        </form>
        <hr/>
        <h1>All Products</h1>
        {
            products.map((product)=>{
                return <h3 key={product._id}>
                <Link to={"/products/" + product._id}>
                    {product.title}
                </Link>
                    <button onClick={() => deleteProduct(product._id)}>Delete</button>
                </h3> 
            })
        }
    </div>
)}

export default FormProducts