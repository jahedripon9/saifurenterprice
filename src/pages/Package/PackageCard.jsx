// src/components/PackageCard.js
import React from 'react';
// Static flag images
const flagImages = {
    India: 'https://flagcdn.com/in.svg', // Flag for India
    'Sri Lanka': 'https://flagcdn.com/lk.svg', // Flag for Sri Lanka
    Maldives: 'https://flagcdn.com/mv.svg', // Flag for Maldives
    Vietnam : 'https://flagcdn.com/vn.svg', // Flag for Vietnam
    Dubai  : 'https://flagcdn.com/ae.svg', // Flag for Dubai 
    SaudiArabia  : 'https://flagcdn.com/sa.svg', // Flag for saudi arabia
};

const PackageCard = ({ pkg, openModal }) => {
    return (
        <div
            className="p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow text-black text-center "
            onClick={() => openModal(pkg)}
        >
            <figure>
                <img className='rounded-lg ' src={pkg.imageUrl} alt="travel" />
            </figure>
            <div className="flex items-center space-x-2 justify-center mt-5">
                {/* Display Static Flag Image */}
                <img src={flagImages[pkg.destination]} alt={`${pkg.destination} flag`} className="w-6 h-6 rounded-sm" />
                <h3 className="text-2xl font-semibold ">{pkg.destination}</h3> 
            </div><hr />
            <p className="text-gray-800 mt-2 text-center font-bold text-lg">{pkg.itinerary}</p> <hr />
            <p className="text-red-500 mt-2 text-center font-semibold text-xl ">{pkg.price}</p>
            <button className='btn btn-outline my-2'>More Information</button>
        </div>
    );
};

export default PackageCard;
