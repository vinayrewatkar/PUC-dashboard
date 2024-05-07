'use client';

import { Content } from "next/font/google";
import React, { useState } from "react";

const PucCheck = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [image, setImage] = useState(null);
  const [responseDetails, setResponseDetails] = useState();
  const [error, setError] = useState(null);

  const handleSubmitVehicleNumber = async (event) => {
    event.preventDefault();
    console.log('====================================');
    console.log('handling text');
    console.log('====================================');
    console.log("Vehicle Number: ", vehicleNumber);
    const formData=new FormData();
    formData.append("rc_number", vehicleNumber);
    try {
      const response = await fetch("http://127.0.0.1:5000/api/puc/puc_status", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rc_number : vehicleNumber
      }),
    });
      console.log('====================================');
      console.log("in handle numberr submit");
      console.log('====================================');
      if (!response.ok) {
        console.log(response)
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      console.log("Server Response:", data);
      setResponseDetails(data);
    } 
    
    catch (error) {
      console.error("Error number:", error);
      setError("Failed to process number. Please try again");
}
};


  const handleImageChange = (event) => {
    event.preventDefault();
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]); // Set the file itself, not the URL
    }
  };

  const handleSubmitImage = async (event) => {
    event.preventDefault();
    console.log('====================================');
    console.log("in handle image submit");
    console.log('====================================');
    if (!image) {
      alert("Please select an image to upload.");
      return;
    }
    const formData = new FormData();
    formData.append("file", image); // Append the file

  
    try {
      const response = await fetch("http://127.0.0.1:5000/api/puc/process_image", {
        method: 'POST',
        body: formData,
        // headers: {
        //   "Content-Type": "application/json",
        // },
      });
      console.log('====================================');
      console.log("in handle image submit");
      console.log('====================================');
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      console.log("Server Response:", data);
    setResponseDetails(data.response[0]);
    } 
    
    catch (error) {
      console.error("Error uploading image:", error);
      setError("Failed to process image. Please try again");
    }
  };

  return (
    <div>
    

<div className=" bg-[#F0F7EE] mb-10 mt-20 shadow-lg rounded-lg  sm: mr-3 sm: ml-3 md:max-w-lg md:mx-auto md:mb-10 md:mt-20 md:rounded-lg md:shadow-lg md:w-full md:flex md:justify-center">
  <div className="md: p-4">
    <div className=" md:h-40">
      <form onSubmit={handleSubmitVehicleNumber} className=" md: w-full md :max-w-sm mb-4">
        {/* Vehicle Number input */}
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
        {/* Submit button for Vehicle Number */}
        <div className=" flex items-center justify-center md:flex items-center justify-center ">
         
            <button
              className=" md:shadow bg-indigo-800 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              onSubmit={handleSubmitVehicleNumber}
            >
              Submit
            </button>
        
        </div>
      </form>
    </div>

    {/* Image input */}
    <div>
      <div  className=" md:h-48 ml-8">
      <form onSubmit={handleSubmitImage} className="w-full max-w-sm mb-4">
       <div className="flex flex-col items-center">
       <div className="m-2">
        <div className="m-2">
        <p>Choose an image:</p>
        </div>
          
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="border-2 border-indigo-800 py-4 pl-4 mx-8"
          />
        </div>
        {/* Submit button for Image */}
        <div className="md:flex items-center justify-center pt-4">
          <button
            type="submit"
            className="bg-indigo-800 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
            onSubmit={handleSubmitImage}
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

      {/* puc output */}
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
          {/* Check if vehicle_pucc_details exists before accessing its properties */}
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
 
      
    {/* <div className="mb-10 p-8 text-left border bg-[#F0F7EE] rounded mx-auto w-64">
          <h3 className="text-lg font-bold">Vehicle Details:</h3>
          <p>Message: zxedcrftvgybhunjim</p>
          <p>Model: ghj</p>
          <p>Owner: cfvgbhnj</p>
          <p>Registration No: xctfvgybhnu</p>
          <p>State: xctfvgybhnu</p>
          <h4 className="text-md font-bold mt-4">PUCC Details:</h4>
          <p>Centre No: xctfvgybhnu</p>
          <p>PUCC No: xctfvgybhnu</p>
          <p>Valid From: xctfvgybhnu</p>
          <p>Valid Until: xctfvgybhnu</p>
        </div> */}
       </div>
  
    
  );
};

export default PucCheck;

// import * as React from "react";
// import { useState } from "react";
// import Navlink from '../home/components/Navlink';
// const PucCheck = () => {
//   const [vehicleNumber, setVehicleNumber] = useState("");
//   const [image, setImage] = useState<string | null>(null);
//   // const [video, setVideo] = useState<string | null>(null);
//   const handleSubmitVehicleNumber = (event: React.FormEvent) => {
//     event.preventDefault();
//     // Handle the vehicle number submission here
//     console.log("Vehicle Number: ", vehicleNumber);
//   };
//   const handleSubmitImage = async (event: React.FormEvent) => {
//     event.preventDefault();
//     if (!image) {
//       alert("Please select an image to upload.");
//       return;
//     }
//   // const handleSubmitVideo = (event: React.FormEvent) => {
//   //   event.preventDefault();
//   //   // Handle the video submission here
//   //   console.log("Video: ", video);
//   // };
//   const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     if (event.target.files) {
//       setImage(URL.createObjectURL(event.target.files[0]));
//     }
//   };
//   // const handleVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   //   if (event.target.files) {
//   //     setVideo(URL.createObjectURL(event.target.files[0]));
//   //   }
//   // };
//   return (
//     <div>
//       <div className="flex flex-col items-center justify-center h-screen bg-white">
//         {/* Vehicle Number input */}
//         <form onSubmit={handleSubmitVehicleNumber} className="w-full max-w-sm mb-1">
//           <div className="md:flex md:items-center mb-6">
//             <div className="md:w-1/3">
//               <label className="block text-indigo-800 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="vehicle-number">
//                 Vehicle Number
//               </label>
//             </div>
//             <div className="md:w-2/3">
//               <input
//                 className="appearance-none border-2 border-indigo-800 rounded w-full py-2 px-4 text-indigo-800 leading-tight focus:outline-none focus:bg-white focus:border-indigo-800"
//                 id="vehicle-number"
//                 type="text"
//                 value={vehicleNumber}
//                 onChange={(e) => setVehicleNumber(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="md:flex md:items-center">
//             <div className="md:w-1/3">
//             </div>
//             <div className="md:w-2/3">
//               <button
//                 className="shadow bg-indigo-800 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
//                 type="submit"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </form>
//         <div className="pt-10 pb-3">
//         <form 
//         action="https://backend-puc.onrender.com"
//         method ="POST"
//         encType="multipart/form-data"
//         // onSubmit={handleSubmitVideo} 
//         className="w-full max-w-sm mb-8">

//         {/* Image input */}
//         <div className="pt-10 pb-3">
//         <p>choose a image</p>
//         </div>
//         <div className="w-72 max-w-sm border-2 border-indigo-800 p-4 mb-6">
//         <input
//                 className="bg-white appearance-none border-none rounded w-full py-2 px-4 text-indigo-800 leading-tight focus:outline-none focus:bg-white focus:border-indigo-800"
//                 id="vehicle-video"
//                 type="file"
//                 accept="image/*"
//                 // onChange={handleImageChange}
//               />              
//         </div>
//         {/* Video input */}
//         {/* <div className="pt-5 pb-3">
//         <p>choose a Video</p>
//         </div> */}
//         {/* <div className="w-72 max-w-sm border-2 border-indigo-800 p-4 mb-8">
//         <input
//                 className="bg-white appearance-none border-none rounded w-full py-2 px-4 text-indigo-800 leading-tight focus:outline-none focus:bg-white focus:border-indigo-800"
//                 id="vehicle-video"
//                 type="file"
//                 accept="video/*"
//                 onChange={handleVideoChange}
//               />              
//         </div> */}
//           <div className="md:flex md:items-center">
//             <div className="md:w-1/3"></div>
//             <div className="md:w-2/3">
//               <button
//                 className="shadow bg-indigo-800 hover:bg-indigo-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
//                 type="submit"
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </form>


//         </div>
//       </div>
//     </div>
//   );
// }

// export default PucCheck;