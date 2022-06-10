import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import FormProducts from './components/FormProducts';
import SingleProduct from './components/SingleProduct';
import UpdateProduct from './components/UpdateProduct';


function App() {
  return (
    <BrowserRouter>
    <div>
    </div>
        <Routes>
            <Route path='/' element={<FormProducts/>} />           
            <Route path='/products/:id' element={<SingleProduct/>} />
            <Route path='/products/update/:id' element={<UpdateProduct/>} />
        </Routes>
    </BrowserRouter> 
  )
}
export default App;