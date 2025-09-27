import { useState } from 'react'
import './App.css'

// custom hook
function useCounter() {
  //using another hook internally
  const [count, setCount] = useState(0)

  function increaseCount()
  {
    setCount(c => c+1)
  }

  //returning a value
  return {
    count: count,
    increaseCount: increaseCount
  }
}


function App() {

  return (
    <>
    <Counter />
    <Counter />
    <Counter2 />      
    </>
  )
}


function Counter(){

  const {count, increaseCount} = useCounter()

  return (
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  )
}


function Counter2(){

  const {count, increaseCount} = useCounter()

  return (
    <div>
      <button onClick={increaseCount}>Increase {count}</button>
    </div>
  )
}

export default App
