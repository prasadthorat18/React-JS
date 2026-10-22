import { useContext } from 'react';
import Navbar2 from './Navbar2'
import { Themedatacontext } from '../context/ThemeContext';


const Navbar = (props) => {
    console.log(props.children);

    const [theme, setTheme] = useContext(Themedatacontext)
    
    
  return (
    <div className={theme}>
      <h2>Sheriyans</h2>
      <Navbar2  />
    </div>
  )
}

export default Navbar
