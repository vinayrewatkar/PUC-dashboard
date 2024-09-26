'use client';

import React, { useState } from "react";
import Loader from "../components/Loader";

const PucCheck = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [image, setImage] = useState(null);
  const [responseDetails, setResponseDetails] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to show alert if PUC is invalid
  const showInvalidPucNotification = () => {
    alert("The PUC for this vehicle is invalid or not found!");
  };

  const handleSubmitVehicleNumber = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData();
    formData.append("rc_number", vehicleNumber);

    try {
      const response = await fetch("http://127.0.0.1:5000/api/puc/puc_status", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rc_number: vehicleNumber
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      setResponseDetails(data);

      // Check if PUCC details are present, if not show notification
      if (!data.vehicle_pucc_details || !data.vehicle_pucc_details.pucc_no) {
        showInvalidPucNotification();
      }

    } catch (error) {
      console.error("Error:", error);
      setError("Failed to process vehicle number. Please try again");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitImage = async (event) => {
    event.preventDefault();
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);

    try {
      setLoading(true);
      const response = await fetch("http://127.0.0.1:5000/api/puc/process_image", {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      setResponseDetails(data.response[0]);

      // Check if PUCC details are present, if not show notification
      if (!data.response[0].vehicle_pucc_details || !data.response[0].vehicle_pucc_details.pucc_no) {
        showInvalidPucNotification();
      }

    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Failed to process image. Please try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Form for vehicle number */}
      <div className=" bg-[#F0F7EE] mb-10 mt-20 shadow-lg rounded-lg  sm:mr-3 sm:ml-3 md:max-w-lg md:mx-auto md:mb-10 md:mt-20 md:rounded-lg md:shadow-lg md:w-full md:flex md:justify-center">
        <div className="md:p-4">
          <div className="md:h-40">
            <form onSubmit={handleSubmitVehicleNumber} className="md:w-full md:max-w-sm mb-4">
              <div className="md:flex md:items-center mb-6 mt-6">
                <div className="md:w-1/3 mt-4">
                  <label className="block text-indigo-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="vehicle-number">
                    Vehicle Number
                  </label>
                </div>
                <div>
                  <input
                    className="appearance-none border-2 border-indigo-800 rounded w-full py-2 px-4 text-indigo-800 leading-tight focus:outline-none focus:bg-white focus:border-indigo-800"
                    id="vehicle-number"
                    type="text"
                    value={vehicleNumber}
                    onChange={(e) => setVehicleNumber(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button
                  className="shadow bg-indigo-800 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Form for image upload */}
          <div>
            <div className="md:h-48 ml-8">
              <form onSubmit={handleSubmitImage} className="w-full max-w-sm mb-4">
                <div className="flex flex-col items-center">
                  <div className="m-2">
                    <p>Choose an image:</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        if (event.target.files && event.target.files[0]) {
                          setImage(event.target.files[0]);
                        }
                      }}
                      className="border-2 border-indigo-800 py-4 pl-4 mx-8"
                    />
                  </div>
                  <div className="md:flex items-center justify-center pt-4">
                    <button
                      type="submit"
                      className="bg-indigo-800 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Submit Image
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Show loader while fetching */}
      {loading && <Loader />}

      {/* Show response details */}
      {responseDetails && (
        <div className="flex justify-center">
          <div className="mb-10 p-8 text-left border bg-[#F0F7EE] rounded mx-auto w-64">
            <h3 className="text-lg font-bold">Vehicle Details:</h3>
            <p>Message: {responseDetails?.message}</p>
            <p>Model: {responseDetails?.model}</p>
            <p>Owner: {responseDetails?.owner_name}</p>
            <p>Registration No: {responseDetails?.reg_no}</p>
            <p>State: {responseDetails?.state}</p>
            <h4 className="text-md font-bold mt-4">PUCC Details:</h4>
            {responseDetails.vehicle_pucc_details ? (
              <>
                <p>Centre No: {responseDetails.vehicle_pucc_details.pucc_centreno}</p>
                <p>PUCC No: {responseDetails.vehicle_pucc_details.pucc_no}</p>
                <p>Valid From: {responseDetails.vehicle_pucc_details.pucc_from}</p>
                <p>Valid Until: {responseDetails.vehicle_pucc_details.pucc_upto}</p>
              </>
            ) : (
              <p>No PUCC details available</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PucCheck;
