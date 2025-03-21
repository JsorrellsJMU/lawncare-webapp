import React from 'react';
import { motion } from 'framer-motion';

export default function ContactUs() {
    const contacts = [
        {
            title: "Email",
            description: "Contact us at",
            detail: "bcs13fish@gmail.com",
            link: "mailto:bcs13fish@gmail.com",
            icon: "📧"
        },
        {
            title: "Phone",
            description: "Reach out to us by phone",
            detail: "+1 (540) 688-8568",
            link: "tel:+15406888568",
            icon: "📞"
        },
        {
            title: "Location",
            description: "Based in Staunton, serving the Central Shenandoah Valley",
            detail: "Central Shenandoah Valley",
            link: "https://goo.gl/maps/QcWzYETAh4FS3KTD7",
            icon: "📍"
        }
    ];

    return (
        <section 
            id="contact" 
            className="pt-20 pb-12 lg:pb-16 flex justify-center items-center bg-gradient-to-b from-[#1e3a8a] to-[#1d4ed8]"
            style={{ minHeight: '100vh' }}
        >
            <div className="container mx-auto text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mx-auto mb-12 lg:mb-20 max-w-[510px]"
                >
                    <span className="font-semibold text-lg text-white mb-2 block">
                        Contact Us
                    </span>
                    <h2 className="font-bold text-3xl sm:text-4xl md:text-[40px] text-white mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-base text-gray-200">
                        We're here to help you with all your lawn care and tree treatment needs.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center -mx-2 sm:-mx-4">
                    {contacts.map((contact, index) => (
                        <motion.div 
                            key={index}
                            className="w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-4 mb-6 sm:mb-8"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
                        >
                            <div className="p-6 md:px-5 xl:px-7 rounded-[15px] bg-green-900 text-white shadow-md border border-gray-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <div className="w-[50px] h-[50px] flex items-center justify-center bg-white rounded-2xl mb-4 mx-auto">
                                    <span className="text-green-900 text-2xl">{contact.icon}</span>
                                </div>
                                <h4 className="font-semibold text-lg mb-2 text-center">{contact.title}</h4>
                                <p className="text-white mb-1 text-center">{contact.description}</p>
                                <a 
                                    href={contact.link} 
                                    target={contact.title === "Location" ? "_blank" : "_self"}
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:text-blue-600 block text-center"
                                >
                                    {contact.detail}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
