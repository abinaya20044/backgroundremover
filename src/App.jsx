import React from 'react'
import Navbar from './components/navbar/Navbar'
import RemoveBackground from './components/removeBackground/removeBackground'
import Footer from './components/footer/Footer'
//import Navbar from './components/Navbar'
//import RemoveBackground from './components/RemoveBackground'
//import Footer from './components/Footer'

export default function App() {
  return (
    <div>
     <Navbar/>
      <div className="h-screen">
        <RemoveBackground/>
      </div>
      <Footer/>
    </div>
  )
}