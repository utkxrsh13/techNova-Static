
import React, { useEffect, useState } from 'react';
import './App.css'; 
import Home from './components/Home.jsx';
import Service from './components/Service.jsx';
import ContactUs from './components/ContactUs.jsx';
import AboutUs from './components/AboutUs.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app">
      <Home />
      <Service />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  )
}




export default App;
