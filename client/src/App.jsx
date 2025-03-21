import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar.jsx";
import HeroSection from "./HeroSection.jsx";
import ServicesSection from "./ServicesSection.jsx";
import ContactUs from './ContactUs.jsx';
import WhyChoose from './WhyChoose';
import Gallery from "./Gallery.jsx";  // Import the Gallery component

export default function App() {
  return (
    <Router>
    <div style={{ scrollBehavior: 'smooth' }}>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <ServicesSection />
            <ContactUs />
            <WhyChoose />
          </>
        } />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </div>
  </Router>
);
}
