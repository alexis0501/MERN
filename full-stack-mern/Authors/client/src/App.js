import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import EditPage from './components/EditPage';
import AddPage from './components/AddPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    </div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/authors/edit/:id' element={<EditPage/>} />
        <Route path='/new' element={<AddPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
