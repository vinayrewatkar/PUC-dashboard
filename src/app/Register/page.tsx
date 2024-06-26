'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for Next.js 13 app directory

const RegisterPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);
  const router = useRouter(); // Initialize the router

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    console.log('Registering as:', isAdmin ? 'Admin' : 'User');

    const RegisterType = isAdmin ? 'admin' : 'user';
    const apiUrl = 'http://127.0.0.1:5000/api/users/signup';

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          username: formData.username,
          email: formData.email,
          password: formData.password,
          confirm_password: formData.confirmPassword,
          user_type: isAdmin ? 'admin' : 'user'
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Registration successful:', result);
        localStorage.setItem('token', result.token); // Save the token
        if (isAdmin) {
          router.push('/dashboard'); // Redirect admin to PUC Check page
        } else {
          router.push('/dashboard'); // Redirect user to Dashboard
        }// Redirect to login page
      } else {
        console.error('Registration failed:', result);
        alert(result.message);
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="sm:grid grid-row-2 md:grid-cols-2 md:gap-6 md:min-h-screen md:bg-white p-10">
      <div className="flex justify-center py-6 md:w-1/2 md:mr-10 md:items-center">
        <img src="RegisterImage.avif" alt="description" />
      </div>
      <div className="bg-gray-100 shadow-md rounded-lg p-9 max-w-lg w-full sm:p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Register</h2>
        <div className="mb-4 flex items-center justify-center">
          <button
            className={`mr-2 px-4 py-2 rounded-md ${
              isAdmin ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
            }`}
            onClick={() => setIsAdmin(false)}
          >
            User
          </button>
          <button
            className={`px-4 py-2 rounded-md ${
              isAdmin ? 'bg-gray-300 text-gray-600' : 'bg-blue-600 text-white'
            }`}
            onClick={() => setIsAdmin(true)}
          >
            Admin
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block font-bold mb-2 text-black">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold mb-2 text-black">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />

          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold mb-2 text-black">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block font-bold mb-2 text-black">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          {/* <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="isAdmin"
              name="isAdmin"
              checked={isAdmin}
              onChange={() => setIsAdmin(!isAdmin)}
              className="mr-2 focus:ring-blue-400 h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
            <label htmlFor="isAdmin" className="text-blue-600">Register as Admin</label>
          </div> */}
          <div className="mb-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Register
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="border-t border-gray-300 flex-grow mr-2"></div>
            <p className="text-gray-500">or</p>
            <div className="border-t border-gray-300 flex-grow ml-2"></div>
          </div>
          <div className="mt-4">
            <button
              type="button"
              className="w-full py-2 px-4 bg-red-600 text-white font-bold rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Sign in with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;