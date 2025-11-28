
import React from 'react';
// Fix: Added Tooltip to imports
import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { TestScores } from '../types';

interface RadarChartComponentProps {
  scores: TestScores;
  labels: Record<string, string>;
}

const RadarChartComponent: React.FC<RadarChartComponentProps> = ({ scores, labels }) => {
  const data = Object.keys(scores).map(key => ({
    subject: labels[key] || key,
    A: scores[key],
    fullMark: 5, // Assuming a max score, e.g., for Likert scales
  }));

  return (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 5]} />
          <Radar name="Pontuação" dataKey="A" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
          <Legend />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadarChartComponent;
