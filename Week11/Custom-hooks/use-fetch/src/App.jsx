import { useState } from "react"
import './App.css'
import { useFetch } from './hooks/fetch'



function App() {
  
  return (
    <>
    <Mycomponent />
    </>
  )
}


function Mycomponent(){

  const [currentPost, setCurrentPost] = useState(1)
  const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts/"+ currentPost)

  if (error){
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  } 
  return (
    <div>

      <button onClick={() => setCurrentPost(1)}>One</button>
      <button onClick={() => setCurrentPost(2)}>Two</button>
      <button onClick={() => setCurrentPost(3)}>Three</button>
      <br />
      {loading? <div>Loading...</div> :JSON.stringify(data)}
    </div>
  )
}




export default App
