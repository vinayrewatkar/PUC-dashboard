// components/VehicleBarChart.tsx
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

// Register the required Chart.js components
Chart.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

interface VehicleBarChartProps {
  regions: string[];
  carsData: number[];
  bikesData: number[];
  trucksData: number[];
}

const VehicleBarChart: FC<VehicleBarChartProps> = ({ regions, carsData, bikesData, trucksData, width = 40, height = 40 } ) => {
  const data = {
    labels: regions, // Regions to display on the x-axis
    datasets: [
      {
        label: 'Cars',
        data: carsData,
        backgroundColor: '#4CAF50', // Green for cars
      },
      {
        label: 'Bikes',
        data: bikesData,
        backgroundColor: '#FF5252', // Red for bikes
      },
      {
        label: 'Trucks',
        data: trucksData,
        backgroundColor: '#FF9800', // Orange for trucks
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {},
    },
  };

  return <Bar data={data} options={options} width={width} height={height}  />;
};

export default VehicleBarChart;
