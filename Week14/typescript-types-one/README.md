# Typescript Types

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