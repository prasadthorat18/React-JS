import React from 'react'
import { useState } from 'react';
import Navbar from './components/Navbar';

const App = () => {

  const [theme, setTheme] = useState('Dark');
  
  const btnclicked = () =>{
    console.log("btn is clicked"); 
    console.log("Data flow from App -> App"); 
    setTheme((prevTheme)=> 
        prevTheme === 'Dark' ? 'Light' : 'Dark'
    );
  }

  return (
    <div>
      <h1>Theme is {theme}</h1>
      <button onClick={btnclicked}>Change theme</button>

      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
