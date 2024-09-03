import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Expertixe from './components/Expertixe'
import Header from './components/Header'
// import Services from './components/Services'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Experience from './components/Experience'

function App() {


  return (
    <>
      {/* <Routes>
        <Route path="/header" element={<Header />}/>
        <Route path="/header" element={<Header />}/>
        <Route path="/about" element={<About />}/>
      </Routes> */}
    <Header />  
    <Banner />
    <About />
    <Projects />
    <Experience />
    <Expertixe />
    {/* <Services /> */}
    <Footer />
    </>
  )
}

export default App;
