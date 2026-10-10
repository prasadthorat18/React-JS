import React, { useEffect, useState } from 'react'

const Example2 = () => {

    const [even, setEven] = useState(0)
    const [odd, setOdd] = useState(1)

    const Even_update = () => {
        console.log("even value is updated");        
    }
    const Odd_update = () => {
        console.log("odd value is updated");        
    }


    useEffect( function(){
        Even_update()   
    },[even])

    useEffect( function(){
        Odd_update()   
    },[odd])

  return (
    <div>
      <h1>Even : {even} </h1>
      <h1>Odd : {odd} </h1>

      <button className='even' onClick={() => {
        setEven(even + 2);
      }}>Change Even</button>

      <button className='odd' onClick={() =>{
        setOdd(odd + 2);
      }}>Change odd</button>
    </div>
  )
}

export default Example2
