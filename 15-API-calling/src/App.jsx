import React, { useState } from 'react'
import axios from 'axios'

const App = () => {

  const [data, setData] = useState([])

  // 1. Fetch
  // using FETCH ->  without async and aait return Promise(pending)
  function datacalling(){
    const response = fetch('https://jsonplaceholder.typicode.com')
    console.log(response);
  }
  // using FETCH -> for async and await
  async function datacalling(){
    const response = await fetch('https://jsonplaceholder.typicode.com')
    console.log(response);
  }

  // using FETCH -> with .json 
  const getDataF = () => {
    const response = fetch('https://jsonplaceholder.typicode.com/todos');

    const data = response.JSON();

    console.log(data)
  }
  

  // 2. axios 

  // using axios -> async and await
   async function datacalling(){
    const response =await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(response.data);
  }

  const getData_Axios = async () => {
     const response =await axios.get('https://picsum.photos/v2/list')

     setData(response.data);
     
  }

  //2. axios

  return (
    <div>
      <div>
         <button onClick={getData_Axios}>Get Data</button>
      </div>
         {data. map( function(elem, idx){

            return <h3 >Hello, {elem.author} {idx}</h3>
         } )}
    </div>
  )
}

export default App
