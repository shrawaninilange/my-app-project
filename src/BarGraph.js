import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './BarGraph.css'
const data = [
  { name: 'Jan', value: 10 },
  { name: 'Feb', value: 20 },
  { name: 'Mar', value: 15 },
  { name: 'Apr', value: 25 },
  { name: 'May', value: 30 },
  { name: 'Jun', value: 30 },
  { name: 'Jul', value: 50 },
  { name: 'Aug', value: 40 },
  { name: 'Sep', value: 35 },
  { name: 'Oct', value: 25 },
  { name: 'Nav', value: 10 },
  { name: 'Dec', value: 30 },
];

const BarGraph = () => {
  return (
    <BarChart className='bar'  width={700} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="gray" />
    </BarChart>
  );
};

export default BarGraph;
