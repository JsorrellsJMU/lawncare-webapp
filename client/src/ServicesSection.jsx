import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ServicesSection() {
  const services = [
    { title: "Invasive Species Removal", description: "Removing unwanted and harmful plant species to promote native growth and ecosystem health.", emoji: "🌱" },
    { title: "Tree and Plant Identification", description: "Accurately identifying various trees and plants to develop effective maintenance plans.", emoji: "🌳" },
    { title: "Native Plantings and Maintenance", description: "Establishing and maintaining native plants to enhance biodiversity and natural beauty.", emoji: "🌼" },
    { title: "Mowing, Pruning, and Brush Removal", description: "Keeping landscapes neat and healthy through regular mowing, pruning, and brush clearing.", emoji: "✂️" },
    { title: "Tree Planting", description: "Planting new trees to restore natural areas and improve landscape aesthetics.", emoji: "🌲" },
    { title: "Building Food Plots for Wildlife", description: "Creating designated areas to support wildlife with food and shelter.", emoji: "🦌" },
    { title: "Wildlife Damage Management", description: "Addressing issues caused by wildlife and implementing solutions to minimize damage.", emoji: "🦊" }
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: '-100px' });

  return (
    <section 
      id="services"
      ref={sectionRef}
      className="pt-20 pb-12 lg:pb-16 flex justify-center items-center bg-gradient-to-b from-[#1e3a8a] to-[#1d4ed8]"
      style={{ minHeight: '100vh' }}
    >
      <div className="container mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mx-auto mb-12 lg:mb-20 max-w-[510px]"
        >
          <span className="font-semibold text-lg text-white mb-2 block">
            Our Services
          </span>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-white mb-4">
            What We Offer
          </h2>
          <p className="text-base text-gray-200">
            Comprehensive services to enhance and preserve natural landscapes.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap justify-center -mx-4">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
            >
              <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-green-900 text-white shadow-md border border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 mb-8 flex flex-col items-center">
                <div className="w-[70px] h-[70px] flex items-center justify-center bg-white rounded-2xl mb-8">
                  <span className="text-3xl">{service.emoji}</span>
                </div>
                <h4 className="font-semibold text-xl mb-3 text-center">{service.title}</h4>
                <p className="text-white text-center">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
