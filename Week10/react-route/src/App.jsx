

import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

function App() {

  return <div>
    <BrowserRouter>
      
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<ErrorPage/>}/>
        </Route>

      </Routes>

    </BrowserRouter>
  </div>
}



function Layout(){
  return (
    <div style={{height: "100vh"}}>
      <Header />

      <div style={{height: "80vh"}}> 
        <Outlet /> 
      </div>
      
      <Footer/>
    </div>
  )
}

function Header(){
  return (
    <div>
      <Link to="/"> Allen </Link>
      | 
      <Link to="/neet/online-coaching-class-11"> Class 11 </Link> 
      | 
      <Link to="/neet/online-coaching-class-12"> Class 12 </Link>
    </div>
  )
}


function ErrorPage(){
  return (
    <div>
      This is the Error Page (Page not found).
    </div>
  )
}


function Footer(){
   return (
    <div>
      This is Footer of the website.
    </div>
   )
}

function Landing() {
  return <div>
    Welcome to allen
  </div>
}

function Class11Program() {
  return <div>
      NEET programs for Class 11th
  </div>
}

function Class12Program() {
  return <div>
      NEET programs for Class 12th
  </div>
}

export default App
