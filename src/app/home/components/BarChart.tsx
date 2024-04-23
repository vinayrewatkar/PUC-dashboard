import React from 'react';

const BarChart = () => {
  // Statically declared values for the data
  const data = [
    { label: 'Maharashtra', value: 150 },
    { label: 'Rajasthan', value: 200 },
    { label: 'Gujrat', value: 180 },
    { label: 'Madhya Pradesh', value: 220 },
    { label: 'Delhi', value: 250 },
    { label: 'Karnataka', value: 210 },
  ];

  // Find the maximum value in the data array
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="max-w-md mx-auto">
      {data.map((item, index) => (
        <div key={index} className="flex items-center mb-4">
          <div className="w-20">{item.label}</div>
          <div className="bg-blue-500 h-8 flex-grow mx-2 relative">
            <div className="absolute bottom-0 left-0 bg-blue-700 h-full" style={{ width: `${(item.value / maxValue) * 100}%` }}></div>
          </div>
          <div>{item.value}</div>
        </div>
      ))}
    </div>
  );
};

export default BarChart;
