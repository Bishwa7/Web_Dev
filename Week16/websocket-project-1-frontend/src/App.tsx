
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const socketRef = useRef(null)
  const inputRef = useRef(null)
  const [messages, setMessages] = useState([null])

  const sendMessage = () => {

    const socket = socketRef.current

    if (socket && socket.readyState === WebSocket.OPEN && inputRef.current) {
      socket.send(inputRef.current.value);
      inputRef.current.value = "";
    } else {
      console.warn("Socket not connected yet");
    }
  }


  useEffect(()=>{
    const ws = new WebSocket("ws://localhost:8080")
    //@ts-ignore
    socketRef.current=ws

    ws.onmessage = (ev) => {
      setMessages((prev)=> [...prev, ev.data])
      
    }

    return () => {
      if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
        ws.close();
      }
    }
  },[])


  return (
    <div>
      <input ref={inputRef} type='text' placeholder='message...'></input>
      <button onClick={sendMessage}>Send</button>


      <ul>
        {messages.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
  )
}

export default App
