import React from 'react'
import Old from './components/Old'
import ReactMethod from './components/ReactMethod'
import Counter from './components/Counter'

const App = () => {
  return (
    <div>
      <Old />

      <hr style={{marginBottom: 20, marginTop:20}} />

      <ReactMethod />

      <hr style={{marginBottom: 20, marginTop:20}} />

      <Counter />
    </div>
  )
}

export default App
