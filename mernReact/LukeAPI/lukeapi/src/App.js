import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import People from './components/People';
import Form from './components/Form';
import Planet from './components/Planet';
import Starship from './components/Starship';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Form/>
            <Routes>
              <Route path='/people/:id' element={ <People/> } />
              <Route path='/planets/:id' element={ <Planet/> } />
              <Route path='/starships/:id' element={<Starship/> }/>
            </Routes>
        </div>  
    </BrowserRouter>
  );
}

export default App;
