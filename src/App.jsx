import React from 'react'
import './css/App.css'
import AboutMe from './pages/AboutMe'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home' // ✅ This matches a named export
import Proyects from './pages/Proyects'
import Services from './pages/Services'
import "tailwindcss";

function App() {
  return (
    <main className="bg-black   p-4 overflow-hidden">
      
   <Home/>
   <Services/>
   <AboutMe/>
   <Proyects/>
   <Contact/>
   
   
    </main>
  )
}

export default App
