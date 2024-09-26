// components/PollutionChart.tsx

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(LinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

interface PollutionData {
  time: string; // Time of day (e.g., '08:00', '12:00', ...)
  pollutionLevel: number; // Pollution level at that time
}

interface PollutionChartProps {
  data: PollutionData[];
}

const PollutionChart: React.FC<PollutionChartProps> = ({ data }) => {
  // Prepare data for the chart
  const chartData = {
    labels: data.map((entry) => entry.time),
    datasets: [
      {
        label: 'Pollution Level (µg/m³)',
        data: data.map((entry) => entry.pollutionLevel),
        fill: true,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-4">Pollution Levels Throughout the Day</h2>
      <Line data={chartData} options={{ responsive: true }} />
    </div>
  );
};

export default PollutionChart;
