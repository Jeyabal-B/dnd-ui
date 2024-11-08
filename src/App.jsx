import { Link, Routes, Route } from "react-router-dom"

import './App.css'
import CharacterDetails from "./components/characterDetails"

function App() {

  return (
    <>
      <div>
        Home Test Page
      </div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/characterDetails">Character Details</Link>
      </nav>

      <Routes>
        <Route path="/characterDetails" element={<CharacterDetails/>} />
      </Routes>
   
    </>
  )
}

export default App
