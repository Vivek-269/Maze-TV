import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './Components/About';
import Form from './Components/Form';
import Home from './Components/Home';
import Navbar from "./Components/Navbar";
import Summary from './Components/Summary';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/summary/:id" element={<Summary />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
