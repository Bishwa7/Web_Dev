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


