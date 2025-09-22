import { useState } from "react"

function App() {
  
  return (
    <div>
      Hi there

      <Counter></Counter>
    </div>
    
  )
}


function Counter(){

  //let count = 0 ;

  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(count + 1);
  }

  function decreaseCount(){
    setCount(count - 1);
  }
  
  function resetCount(){
    setCount(0);
  }


  return (
    <div>
      <h1> { count } </h1>
      <button onClick={ increaseCount }>Increase counter</button>
      <button onClick={ decreaseCount }>Decrease counter</button>
      <button onClick={ resetCount }>Reset counter</button>
    </div>
  )
}

export default App
