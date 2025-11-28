import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TestScores } from '../types';

interface DiscChartProps {
  scores: TestScores;
}

const DiscChart: React.FC<DiscChartProps> = ({ scores }) => {
  const data = [
    { name: 'Dominância (D)', score: scores.D, fill: '#ef4444' },
    { name: 'Influência (I)', score: scores.I, fill: '#f97316' },
    { name: 'Estabilidade (S)', score: scores.S, fill: '#84cc16' },
    { name: 'Cautela (C)', score: scores.C, fill: '#3b82f6' },
  ];

  return (
    <div className="w-full h-64 md:h-80">
      <ResponsiveContainer>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" name="Pontuação" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DiscChart;