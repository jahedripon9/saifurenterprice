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
<hr />
                {/* Contact Address */}
                {/* Contact info Start */}
        <div className="mt-5 p-3  text-center text-gray-700 ">
          <p className="text-2xl font-extrabold text-gray-800 mb-2 tracking-wide">
            Saifur Enterprise
          </p>
          <p className="text-lg font-bold italic text-gray-600 mb-3">
            Proprietor: Saifur Rahman Sabul
          </p>

          <div className="flex flex-col space-y-3 text-center max-w-sm mx-auto">
            {/* Address */}
            <div className="flex items-start justify-center space-x-2 bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow duration-200">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 2C8.13401 2 5 5.13401 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c1.10457 0 2-.89543 2-2s-.89543-2-2-2-2 .89543-2 2 .89543 2 2 2z"
                ></path>
              </svg>
              <p className="text-gray-800 ">
                303, 4th Floor, Surma Tower, Taltola,
                <br />
                Sylhet, Bangladesh
              </p>
            </div>

            {/* Email */}
            <div className="flex items-start justify-center space-x-3 bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow duration-200">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12l-4 4m0 0l-4-4m4 4V8m-5-2a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2v-8a2 2 0 00-2-2h-2.586a1 1 0 01-.707-.293L12 3.414 9.293 6.707A1 1 0 018.586 7H6z"
                ></path>
              </svg>
              <p className="text-gray-800">
                Email:{" "}
                <a
                  href="mailto:saifursetc@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  saifursetc@gmail.com
                </a>
              </p>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start justify-center space-x-3 bg-white rounded-lg p-2 shadow-md hover:shadow-lg transition-shadow duration-200">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5c0 10.493 8.507 19 19 19M8 5c0 7.18 5.82 13 13 13"
                ></path>
              </svg>
              <p className="text-gray-800">
                Phone: +8801728 105533, +8801818 989713
              </p>
            </div>
          </div>
        </div>
        {/* Contact info end */}

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
