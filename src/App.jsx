import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Services from './components/services/Services';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/services" element={<Services/>} />
        
      </Routes>
      <Footer/>
    </>
  )
}

export default App
