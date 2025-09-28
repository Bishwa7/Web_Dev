import { useState } from 'react'
import {usePrev} from "./hooks/usePrev"
import './App.css'

function App() {
  //const [count2, setCount2] = useState(0)

  const [count, setCount] = useState(0)
  const prevCount = usePrev(count)
  
  return (
    <>
    {count} <br />
    <button onClick={() => setCount(count+1)}>Increase</button>
    <p>Previous Count = {prevCount}</p>


    <br /><br /><br /><br /><br />

    {/* <button onClick={()=> setCount2(count2 - 1)}>Decrease</button>
    {count2} */}
    </>
  )
}

export default App
