import React from 'react'

// child to parent data flow is possible
const Navbar = (props) => {

    function changetheme(){
        console.log("Data flow from navbar -> App"); 
        props.setTheme((prevTheme) => prevTheme === 'Dark' ? 'Light' : 'Dark');
    }

  return (
    <div>
      <button onClick={changetheme}>Chnage theme 2</button>
    </div>
  )
}

export default Navbar
