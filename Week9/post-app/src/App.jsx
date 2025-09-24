import { useState } from "react";
import { PostComponent } from "./Post";

function App() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map(post => <><PostComponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  /> <br/> </>)

  function addPost() {
    setPosts([...posts, {
      name: "Bishwa",
      subtitle: "10000 followers",
      time: "2m ago",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGjsrMXnUpyMyNws69ndbin2T6N_Sll88Jjg&s",
      description: "How to master pull ups? Pull the bar to your chest."
    }])
  }


  const buttonStyle = {
  backgroundColor: "#da7018ff",
  color: "white", 
  padding: 10,
  border: "none", 
  borderRadius: 5, 
  cursor: "pointer", 
  fontSize: 16,
  marginLeft: 50,
  marginTop: 10
 }

  return (
    <div>
      <button onClick={addPost} style={buttonStyle}>Add post</button>
      <div style={{display: "flex", justifyContent: "center" }}>
        <div>
          {postComponents}
        </div>
      </div>
    </div>
  )
}

export default App

