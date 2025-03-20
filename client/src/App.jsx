import React from 'react';
import NavBar from "./NavBar.jsx";
import HeroSection from "./HeroSection.jsx";
import ServicesSection from "./ServicesSection.jsx";

export default function App() {
  return (
    <>
      <div style={{ scrollBehavior: 'smooth' }}>
        <NavBar />
        <HeroSection />
        <ServicesSection />
      </div>
    </>
  );
}
