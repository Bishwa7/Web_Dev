

function App() {

  const todo = {
    title: "Go to gym",
    description: "Today is push day",
    done: false
  }
  
  return (
    <>
    <Todo todo={todo}></Todo>
    </>
  )
}


interface TodoType{
  title: string,
  description: string,
  done?: boolean
}


interface TodoInput{
  todo : TodoType
}


function Todo({todo}: TodoInput){

  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  )
}

export default App
