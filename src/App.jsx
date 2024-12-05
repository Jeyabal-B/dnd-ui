//import { Link, Routes, Route } from "react-router-dom"
import './App.css'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from "./components/navbar"

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  )
}

export default App
