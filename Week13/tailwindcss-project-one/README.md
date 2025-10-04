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

<br/><br/><br/>


## Responsive Design in Tailwind css
- Link to official documentation [Tailwind CSS Documentation](https://tailwindcss.com/docs/responsive-design)


**Working mobile-first**
Tailwind uses a mobile-first breakpoint system, similar to what you might be used to in other frameworks like Bootstrap.

What this means is that unprefixed utilities (like uppercase) take effect on all screen sizes, while prefixed utilities (like md:uppercase) only take effect at the specified breakpoint and above.

**Targeting mobile screens**
Where this approach surprises people most often is that to style something for mobile, you need to use the unprefixed version of a utility, not the sm: prefixed version. Don't think of sm: as meaning "on small screens", think of it as "at the small breakpoint".

- Don't use sm: to target mobile devices
```html
<!-- This will only center text on screens 640px and wider, not on small screens -->
<div class="sm:text-center"></div>
```

- Use unprefixed utilities to target mobile, and override them at larger breakpoints
```html
<!-- This will center text on mobile, and left align it on screens 640px and wider -->
<div class="text-center sm:text-left"></div>
```

<br/>

| **Breakpoint prefix** | **Minimum width** | **CSS** |
|---|---|---|
| sm  | 40rem (640px)  | @media (width >= 40rem) { ... } |
| md  | 48rem (768px)  | @media (width >= 48rem) { ... } |
| lg  | 64rem (1024px) | @media (width >= 64rem) { ... } |
| xl  | 80rem (1280px) | @media (width >= 80rem) { ... } |
| 2xl | 96rem (1536px) | @media (width >= 96rem) { ... } |

<br/>

- Responsive-Design example 1 
```javascript
<div className ='xl:bg-yellow-300 md:bg-green-300 sm:bg-blue-300 bg-red-300'>
  Hi there
</div>
```
<br/>

- Responsive-Design example 2

```javascript
function App() {


  return (
    <>
      <div className ='sm:grid grid-cols-12'>
        <div className='bg-red-300 col-span-4'>CHILD 1</div>
        <div className='bg-green-300 col-span-4'>CHILD 2</div>
        <div className='bg-blue-300 col-span-4'>CHILD 3</div>
      </div>
    </>
  )
}
```