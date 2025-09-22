import { useState, useEffect } from 'react'

function App() {

  return (
    <div>
      <Clock></Clock>
    </div>
  )
}


// mounting, re-rendering, un-mounting

function Clock(){

  const [count , setCount ] = useState(0);

  // hooking into the lifecycle events of react
  console.log("counter")



  // useEffect allows function to run only once during mounting
  // useEffect takes a function and a dependency array as an input

  useEffect(function(){

    setInterval(() => {
      setCount(count => count + 1);
    }, 1000);

    console.log("mounted")
    
  }, []);




  return (
    <div>
      <h1> { count } </h1>
    </div>
  )
}

export default App
