// src/components/Modal.js
import React from 'react';
const flagImages = {
    India: 'https://flagcdn.com/in.svg', // Flag for India
    'Sri Lanka': 'https://flagcdn.com/lk.svg', // Flag for Sri Lanka
    Maldives: 'https://flagcdn.com/mv.svg', // Flag for Maldives
};
const Modal = ({ pkg, closeModal }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" >
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <div className="flex items-center space-x-2 justify-center mt-1">
                    {/* Display Static Flag Image */}
                    <img src={flagImages[pkg.destination]} alt={`${pkg.destination} flag`} className="w-6 h-6 rounded-sm" />
                    <h3 className="text-2xl font-semibold ">{pkg.destination}</h3>
                </div><hr />
                <p className="mb-2 font-semibold text-center">{pkg.itinerary}</p>
                <p className="mb-2 font-semibold text-center">{pkg.price}</p>
                <ul className="list-disc my-2 ml-4 text-gray-700 "> <span className='font-bold '>Package inclusions:</span>
                    {pkg.inclusions.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
