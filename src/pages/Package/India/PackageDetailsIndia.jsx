import React from "react";
import india from "../../../assets/india.jpg";

const PackageDetailsIndia = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-5 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={india}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-4 mt-2 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                Tour Packages
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                India
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center  mx-auto">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">5 Reviews</span>
                </span>
              </div>
              <h2 className="text-sm title-font text-gray-500 tracking-widest font-bold">
                Package inclusions:
              </h2>
              <p className="leading-relaxed">
                <ul className="list-outside list-disc text-justify">
                  <li>
                    01 Night accommodation in Kalimpong at Hotel Mountain View
                    or Hotel Tres or similar.
                  </li>
                  <li>
                    02 Nights accommodation in Darjeeling at Hotel Yuma or Hotel
                    Fairmont or similar.
                  </li>
                  <li>
                    02 Nights accommodation in Pelling at Sikkim Tourist Centre
                    or similar.
                  </li>
                  <li>
                  
                    02 Nights accommodation in Gangtok at The Ridge Hotel or
                    similar.
                  </li>
                  <li> Daily Breakfast & Meet & Assist.</li>
                  <li>All transfers and sightseeing as per itinerary.</li>
                </ul>
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  BDT 37,000 / Per Person
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackageDetailsIndia;
