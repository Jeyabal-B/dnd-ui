import { Link, Routes, Route } from "react-router-dom"

import './App.css'
import CharacterDetails from "./pages/characterDetails"

function App() {

  return (
    <>
      <div>
        Home Test Page
      </div>

      <nav>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/characterDetails">Character Details</Link>
      </nav>

      <Routes>
        <Route path="/characterDetails" element={<CharacterDetails/>} />
      </Routes>
   
    </>
  )
}

export default App
