# This project is an example of a custom hook 

This project has a custom hook useCounter which uses useState internally and is used in a counter component 


<br/>

# Custom hooks

Custom hooks in React are a powerful feature that allows you to encapsulate and reuse stateful logic across different components. They are essentially JavaScript functions that can use React hooks internally. By creating custom hooks, you can abstract away complex logic, making your components cleaner and more manageable.

### Why Use Custom Hooks?

1. **Reusability**: If you find yourself using the same logic in multiple components, a custom hook can help you avoid code duplication.
2. **Separation of Concerns**: They allow you to separate business logic from UI logic, making your components more focused and easier to understand.


# Note -
 - Custom hooks should use another hook internally
 - It should return a value 