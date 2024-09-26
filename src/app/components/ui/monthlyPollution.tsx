// components/PollutionChart.tsx

import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(LinearScale, PointElement, LineElement, BarElement, Filler, Tooltip, Legend);

interface PollutionData {
    date: string; // YYYY-MM-DD
    pollutionLevel: number;
  }
  
  interface MonthlyPollutionChartProps {
    data: PollutionData[]; // Use the correct type here
    chartType: 'bar' | 'line';
  }
  
  // Component Implementation
  const MonthlyPollutionChart: React.FC<MonthlyPollutionChartProps> = ({ data, chartType }) => {
    const chartData = {
      labels: data.map(entry => entry.date), // Use 'date' here
      datasets: [
        {
          label: 'Pollution Level (µg/m³)',
          data: data.map(entry => entry.pollutionLevel),
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  
    return (
      <div className="w-full h-[400px]">
        {chartType === 'bar' ? (
          <Bar data={chartData} options={{ responsive: true }} />
        ) : (
          <Line data={chartData} options={{ responsive: true }} />
        )}
      </div>
    );
  };
  export default MonthlyPollutionChart;