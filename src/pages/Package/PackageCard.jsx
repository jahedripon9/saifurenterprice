// src/components/PackageCard.js
import React from 'react';

// Static flag images
const flagImages = {
    India: 'https://flagcdn.com/in.svg', // Flag for India
    'Sri Lanka': 'https://flagcdn.com/lk.svg', // Flag for Sri Lanka
    Maldives: 'https://flagcdn.com/mv.svg', // Flag for Maldives
};

const PackageCard = ({ pkg, openModal }) => {
    return (
        <div
            className="p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow text-black "
            onClick={() => openModal(pkg)}
        >
            <div className="flex items-center space-x-2 justify-center">
                {/* Display Static Flag Image */}
                <img src={flagImages[pkg.destination]} alt={`${pkg.destination} flag`} className="w-6 h-6 rounded-sm" />
                <h3 className="text-xl font-semibold ">{pkg.destination}</h3>
            </div>
            <p className="text-gray-800 mt-2 text-center">{pkg.price}</p>
        </div>
    );
};

export default PackageCard;
