'use client';
import * as React from "react";
import { useState } from "react";
import Navlink from '../home/components/Navlink';

const PucCheck = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleSubmitVehicleNumber = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the vehicle number submission here
    console.log("Vehicle Number: ", vehicleNumber);
  };

  const handleSubmitImage = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the image submission here
    console.log("Image: ", image);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div>
      
      {/* Rest of your code */}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
      <form onSubmit={handleSubmitVehicleNumber} className="w-full max-w-sm mb-8">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="vehicle-number">
              Vehicle Number
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="vehicle-number"
              type="text"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="w-full max-w-sm border-2 border-dashed border-gray-500 p-4">
        <p className="text-center text-gray-500">Drag and drop image here</p>
      </div>
      <form onSubmit={handleSubmitImage} className="w-full max-w-sm mt-8">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="vehicle-image">
              Or choose file
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="vehicle-image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>

    </div>
  );
}

export default PucCheck;