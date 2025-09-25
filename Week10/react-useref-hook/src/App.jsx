import { useRef, useState, useCallback, useEffect } from 'react';


function App() {
  

  // useRef - DOM reference
  const inputRef = useRef()

  function focusOnClick(){
    inputRef.current.focus()
  }







  // useRef - Value reference 
  const [count, setCount] = useState(0);

  const timer = useRef(null)


  function startTimer(){

    if(timer.current !== null) return; //Timer already running, do nothing


    timer.current = setInterval(function(){
      setCount(count => count + 1)
    }, 1000);

    //timer.current = clock;
  }

  function stopTimer(){
    console.log(timer.current)
    clearInterval(timer.current)
    timer.current = null;
  }


  // const startTimer = useCallback(() => {
  //   if (timer.current !== null) return;

  //   timer.current = setInterval(() => {
  //     console.log("hello")
  //     setCount(count => count + 1);
  //   }, 1000);
  // }, []);

  // const stopTimer = useCallback(() => {
  //   console.log(timer.current)
  //   clearInterval(timer.current);
  //   timer.current = null;
  // }, []);

  // // Cleanup on unmount
  // useEffect(() => {
  //   return () => {
  //     clearInterval(timer.current);
  //   };
  // }, []);

  return (
    <>
      Sign Up <br />
      <input ref={inputRef} type={"text"} placeholder={"Click the button to focus on me"}></input> <br />
      <input type={"text"} ></input> <br />
      <button onClick={focusOnClick}> Focus Button </button>





      <br /><br /><br /><br />



      <div>
        {count}
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
      </div>
    </>
  )
}

export default App
