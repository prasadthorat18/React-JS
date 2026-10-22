import React, { useContext } from 'react'
import { Themedatacontext } from '../context/ThemeContext';

const Button = () => {

    const [theme, setTheme] = useContext(Themedatacontext)

    const colorchnage = () =>{
        
        setTheme('dark');
        
    }

  return (
    <div>
      <button onClick={colorchnage}>Change theme</button>
    </div>
  )
}

export default Button
