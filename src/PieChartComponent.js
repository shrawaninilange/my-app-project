import React from 'react';
import { PieChart, Pie, Tooltip, Legend, Cell } from 'recharts';
import './BarGraph.css'
const data = [
  { product: 'Customer Buy', customers: 45 },
  { product: 'Not Bought', customers: 30 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const CustomerProductPieChart = () => {
  return (
    <PieChart  width={400} height={400}>
      <Pie
      className='pie1'
        data={data}
        dataKey="customers"
        nameKey="product"
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
          const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
          const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
          const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
          return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'}>
              {`${data[index].product} (${data[index].customers} customers)`}
            </text>
          );
        }}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default CustomerProductPieChart;
