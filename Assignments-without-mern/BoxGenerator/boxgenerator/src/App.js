import React, { useState } from 'react';
import './App.css';
import Form from './components/Forms';
import Boxes from './components/Boxes';

function App() {
  const [currColor, setCurrColor] = useState([]);
  const addingColor = (colored) => {
      const colArray = [...currColor, colored];
      setCurrColor(colArray);
  }
  return (
    <div className='Center'>
        <Form setColor={addingColor} />
        <Boxes colored={currColor} />
    </div>
  );
}

export default App;