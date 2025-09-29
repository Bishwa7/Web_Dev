import { useRef } from 'react'

import './App.css'



function useDebounce(url){
  
  const currentClock = useRef()


  const fn = ()=> {
    clearTimeout(currentClock.current)

    currentClock.current = setTimeout(url, 200)
  }

  return fn
}



function App() {
  

  function backendRequest(){
    fetch("api.amazon.com/search/")
  }

  const debounce = useDebounce(backendRequest)

  return (
    <>
      <input type="input" onChange={debounce}></input>
    </>
  )
}

export default App
