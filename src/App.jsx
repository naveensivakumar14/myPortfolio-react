//Importing react components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Details from './components/Details'
import MultipleItems from './components/Works'
import ContactMe from './components/Contact'
import Footer from './components/Footer'

import './App.css'


function App() {


  //apperance App
  return (
    <>
      
      <Navbar/>
      <div id="Home"><Hero/></div>
      <div id="About"><About/></div>
      <div id="Skills"><Skills/></div>
      <div id="Projects"><MultipleItems/></div>
      <Details/>
      <div id="Contact"><ContactMe/></div>
      
      <Footer/>
    </>
  )
}

export default App
