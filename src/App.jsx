import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from "./components/navbar"
import Character from './components/Character/Character.jsx';

function App() {

  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/hero' element={<Hero />} />
          <Route path="/character" element={<Character />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

// Dummy components
const Home = () => <div></div>

export default App
