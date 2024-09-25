// src/components/Modal.js
import React from 'react';

const Modal = ({ pkg, closeModal }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">{pkg.destination} Package</h2>
                <p className="mb-2">{pkg.price}</p>
                <ul className="list-disc ml-4 text-gray-700">
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
