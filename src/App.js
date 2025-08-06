import React from 'react'
import About from './Components/About'
import Header from './Components/Header'
import Services from './Components/Services'
import 'bootstrap/dist/css/bootstrap.min.css';
import Volunteer from './Components/Volunteer'

const App = () => {
  return (
    <>
    <Header />
    <About />
    <Services />
    <Volunteer />
    </>
  )
}
export default App