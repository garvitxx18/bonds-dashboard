import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const barData = [
  { name: 'Matured', value: 12 },
  { name: 'Soon to be Matured', value: 20 },
  { name: 'Immature', value: 15 },
  { name: 'Global', value: 18 },
];

const CustomBarChart = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg h-64 sm:h-96">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={barData} margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
          <XAxis dataKey="name" stroke="#4B5563" />
          <YAxis stroke="#4B5563" />
          <Tooltip contentStyle={{ backgroundColor: '#F9FAFB', border: 'none' }} />
          <Bar dataKey="value" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
