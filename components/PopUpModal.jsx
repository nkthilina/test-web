import React from "react";

function PopUpModal({ visible, onClose, name, deleteFunction }) {
    const handleOnClose = (e) => {
        if (e.target.id === "container")    
        onClose();
    }

  if (!visible) return null;
  return (
    <div id="container"
    onClick={handleOnClose} className="fixed inset-0 z-50  bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" />
        <div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none    bg-opacity-30 backdrop-blur-sm" >
          <div className="absolute bg-black opacity-80 inset-0 z-0" />
          <div className="w-full  max-w-xl p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
            <div >
              <div className="text-center p-5 flex-auto justify-center">
                <h2 className="text-xl font-bold py-2 ">Do you want to delete the contact "{name}"</h2>
              </div>
              <div className="p-3  mt-2 text-center space-x-4 md:block">
                <button onClick={deleteFunction} className="mb-2 md:mb-0 bg-primary border border-primary px-5 py-2 text-sm  shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-primary">Yes</button>
                <button onClick={onClose} className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>

    </div>
  );
}

export default PopUpModal;
