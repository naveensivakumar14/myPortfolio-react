//Importing react components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Details from './components/Details'
import MultipleItems from './components/Works'
import Footer from './components/Footer'

import './App.css'


function App() {


  //apperance App
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <MultipleItems/>
      <Details/>
      <Footer/>
    </>
  )
}

export default App
