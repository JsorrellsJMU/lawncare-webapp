import React from 'react';

export default function WhyChoose() {
    return (
        <footer id="about" className="bg-gray-900 py-16 px-4 text-white">
            <div className="container mx-auto text-center mb-12">
                <h1 className="text-3xl md:text-5xl font-bold">Why Choose Us</h1>
                <div className="w-16 mx-auto mt-4 h-1 bg-green-500"></div>
                <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
                    With over <span className="font-bold text-green-500">7 years of experience</span> in lawn care and tree treatment, we proudly serve the Central Shenandoah Valley. Our expertise ensures quality service that protects and enhances your outdoor spaces.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-y-10 px-4 mt-12 gap-x-6 lg:px-40">
                {/* Reliable Service */}
                <div className="bg-green-900 flex flex-col items-center py-12 px-6 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">Reliable Service</h2>
                    <p className="text-center text-gray-300">We provide consistent, dependable service you can trust to keep your landscape healthy and beautiful.</p>
                </div>

                {/* Local Expertise */}
                <div className="bg-green-900 flex flex-col items-center py-12 px-6 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">Local Expertise</h2>
                    <p className="text-center text-gray-300">Serving Staunton and surrounding areas with knowledge and care for the local environment.</p>
                </div>

                {/* Quality Work */}
                <div className="bg-green-900 flex flex-col items-center py-12 px-6 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-white" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-semibold mb-2">Quality Work</h2>
                    <p className="text-center text-gray-300">Dedicated to delivering the highest quality of work to meet your landscaping needs.</p>
                </div>
            </div>
        </footer>
    );
}
