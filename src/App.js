import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Home from './Components/Home';
import Navbar from "./Components/Navbar";
import Summary from './Components/Summary';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
           <Routes>
             <Route path="/" element={<Home/> } />
             <Route path="/home" element={<Home/> } />
             <Route path="/about" element={<About/> } />
             <Route path="/summary/:id" element={<Summary/> } />
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
