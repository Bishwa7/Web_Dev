# React Typescript Interfaces

<br/><br/>

## What are interfaces?
- How can you assign types to objects? For example, a user object that looks like this - 
```typescript
const user = {
	firstName: "harkirat",
	lastName: "singh",
	email: "email@gmail.com".
	age: 21,
}
```
<br/>

- To assign a type to the user object, you can use interfaces

```typescript
interface User {
	firstName: string;
	lastName: string;
	email: string;
	age: number;
}
```




## In this project
- I create a React component that takes todos as an input and renders them

```typescript

interface TodoType {
  title: string;
  description: string;
  done: boolean;
}

interface TodoInput {
  todo: TodoType;
}

function Todo({ todo }: TodoInput) {
  return <div>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
    
  </div>
}
```



## Installation
- will be updated soon