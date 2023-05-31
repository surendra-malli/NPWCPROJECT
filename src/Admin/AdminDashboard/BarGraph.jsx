import React from 'react';
import { Bar } from 'react-chartjs-2';

const BarGraph = () => {
  // Data for the chart
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Bar Graph Example',
        data: [12, 19, 3, 5, 2, 3], // Values for the bars
        backgroundColor: 'rgba(54, 162, 235, 0.6)', // Color for the bars
      },
    ],
  };

  // Options for the chart
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Bar Graph Example</h2>
      {/* <Bar data={data} options={options} /> */}
    </div>
  );
};

export default BarGraph;