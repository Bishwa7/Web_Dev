import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className ='flex justify-around'>
        <div className='bg-red-300'>CHILD 1</div>
        <div className='bg-green-300'>CHILD 2</div>
        <div className='bg-blue-300'>CHILD 3</div>
      </div>
    </>
  )
}

export default App
