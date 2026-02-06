import { useState } from 'react'
import {Toaster} from 'react-hot-toast'
import './App.css'
import LandingPage from './LandingPage'
import Navbar from './Navbar'

function App() {

  return (
    <>
    <Navbar/>
    <Toaster position='top-center'/>

    <LandingPage/>
    </>
    
  )
}

export default App
