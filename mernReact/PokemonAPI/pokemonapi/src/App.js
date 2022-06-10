import './App.css';
import axios from "axios";
import {useState} from "react";

function App() {
    const [pokemon, setPokemon] = useState([]);

    const pokemonGrab = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
        .then((response) =>{
          setPokemon(response.data.results);
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="App">
        <button onClick={pokemonGrab}>FetchPokemon</button>
        {
          pokemon.map((a,idx) => {
            return <h4 key={idx}>{a.name}</h4>
          })
        }
    </div>
  );
}

export default App;
