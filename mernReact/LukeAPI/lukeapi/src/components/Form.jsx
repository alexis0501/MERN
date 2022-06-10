import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {

    const [search, setSearch] = useState ("")
    const [id, setId] = useState ('')  //Changed from null to empty string bc error in console
    const navigate = useNavigate ()

    const formHandler = (e) => {
        e.preventDefault();
        const newForm = {search, id};
        navigate("/"+ search + "/" + id)
        console.log(newForm);
    }


    return (
        <div>
            <form onSubmit={formHandler}>
            <label>Search For:</label>  
            
            {/* Double bind inputs */} 
            {/* Spencer helped with this */}
            {/* Using an onChange and used e.target.value */}
                <select onChange={(e) => setSearch(e.target.value)}>
                    <option value="planets">Planet</option>
                    <option value="people">People</option>
                    <option value="starships">Starships</option>
                </select>
                <label>ID:</label>
                <input type='number' value={id} onChange={(e) =>setId(e.target.value)}/>
            <button>Search</button>
            </form>

        </div>
    )
}

export default Form