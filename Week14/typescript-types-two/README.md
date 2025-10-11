# Types in Typescript

- union (using | operator)
- intersection (using & operator)

<br/><br/><br/>

## Types in TypeScript:  
- Primitive Types:  
    - These include basic types such as `string`, `number`, `boolean`, `null`, and `undefined`.  
    - They represent single, immutable values.  
- Complex Types:  
    - Types such as `array`, `object`, `tuple`, and `enum` are considered complex types.  
    - They allow grouping multiple related values together.  
- Special Types:  
    - `any`: Can hold values of any type, offering maximum flexibility but less type safety.  
    - `unknown`: Similar to `any` but requires a type assertion or check before use.  
    - `void`: Used for functions that do not return any value.  
    - `never`: Represents values that never occur, such as functions that always throw errors or have infinite loops.  