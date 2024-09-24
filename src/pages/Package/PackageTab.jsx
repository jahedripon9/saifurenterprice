import india from '../../assets/india.jpg'
import srilanka from '../../assets/srilanka.jpg'
import IndiaModal from './India/IndiaModal.jsx'
import SrilankaModal from './Srilanka/SrilankaModal.jsx'



const PackageTab = () => {
  return (
   <div className=" container mx-auto my-10">
    <h2 className="text-center text-4xl font-bold">Tour Packages</h2>
      <p className="text-center text-lg mt-4 mb-12 text-gray-500">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      </p>
     <div className="flex flex-wrap justify-center gap-3 ">
     <div className="card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={india}
      alt="travel" />
  </figure>
  <div className="card-body">
    <h2 className="card-title justify-center text-2xl">India</h2> <hr />
    <p className="text-center font-semibold">8 Days 7 Nights Kalimpong- Darjeeling- Pelling- Gangtok</p>
    <div className="card-actions justify-center">
      <button className="  "> <IndiaModal></IndiaModal></button>
    </div>
  </div>
</div>

<div className=" card bg-base-100 w-96 shadow-xl">
  <figure>
    <img
      src={srilanka}
      alt="travel" />
  </figure>
  <div className="flex card-body">
    <h2 className="card-title justify-center text-2xl">India</h2> <hr />
    <p className="text-center font-semibold">India 6 Days 5 Nights Kandy- Bentota- Colombo</p>
    <div className="card-actions justify-center">
      <button className="  "><SrilankaModal></SrilankaModal></button>
    </div>
  </div>
</div>



   </div>
     </div>

  )
}

export default PackageTab