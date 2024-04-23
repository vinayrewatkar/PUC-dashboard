import React, { useState } from 'react';

export function Navlink() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="py-2 px-4 flex justify-between items-center relative">
      {/* Added px-4 for horizontal padding */}
      <img src="logo.svg" alt="Logo" className="h-8" />
      {/* Set height to h-8 for a smaller logo */}

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          type="button"
          className="text-gray-500 hover:text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.278a.75.75 0 01-1.06 1.06l-4.47-4.47-4.47 4.47a.75.75 0 01-1.06-1.06l4.47-4.47-4.47-4.47a.75.75 0 011.06-1.06l4.47 4.47 4.47-4.47a.75.75 0 111.06 1.06l-4.47 4.47 4.47 4.47z"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h16a1 1 0 100-2H4z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Sidebar Menu */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-md transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.278a.75.75 0 01-1.06 1.06l-4.47-4.47-4.47 4.47a.75.75 0 01-1.06-1.06l4.47-4.47-4.47-4.47a.75.75 0 011.06-1.06l4.47 4.47 4.47-4.47a.75.75 0 111.06 1.06l-4.47 4.47 4.47 4.47z"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="space-y-2 p-4">
          <li className="bg-gradient-to-r from-indigo-700 to-blue-600 px-6 py-2">
            <a
              href="#"
              className="text-white font-bold hover:text-gray-300 transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li className="bg-gradient-to-r from-indigo-900 to-blue-600 py-3 px-6">
            <a
              href="#"
              className="text-white font-bold hover:text-gray-300 transition-colors duration-300"
            >
              PUC check
            </a>
          </li>
          <li className="bg-gradient-to-r from-indigo-900 to-blue-600 py-3 px-6">
            <a
              href="/Reports"
              className="text-white font-bold hover:text-gray-300 transition-colors duration-300"
            >
              Reports
            </a>
          </li>
          
          <li className="bg-gradient-to-r from-indigo-900 to-blue-600 py-3 px-6">
            <a
              href="/login"
              className="text-white font-bold hover:text-gray-300 transition-colors duration-300"
            >
              Login
            </a>
          </li>
        </ul>
      </div>

      {/* Navigation Links for Large Screens */}
      <ul className="hidden md:flex md:space-x-2">
        <li className="bg-gradient-to-r from-indigo-900 to-blue-600 px-6 py-2">
          <a
            href="#"
            className="text-white font-bold hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </a>
        </li>
        <li className="bg-gradient-to-r from-indigo-900 to-blue-600 py-3 px-6">
          <a
            href="#"
            className="text-white font-bold hover:text-gray-300 transition-colors duration-300"
          >
            PUC check
          </a>
        </li>
        <li className="bg-gradient-to-r from-indigo-900 to-blue-600 py-3 px-6">
          <a
            href="/Reports"
            className="text-white font-bold hover:text-gray-300 transition-colors duration-300"
          >
            Reports
          </a>
        </li>
        <li className="bg-gradient-to-r from-indigo-900 to-blue-600 py-3 px-6">
          <a
            href="#"
            className="text-white font-bold hover:text-gray-300 transition-colors duration-300"
          >
            Register
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navlink;