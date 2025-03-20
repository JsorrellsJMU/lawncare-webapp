import React from 'react';

export default function HeroSection() {
  return (
    <div 
      className="h-[80vh] flex items-center justify-center"
      style={{ 
        backgroundImage: "linear-gradient(135deg, #1e3a8a, #1d4ed8)"
      }}
    >
      <section className="w-full text-center text-white py-20">
        <div className="container mx-auto">
          <h1 className="text-5xl font-medium mb-6">Welcome to Appalachian Resource Management</h1>
          <p className="text-xl mb-2 text-gray-200 italic">Serving the central Shenandoah Valley</p>
          <p className="text-2xl italic mb-12">"Preserving the native sights and sounds you love."</p>
          <a 
            href="#services" 
            className="bg-green-900 text-white py-4 px-12 rounded-full hover:bg-gray-700 transition duration-300"
          >
            Get a Quote
          </a>
        </div>
      </section>
      
      {/* Gradient Transition */}
      <div className="h-12 bg-gradient-to-b from-[#1e3a8a] to-transparent"></div>
    </div>
  );
}
