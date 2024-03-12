import { StoryObj } from '@storybook/react';
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  Tooltip
} from 'recharts';

export default {
  component: RadarChart,
  docs: {
    autodocs: false,
  },
};

export const ChangeOverTime: StoryObj = {
    render: () => {
      const data = [
        { code: 'wacc', "2023-06-18": 21, y: 35, z: 10 },
        { code: 'factory_utilization', "2023-06-18": 22, y: 45, z: 10 },
        { code: 'scores', "2023-06-18": -32, y: 45, z: 10 },
        { code: 'employee_engagement', "2023-06-18": -14, y: 45, z: 10 },
        { code: 'interest_coverage', "2023-06-18": -51, y: 45, z: 10 },
        { code: 'marketing_spend_rev', "2023-06-18": 16, y: 45, z: 10 },
        { code: 'e_car_sales', "2023-06-18": 7, y: 45, z: 10 },
        { code: 'co2_penalty', "2023-06-18": -8, y: 45, z: 10 },
    ];
 
    return (
        <RadarChart height={500} width={500} 
            outerRadius="80%" data={data}>
            <PolarGrid />
            <Legend />

            <PolarAngleAxis dataKey="code" />
            <PolarRadiusAxis />
            <Radar dataKey="2023-06-18" stroke="green" fill="green" fillOpacity={0.2} />
            <Radar dataKey="y" stroke="green" fill="green" fillOpacity={0.2} />
            <Radar dataKey="z" stroke="red" fill="red" fillOpacity={0.2} />
        </RadarChart>
    );
  },
};

export const ComparingTeams: StoryObj = {
  render: () => {
    const data = [
      { code: 'wacc', "2023-06-18": 21, "2023-06-19": 35, "2023-06-20": 10 },
      { code: 'factory_utilization', "2023-06-18": 22, "2023-06-19": 35, "2023-06-20": 35 },
      { code: 'scores', "2023-06-18": -32, "2023-06-19": 35, "2023-06-20": 10 },
      { code: 'employee_engagement', "2023-06-18": -14, "2023-06-19": 35, "2023-06-20": 10 },
      { code: 'interest_coverage', "2023-06-18": -51, "2023-06-19": 35, "2023-06-20": 10},
      { code: 'marketing_spend_rev', "2023-06-18": 16, "2023-06-19": 35, "2023-06-20": 10},
      { code: 'e_car_sales', "2023-06-18": 7, "2023-06-19": 35, "2023-06-20": 10 },
      { code: 'co2_penalty', "2023-06-18": -8, "2023-06-19": 35, "2023-06-20": 10 },
  ];

  return (
      <RadarChart height={500} width={500} 
          outerRadius="80%" data={data}>
          <PolarGrid />
          <Legend />

          <PolarAngleAxis dataKey="code" />
          <PolarRadiusAxis />
          <Radar dataKey="2023-06-18" stroke="green" fill="green" fillOpacity={0.2} />
          <Radar dataKey="y" stroke="green" fill="green" fillOpacity={0.2} />
          <Radar dataKey="z" stroke="red" fill="red" fillOpacity={0.2} />
      </RadarChart>
  );
},
};