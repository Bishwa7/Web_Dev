# Rolling up the state
- Rolling up the state with light bulb app example
- Rolling up state is generally bad practice, unoptimal re-renders happen

<br/><br/><br/>

Note - Rolling up the state and prop drilling are different
<br/>

# Prop drilling 
occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree. This often leads to the following issues:

- **Complexity:** You may have to pass props through many intermediate components that don’t use the props themselves, just to get them to the component that needs them.
- **Maintenance:** It can make the code harder to maintain, as changes in the props structure require updates in multiple components.




**Fix prop drilling**

# Context API
- Context API can fix prop drilling 
- And, can be optimised for extra re-renders but better to use **State Management Libreries (Recoil, Redux) for better Optimization**