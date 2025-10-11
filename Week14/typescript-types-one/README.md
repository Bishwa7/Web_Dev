# Typescript Types

<br/>
<br/>

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


<br/>
<br/>

## Initializing Project

- to initialize node.js project (adds package.json file)
```
npm init -y
```
- install typescript in project
```
npm install typescript
```
- add tsconfig.json file to project
```
npx tsc --init
```

- enable the following in tsconfig.json (for better file structuring)
```
"rootDir": "./src",
"outDir": "./dist",
```

- now create index.ts in a src Dir

- to compile typescript to and generate javascript using tsc compiler
```
npx tsc -b
```
- now run index.js
```
node ./dist/index.js
```