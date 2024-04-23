import React from 'react';

const BlueSection = () => {
  return (
    <div className="bg-blue-700 text-white p-2 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <p className="hidden md:block">Home</p>
        <p className="hidden md:block">Shop/Programs</p>
        <p className="hidden md:block">News/Articles</p>
      </div>
      <div className="flex items-center space-x-4">
        <button type="button" title="Search" className="hidden sm:block">
          🔍
        </button> {/* Replace with search icon */}
        <button type="button" title="Account" className="">
          👤
        </button> {/* Replace with account icon */}
        <button type="button" title="Cart" className="">
          🛒
        </button> {/* Replace with cart icon */}
      </div>
    </div>
  )
}

export default BlueSection;
