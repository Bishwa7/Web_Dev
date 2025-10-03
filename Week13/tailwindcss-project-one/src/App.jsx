

import './App.css'

function App() {


  return (
    <>
      <div className ='grid grid-cols-12'>
        <div className='bg-red-300 col-span-2'>
          CHILD 1
        </div>
        <div className='bg-green-300 col-span-8'>
          CHILD 2
        </div>
        <div className='bg-blue-300 col-span-2'>
          CHILD 3
        </div>
      </div>
    </>
  )
}

export default App
