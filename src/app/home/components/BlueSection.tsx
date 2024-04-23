import React from 'react';

const BlueSection = () => {
  return (
    <div className="bg-blue-500 text-black font-semibold p-2 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <p className="hidden md:block">See reports</p>
      </div>
      <div className="flex items-center space-x-4">
        {/* Use <a> tag for navigation to /login */}
        <a href="/login">
          <button type="button" title="Account" className="">
            👤 Login
          </button>
        </a>
      </div>
    </div>
  )
}

export default BlueSection;
