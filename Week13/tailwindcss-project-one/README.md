# Tailwind CSS (v4)

- This project is for getting started with tailwind CSS
- Link to official documentation [Tailwind CSS Documentation](https://tailwindcss.com/docs/installation/using-vite)

<br/><br/>

## Starting react project with vite
```
npm create vite@latest 
```
Choose project-name -> React -> Javascript

```
cd project-name
npm install
```

## Installing Tailwind Css
```
npm install tailwindcss @tailwindcss/vite
```

vite.config.ts
```javascript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```

css
```
@import "tailwindcss";
```


## Flex (justify-content) in tailwind css
- Link to official documentation [Tailwind CSS Documentation](https://tailwindcss.com/docs/justify-content)


```javascript

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
```




## Grid in tailwind css
- Link to official documentation [Tailwind CSS Documentation](https://tailwindcss.com/docs/grid-template-columns)


```javascript

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

```