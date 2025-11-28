import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TestScores } from '../types';

interface CategoryBarChartProps {
  scores: TestScores;
  labels: Record<string, string>;
  maxValue?: number;
}

const CategoryBarChart: React.FC<CategoryBarChartProps> = ({ scores, labels, maxValue = 5 }) => {
  const colors = ['#3b82f6', '#10b981', '#f97316', '#ef4444', '#8b5cf6', '#ec4899'];
  
  const data = Object.keys(scores).map((key, index) => ({
    name: labels[key] || key,
    score: scores[key],
    fill: colors[index % colors.length],
  }));

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
          <YAxis domain={[0, maxValue]} />
          <Tooltip formatter={(value) => typeof value === 'number' ? value.toFixed(2) : value} />
          <Legend />
          <Bar dataKey="score" name="Pontuação" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryBarChart;