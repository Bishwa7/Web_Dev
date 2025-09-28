# usePrev custom hook implementation 2

For more information, visit the [usePrev Blog](https://giacomocerquone.com/blog/life-death-useprevious-hook/)



```javascript
import {useRef} from "react"

export function usePrevious(value, initial) {
  const ref = useRef({ target: value, previous: initial });

  if (ref.current.target !== value) {
    ref.current.previous = ref.current.target;
    ref.current.target = value;
  }
  return ref.current.previous;
}
```