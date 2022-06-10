import { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const SingleProduct = (props) =>{
    
    const navigate = useNavigate();

    const [products, setProducts] = useState({})
    const {id} = useParams();
    console.log(id);

    useEffect(() =>{
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log("===========",res.data); 
                setProducts(res.data)})
                
            .catch(err => console.log(err));
    },[]);

    //*delete
    const deleteProduct = (deleteId) =>{
        console.log(deleteId); 
        axios.delete("http://localhost:8000/api/products/" + deleteId)
        .then(res =>{
            console.log(res.data);
            navigate("/")
        })
        .catch(err => console.log(err))
    }

    return(
        
        <div className="App">
            <p>Product:{products.title}</p>
            <p>Price:{products.price}</p>
            <p>Description:{products.description}</p>
            <Link to={"/products/update/" + products._id }>Edit</Link> <br/>
            <button onClick={() => deleteProduct(products._id)}>Delete</button>
        </div>
    )
} 
export default SingleProduct