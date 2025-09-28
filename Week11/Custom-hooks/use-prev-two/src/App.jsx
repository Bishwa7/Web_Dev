import { useState } from 'react'
import { usePrevious } from './hooks/usePrev2';
import './App.css'

function App() {

  //const [count2, setCount2] = useState(0)

  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count, 0);

  return (
    <>
    <div>
      <h1>Current: {count}</h1>
      <h2>Previous: {prevCount}</h2>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      <button onClick={() => setCount(c => c - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>


    <br /><br /><br /><br /><br />

    {/* <button onClick={()=> setCount2(count2 - 1)}>Decrease</button>
    {count2} */}
    </>
  )
}

export default App
