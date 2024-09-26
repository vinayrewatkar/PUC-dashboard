'use client';
import React from 'react';
import { NextPage } from 'next';
import PUCChart from '../components/ui/pucChart';
import VehicleBarChart from '../components/ui/vehicleBarChart';
import PollutionChart from '../components/ui/pollutionChart';
import MonthlyPollutionChart from '../components/ui/monthlyPollution';


const Report: React.FC = () => {
  const validPUC = 77; // Example value for valid PUC vehicles
  const invalidPUC = 23; // Example value for invalid PUC vehicles

  // Example data for vehicles across regions
  const regions = ['Region 1', 'Region 2', 'Region 3'];
  const carsData = [500, 800, 600]; // Number of cars in each region
  const bikesData = [1000, 500, 700]; // Number of bikes in each region
  const trucksData = [200, 300, 400]; // Number of trucks in each region
  // example of pollution chart of a day
  const pollutionData = [
    { time: '00:00', pollutionLevel: 12 },
    { time: '06:00', pollutionLevel: 15 },
    { time: '12:00', pollutionLevel: 30 },
    { time: '18:00', pollutionLevel: 25 },
    { time: '23:00', pollutionLevel: 10 },
  ];

 // Generate sample pollution data for the past month
const monthlyPollutionData = () => {
  const data = [];
  const today = new Date();

  for (let i = 30; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);

    const pollutionLevel = Math.floor(Math.random() * 100); // Random pollution level
    data.push({
      date: date.toISOString().split('T')[0], // Format as YYYY-MM-DD
      pollutionLevel,
    });
  }

  return data.reverse(); // Reverse to show oldest date first
};

const monthlyPollutionDataArray = monthlyPollutionData();
  return (
    <div className="flex flex-col p-4 md:p-8 lg:p-12">
      <div className="text-xl font-bold mb-4 text-center">Detected Vehicles</div>
      <div className="overflow-x-auto">
        <div className="py-2 inline-block min-w-full">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 font-medium text-gray-500 tracking-wider">
                    Owner Name
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 font-medium text-gray-500 tracking-wider">
                    Vehicle Type
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 font-medium text-gray-500 tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 font-medium text-gray-500 tracking-wider">
                    PUC Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Static data examples */}
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    John Doe
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    Car
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    New York
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <span className="px-2 py-1 rounded-full bg-green-200 text-green-800">
                      Valid
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    Jane Smith
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    Motorcycle
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    Los Angeles
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <span className="px-2 py-1 rounded-full bg-red-200 text-red-800">
                      Invalid
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-evenly items-start">
  <div className="">
    <h1 className="text-xl font-bold mb-4">PUC Vehicle Statistics</h1>
    <PUCChart validCount={validPUC} invalidCount={invalidPUC} />
  </div>
  
  <div className="">
    <h1 className="text-xl font-bold mb-4">Vehicle Statistics by Region</h1>
    <div className="w-[700px] h-[400px]"> {/* Adjust width and height */}
      <VehicleBarChart
        regions={regions}
        carsData={carsData}
        bikesData={bikesData}
        trucksData={trucksData}
      />
    </div>
   
  </div>
  <div className="p-4">
      <h1 className="text-3xl font-bold mb-8">Pollution Statistics</h1>
      <PollutionChart data={pollutionData} />
    </div>
    <div className="p-4">
    <h1 className="text-3xl font-bold mb-8">Monthly Pollution Statistics</h1>
    <MonthlyPollutionChart data={monthlyPollutionDataArray} chartType="bar" />
    </div>

</div>
    </div>
    
  );
};

export default Report;
