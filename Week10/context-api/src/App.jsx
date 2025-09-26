import { createContext, useContext, useState } from "react"

// creating context
const BulbContext = createContext()

function App() {

  const [bulbOn, setBulbOn] = useState(true)  

  // context provider
  return (
    <>
    <BulbContext.Provider value={{bulbOn: bulbOn, setBulbOn: setBulbOn}}>
      <LightBulb />
    </BulbContext.Provider>
    </>
  )
}


const LightBulb = () => {

  return (
    <div>
      <BulbState />
      <ToggleBulbState />
    </div>
  )
}

function BulbState(){
  
  // context consumer
  const {bulbOn} = useContext(BulbContext)

   return (
    <div>
      {bulbOn? "💡✅" : "💡❌"}
    </div>
   )
}

function ToggleBulbState(){
  
  // context consumer
  const {setBulbOn} = useContext(BulbContext)

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
