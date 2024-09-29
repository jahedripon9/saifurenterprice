import React, { useState } from "react";
import bookingImage from "../../assets/ticket-alt-svgrepo-com.svg";
import destinationImage from "../../assets/destination-drawn-hand-svgrepo-com.svg";
import flightImage from "../../assets/flight-svgrepo-com.svg";
import logoImage from "../..//assets/logo1.png"; // Add the path to your logo image

// Modal Component with detailed info
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 z-10">
        <div className="flex justify-between items-center fixed ">
          <h2 className=" text-2xl font-bold ">Business Information: </h2>
          
        </div>
        <div className="mt-5 p-3 text-center text-gray-700 ">
          <div className="flex justify-center my-6">
            <img className="w-24 h-auto" src={logoImage} alt="Logo" />
          </div>
          <p className="text-2xl font-extrabold text-sky-600 mb-2 tracking-wide">
            <span className="text-sky-700">Saifur</span> Enterprise
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
              <p className="text-gray-800">
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
          <button
            onClick={onClose}
            className="px-4 sm:px-6 py-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600 transition-all duration-200 transform hover:scale-105 mt-5 font-semibold"
          > Close
            &times;
          </button>
        </div>
             </div>
      
      {/* Full page blurred background */}
      <div
        className="absolute inset-0 backdrop-blur-md"
        onClick={onClose}
      ></div>
    </div>
  );
};

// TravelInfo Component
const TravelInfo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="my-16 px-5 lg:px-24 fade-in" id="info">
      <h2 className="text-center text-4xl font-bold">
        Your Travel Information
      </h2>
      <p className="text-center text-lg mt-4 mb-12 text-gray-500">
        Get ready for your next adventure by selecting a destination, booking a
        trip, and taking your flight.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Card 1 */}
        <div
          className="bg-white border border-gray-200 shadow-md rounded-tr-3xl rounded-bl-3xl p-6 flex items-center hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
          onClick={openModal}
        >
          <div className="flex justify-center mr-4">
            <img
              className="w-16 h-16"
              src={destinationImage}
              alt="Select Destination"
            />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-semibold">Select Destination</h3>
            <p className="text-gray-500 mt-2">
              Explore new places and find the perfect spot for your vacation.
            </p>
          </div>
        </div>
        {/* Card 2 */}
        <div
          className="bg-white border border-gray-200 shadow-md rounded-tr-3xl rounded-bl-3xl p-6 flex items-center hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
          onClick={openModal}
        >
          <div className="flex justify-center mr-4">
            <img
              className="w-16 h-16"
              src={bookingImage}
              alt="Select Destination"
            />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-semibold">Book a Trip</h3>
            <p className="text-gray-500 mt-2">
              Explore new places and find the perfect spot for your vacation.
            </p>
          </div>
        </div>
        {/* Card 3 */}
        <div
          className="bg-white border border-gray-200 shadow-md rounded-tr-3xl rounded-bl-3xl p-6 flex items-center hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
          onClick={openModal}
        >
          <div className="flex justify-center mr-4">
            <img
              className="w-16 h-16"
              src={flightImage}
              alt="Select Destination"
            />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-semibold">Take your Flight</h3>
            <p className="text-gray-500 mt-2">
              Explore new places and find the perfect spot for your vacation.
            </p>
          </div>
        </div>

        {/* Add other cards here as necessary */}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default TravelInfo;
