import React from 'react';

const PieChart = () => {
  // Statically declared values for the data
  const data = [
    { label: 'Invalid PUC', value: 30, color: '#F87171' }, // bg-red-500
    { label: 'Expiring PUC', value: 20, color: '#60A5FA' }, // bg-blue-500
    { label: 'Valid PUC', value: 50, color: '#34D399' }, // bg-green-500
  ];

  // Calculate total value
  const total = data.reduce((acc, item) => acc + item.value, 0);

  // Calculate starting angle for each segment
  let currentAngle = -90;

  return (
    <div className="flex items-center justify-center mx-auto">
      <div className="w-48 h-48 relative">
        <svg viewBox="0 0 24 24" className="w-full h-full absolute left-0 top-0">
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const angle = (percentage / 100) * 360;
            const largeArcFlag = percentage > 50 ? 1 : 0;
            const x1 = 12 + Math.cos((currentAngle * Math.PI) / 180) * 10;
            const y1 = 12 + Math.sin((currentAngle * Math.PI) / 180) * 10;
            const x2 = 12 + Math.cos(((currentAngle + angle) * Math.PI) / 180) * 10;
            const y2 = 12 + Math.sin(((currentAngle + angle) * Math.PI) / 180) * 10;

            currentAngle += angle;

            return (
              <path
                key={index}
                fill={item.color}
                d={`M12,12 L${x1},${y1} A10,10 0 ${largeArcFlag},1 ${x2},${y2} Z`}
              />
            );
          })}
        </svg>
      </div>
      <div className="ml-8">
        {data.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <div style={{backgroundColor: item.color}} className="w-4 h-4 mr-2 rounded-full"></div>
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
