import destinationImage from "../../assets/destination-drawn-hand-svgrepo-com.svg";
import bookingImage from "../../assets/air-booking-ticket-svgrepo-com.svg";
import flightImage from "../../assets/flight-svgrepo-com.svg";

const TravelInfo = () => {
  return (
    <div className="my-16 px-5 lg:px-24 " id="info">
      <h2 className="text-center text-4xl font-bold">Your Travel Information</h2>
      <p className="text-center text-lg mt-4 mb-12 text-gray-500">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Card 1 - Select Destination */}
        <div className="bg-white border border-gray-200 shadow-md rounded-tr-3xl rounded-bl-3xl p-6 flex items-center hover:shadow-xl  transition duration-300">
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
              Lorem ipsum dolor amet and conseteto nonumy
            </p>
          </div>
        </div>

        {/* Card 2 - Book a Trip */}
        <div className="bg-white border border-gray-200 shadow-md rounded-tr-3xl rounded-bl-3xl p-6 flex items-center hover:shadow-xl  transition duration-300">
          <div className="flex justify-center mr-4">
            <img
              className="w-16 h-16"
              src={bookingImage}
              alt="Book a Trip"
            />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-semibold">Book a Trip</h3>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor amet and conseteto nonumy
            </p>
          </div>
        </div>

        {/* Card 3 - Take Your Flight */}
        <div className="bg-white border border-gray-200 shadow-md rounded-tr-3xl rounded-bl-3xl p-6 flex items-center hover:shadow-xl  transition duration-200">
          <div className="flex justify-center mr-4">
            <img
              className="w-16 h-16"
              src={flightImage}
              alt="Take Your Flight"
            />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-semibold">Take your Flight</h3>
            <p className="text-gray-500 mt-2">
              Lorem ipsum dolor amet and conseteto nonumy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelInfo;
