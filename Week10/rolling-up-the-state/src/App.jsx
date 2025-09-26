import { useState } from "react"

function App() {
  return (
    <>
    <LightBulb />
    </>
  )
}


const LightBulb = () => {
  // used state variable in the lowest common parent element (rolling up state)
  const [bulbOn, setBulbOn] = useState(true)  

  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState setBulbOn={setBulbOn} />
    </div>
  )
}

function BulbState({bulbOn}){
   return (
    <div>
      {bulbOn? "💡✅" : "💡❌"}
    </div>
   )
}

function ToggleBulbState({setBulbOn}){

  function toggler(){
    setBulbOn(currentState => !currentState)
  }

  return (
    <div>
      <button onClick={toggler}>Toggle Bulb State</button>
    </div>
  )
}

export default App
