// src/components/PackageSection.js
import React, { useState } from 'react';
import PackageCard from './PackageCard';
import Modal from './Modal';

const packages = [
    {
        id: 'PKG001',
        adId: 'AD12345',
        destination: 'India',
        price: 'BDT 37,000 per person',
        inclusions: [
            '1 Night in Kalimpong (Hotel Mountain View or similar)',
            '2 Nights in Darjeeling (Hotel Yuma or similar)',
            '2 Nights in Pelling (Sikkim Tourist Centre or similar)',
            '2 Nights in Gangtok (The Ridge Hotel or similar)',
            'Daily Breakfast',
            'Meet & Assist',
            'All transfers and sightseeing as per itinerary',
        ],
        colors: ['#FF9933', '#FFFFFF', '#138808'],
        countryCode: 'IN', // India
    },
    {
        id: 'PKG002',
        adId: 'AD12346',
        destination: 'Sri Lanka',
        price: 'BDT 45,000 per person',
        inclusions: [
            '2 Nights in Colombo (Hotel Cinnamon Red or similar)',
            '2 Nights in Kandy (Hotel Earls Regency or similar)',
            '2 Nights in Bentota (Hotel Taj Bentota or similar)',
            'Daily Breakfast',
            'Meet & Assist',
            'All transfers and sightseeing as per itinerary',
        ],
        colors: ['#FFB20F', '#009B77', '#FF0000'],
        countryCode: 'LK', // Sri Lanka
    },
    {
        id: 'PKG003',
        adId: 'AD12347',
        destination: 'Maldives',
        price: 'BDT 80,000 per person',
        inclusions: [
            '3 Nights in Maldives (Resort Island Villa or similar)',
            'All meals included',
            'Snorkeling and water activities',
            'Meet & Assist',
            'Transfers by speedboat',
            'All sightseeing as per itinerary',
        ],
        colors: ['#D21034', '#007E3A', '#FFFFFF'],
        countryCode: 'MV', // Maldives
    },
];

const PackageSection = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);

    const openModal = (pkg) => {
        setSelectedPackage(pkg);
    };

    const closeModal = () => {
        setSelectedPackage(null);
    };

    return (
        <div className="p-6 bg-gray-100">
            <h2 className="text-2xl font-bold text-center mb-6">Tour Packages</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {packages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} openModal={openModal} />
                ))}
            </div>

            {selectedPackage && <Modal pkg={selectedPackage} closeModal={closeModal} />}
        </div>
    );
};

export default PackageSection;
