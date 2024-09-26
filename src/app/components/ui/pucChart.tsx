// components/PUCChart.tsx
import { FC } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

// Define the prop types using an interface
interface PUCChartProps {
  validCount: number;
  invalidCount: number;
}

const PUCChart: FC<PUCChartProps> = ({ validCount, invalidCount }) => {
  // Calculate percentage of valid PUC vehicles
  const total = validCount + invalidCount;
  const validPercentage = ((validCount / total) * 100).toFixed(2);

  const data = {
    labels: ['Valid', 'Invalid'],
    datasets: [
      {
        label: 'PUC Status',
        data: [validCount, invalidCount],
        backgroundColor: ['#4CAF50', '#FF5252'],
        hoverBackgroundColor: ['#e5e5e5', '#e5e5e5'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '70%', // Controls the thickness of the doughnut ring
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide legend
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            const percentage = ((value / total) * 100).toFixed(2);
            return `${label}: ${value} (${percentage}%)`;
          },
        },
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '200px', height: '200px' }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: '20px', fontWeight: 'bold' }}>
          {validPercentage}%
        </span>
        <br />
        <span style={{ fontSize: '14px', color: '#666' }}>Valid</span>
      </div>
    </div>
  );
};

export default PUCChart;
