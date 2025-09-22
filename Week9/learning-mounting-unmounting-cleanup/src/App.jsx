import { useState, useEffect } from 'react'


function App() {
  
  const [counterVisible, setCounterVisible] = useState(true)

  useEffect(function(){
    setInterval(function(){
      setCounterVisible(c => !c)
    }, 5000);
  }, [])


  return (
    <div>HI
    {counterVisible && <Counter></Counter>}
    Hello
    </div>
  )
}


function Counter(){
  const [count, setCount] = useState(0)

  console.log("counter")

  useEffect(function(){

    let clock = setInterval(function(){
      console.log("inside Interval")
      setCount(count => count + 1)
    }, 1000);

    return function(){
      clearInterval(clock)
    }
  }, [])

  return (
    <h1>{count}</h1>
  )

}

export default App
