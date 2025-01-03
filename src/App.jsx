import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from "./components/navbar"
import Character from './components/Character/Character.jsx';

function App() {

  return (
    <>
      <Router>
      <Navbar/>
      <Hero/>
        <Routes>
          <Route path='/' element={Home} />
          <Route path='/hero' element={Home} />
          <Route path="/character" element={<Character />}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

// Dummy components
const Home = () => <div></div>

export default App
