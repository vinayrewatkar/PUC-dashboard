'use client'
import React, { useState } from 'react';


const GreenCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full sm:max-w-sm mx-auto bg-gradient-to-r from-white to-green-500 rounded-3xl p-4 shadow-lg text-black">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="bg-green-400 rounded-full p-2">
            
          </div>
          <p className="ml-3">Seems the PUC is outdated!</p>
        </div>
        <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <img src={isOpen ? "arrow-up.png" : "down-arrow.png"} alt="dropdown" width="20" height="20" />
        </div>
      </div>
      <h1 className="text-xl font-bold">MH40 PK147</h1>
      <p>Super Splendor</p>
      <div style={{maxHeight: isOpen ? "1000px" : "0", transition: "max-height 1.1s ease-in-out"}} className="overflow-hidden">
        <div className="mt-4">
          <p>Registration No.: ILKPK14703</p>
          <p>Vehicle Model: Super Splendor</p>
          <p>Vehicle Description: Bike</p>
          <p>Vehicle Type: Two Wheeler</p>
          <p>Contact: +91 9741053920</p>
          <p>Valid Upto: 31 Feb 2025</p>
          <p>PUC Valid: 31 Nov 2023</p>
        </div>
      </div>
    </div>
  );
};

export default GreenCard;
