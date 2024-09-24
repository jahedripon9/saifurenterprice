import React from 'react';
import PackageDetailsIndia from './PackageDetailsIndia.jsx';

const IndiaModal = () => {
  return (
    <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_4').showModal()}> More Information</button>
<dialog id="my_modal_4" className="modal">
  <div className="modal-box w-full max-w-5xl">
    <h3 className="font-bold text-2xl">India</h3>
    <p className="py-0 font-semibold text-xl">8 Days 7 Nights Kalimpong- Darjeeling- Pelling- Gangtok</p>
    <div className="modal-action mt-0">
      <form method="dialog">
        <PackageDetailsIndia />
        <button className="btn mt-0 ">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>

  )
}

export default IndiaModal;