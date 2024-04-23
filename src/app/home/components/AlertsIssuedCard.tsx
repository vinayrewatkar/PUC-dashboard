import React from 'react';

const AlertsIssuedCard = () => {
  // Statically declared value for number of vehicles detected till date
  const numberOfAlertsIssued = 4321;

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Total Alerts Issued</div>
          <div className="mt-4 flex items-center">
            <div className="text-5xl font-bold text-gray-900">{numberOfAlertsIssued}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlertsIssuedCard;
