import React, { useEffect } from 'react';

// Flag image URLs
const flagImages = {
    India: 'https://flagcdn.com/in.svg', // Flag for India
    'Sri Lanka': 'https://flagcdn.com/lk.svg', // Flag for Sri Lanka
    Maldives: 'https://flagcdn.com/mv.svg', // Flag for Maldives
};

const Modal = ({ pkg, closeModal }) => {
    // Animation control using a fade-in class
    useEffect(() => {
        const modal = document.getElementById('modal');
        setTimeout(() => {
            modal.classList.add('opacity-100', 'scale-100');
        }, 100); // Delay to trigger the transition
    }, []);

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-out"
            role="dialog" 
            aria-modal="true"
            onClick={closeModal}
        >
            <div 
                id="modal"
                className="bg-white h-full w-full md:max-w-3xl mx-auto rounded-lg shadow-xl transform transition-all duration-300 ease-out scale-95 opacity-0 overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside it
            >
                {/* Full-size Image at the Top */}
                <div className="w-full h-64 md:h-80 overflow-hidden rounded-t-lg">
                    <img 
                        src={pkg.imageUrl} 
                        alt="Destination" 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Header with flag and destination */}
                <div className="flex items-center space-x-2 justify-center mt-4 mb-4">
                    {/* Flag Image */}
                    <img 
                        src={flagImages[pkg.destination]} 
                        alt={`${pkg.destination} flag`} 
                        className="w-10 h-10 rounded-sm"
                    />
                    <h3 className="text-4xl font-bold text-gray-800">{pkg.destination}</h3>
                </div>
                <hr className="border-gray-300" />

                {/* Itinerary and Price */}
                <p className="my-4 text-lg font-medium text-gray-700 text-center">{pkg.itinerary}</p>
                <p className="mb-4 text-2xl font-semibold text-center text-blue-600">{pkg.price}</p>

                {/* Package Inclusions */}
                <ul className="list-disc my-4 ml-8 text-gray-700 space-y-2">
                    <span className="font-bold">Package inclusions:</span>
                    {pkg.inclusions.map((item, index) => (
                        <li key={index} className="ml-4">{item}</li>
                    ))}
                </ul>

                {/* Contact Address */}
                <div className="mt-6 text-center text-gray-600">
                    <p className="font-semibold text-xl">Contact Us</p>
                    <p>123 Travel Street, Cityville, Country</p>
                    <p>Email: info@travelagency.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>

                {/* Close Button */}
                <button
                    className="w-full mt-8 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-b-lg hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-transform duration-200"
                    onClick={closeModal}
                    aria-label="Close Modal"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
