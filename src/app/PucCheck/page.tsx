'use client';
import * as React from "react";
import { useState } from "react";
import Navlink from '../home/components/Navlink';

const PucCheck = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [video, setVideo] = useState<string | null>(null);

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

  const handleSubmitVideo = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle the video submission here
    console.log("Video: ", video);
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setVideo(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-white">
        {/* Vehicle Number input */}
        <form onSubmit={handleSubmitVehicleNumber} className="w-full max-w-sm mb-8">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-indigo-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="vehicle-number">
                Vehicle Number
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="appearance-none border-2 border-indigo-800 rounded w-full py-2 px-4 text-indigo-800 leading-tight focus:outline-none focus:bg-white focus:border-indigo-800"
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
                className="shadow bg-indigo-800 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        {/* Image input */}
        <div className="w-full max-w-sm border-2 border-dashed border-indigo-800 p-4 mb-8">
          <p className="text-center text-indigo-800">Drag and drop image here</p>
        </div>
        <form onSubmit={handleSubmitImage} className="w-full max-w-sm mb-8">
          {/* Image input */}
        </form>
        {/* Video input */}
        <div className="w-full max-w-sm border-2 border-dashed border-indigo-800 p-4 mb-8">
          <p className="text-center text-indigo-800">Drag and drop video here</p>
        </div>
        <form onSubmit={handleSubmitVideo} className="w-full max-w-sm mb-8">
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label className="block text-indigo-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="vehicle-video">
                Or choose video file
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-white appearance-none border-none rounded w-full py-2 px-4 text-indigo-800 leading-tight focus:outline-none focus:bg-white focus:border-indigo-800"
                id="vehicle-video"
                type="file"
                accept="video/*"
                onChange={handleVideoChange}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-indigo-800 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
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
