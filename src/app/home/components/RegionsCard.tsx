import React from 'react';

const RegionsCard = () => {
  // Statically declared value for number of vehicles detected till date
  const RegionsCovered = 3241;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Regions covered</div>
          <div className="mt-4 flex items-center">
            <div className="text-5xl font-bold text-gray-900">{RegionsCovered}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegionsCard;
