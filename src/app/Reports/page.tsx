import React from 'react';

const Report: React.FC = () => {
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
    </div>
  );
};

export default Report;
