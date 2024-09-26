// src/components/ServiceCard.js
import React from 'react';

const ServiceCard = ({ title, image, onClick }) => {
    return (
        <div 
            className=" flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-200 transform hover:scale-105 cursor-pointer p-4"
            onClick={onClick}
        >
            <img src={image} alt={title} className="w-24 h-24 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
    );
};

export default ServiceCard;
