import React from 'react';
import { motion } from 'framer-motion';

// Images imported from assets folder
import image1 from './assets/image1.png';
import image2 from './assets/image2.png';
import image3 from './assets/image3.png';
import image4 from './assets/image4.png';
import image5 from './assets/image5.png';
import image6 from './assets/image6.png';

const images = [image1, image2, image3, image4, image5, image6];

export default function Gallery() {
    return (
        <section className="min-h-screen bg-gray-100 py-20 px-4">
            <div className="container mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Gallery</h1>
                <p className="text-gray-600">Check out some of our recent work and transformations!</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 container mx-auto px-4">
                {images.map((image, index) => (
                    <motion.div 
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className="overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all"
                    >
                        <img 
                            src={image} 
                            alt={`Gallery Image ${index + 1}`} 
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
