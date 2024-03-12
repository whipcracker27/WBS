// eslint-disable-next-line max-classes-per-file
import { StoryObj } from '@storybook/react';
import { PureComponent, useState } from 'react';

import {
  Brush,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ReferenceArea,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

export default {
  component: LineChart,
  docs: {
    autodocs: false,
  },
};

import { all } from './data/all';
import { teams } from './data/teams';

const generateRandomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;

const reformat = (data) => {
  return data.reduce((acc, entry) => {
    const { d, team, v } = entry;

    //create 'date' entry if it doesn't already exist
    if (!acc.some(item => item.d === d)) {acc.push({ d });}

    const dateIdx = acc.findIndex(entry => entry.d === d);
    acc[dateIdx][team] = v;
    return acc;
  }, []);
};

function combineCodeAndValue(data) {
  return data.reduce((result, item) => {
    const { d, team, code, v } = item;

    result[d] = result[d] || {};
    result[d][team] = result[d][team] || {};
    result[d][team][code] = v;

    return result;
  }, {});
};

const graph_data_test = all.filter(entry => entry.code === 'wacc');
console.log(combineCodeAndValue(graph_data_test));

export const Wacc = {
  render: () => {
    const graph_data_wacc = all.filter(entry => entry.code === 'wacc');
    const formattedData = reformat(graph_data_wacc);
    return (
      <div style={{ width: "80vw", height: "80vh" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={formattedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="d" />
            <YAxis type="number" domain={["auto", "auto"]} />
            <Tooltip />
            <Legend />

            {teams.slice(0, 20).map((team) => (
              <Line
                key={team}
                type="monotone"
                dataKey={team}
                stroke={generateRandomColor()}
                dot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
};

export const FactoryUtilization = {
  render: () => {
    const graph_data_wacc = all.filter(entry => entry.code === 'factory_utilization');
    const formattedData = reformat(graph_data_wacc);
    return (
      <div style={{ width: "80vw", height: "80vh" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={formattedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="d" />
            <YAxis type="number" domain={["auto", "auto"]} />
            <Tooltip />
            <Legend />

            {teams.slice(0, 20).map((team) => (
              <Line
                key={team}
                type="monotone"
                dataKey={team}
                stroke={generateRandomColor()}
                dot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
};
  
export const Scores = {
  render: () => {
    const graph_data_wacc = all.filter(entry => entry.code === 'scores');
    const formattedData = reformat(graph_data_wacc);
    return (
      <div style={{ width: "80vw", height: "80vh" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={formattedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="d" />
            <YAxis type="number" domain={["auto", "auto"]} />
            <Tooltip />
            <Legend />

            {teams.slice(0, 20).map((team) => (
              <Line
                key={team}
                type="monotone"
                dataKey={team}
                stroke={generateRandomColor()}
                dot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
};

export const EmployeeEngagement = {
  render: () => {
    const graph_data_wacc = all.filter(entry => entry.code === 'employee_engagement');
    const formattedData = reformat(graph_data_wacc);
    return (
      <div style={{ width: "80vw", height: "80vh" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={formattedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="d" />
            <YAxis type="number" domain={["auto", "auto"]} />
            <Tooltip />
            <Legend />

            {teams.slice(0, 20).map((team) => (
              <Line
                key={team}
                type="monotone"
                dataKey={team}
                stroke={generateRandomColor()}
                dot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
};

export const InterestCoverage = {
  render: () => {
    const graph_data_wacc = all.filter(entry => entry.code === 'interest_coverage');
    const formattedData = reformat(graph_data_wacc);
    return (
      <div style={{ width: "80vw", height: "80vh" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={formattedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="d" />
            <YAxis type="number" domain={["auto", "auto"]} />
            <Tooltip />
            <Legend />

            {teams.slice(0, 20).map((team) => (
              <Line
                key={team}
                type="monotone"
                dataKey={team}
                stroke={generateRandomColor()}
                dot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
};

export const MarketingSpendingRevenue = {
  render: () => {
    const graph_data_wacc = all.filter(entry => entry.code === 'marketing_spend_rev');
    const formattedData = reformat(graph_data_wacc);
    return (
      <div style={{ width: "80vw", height: "80vh" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={formattedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="d" />
            <YAxis type="number" domain={["auto", "auto"]} />
            <Tooltip />
            <Legend />

            {teams.slice(0, 20).map((team) => (
              <Line
                key={team}
                type="monotone"
                dataKey={team}
                stroke={generateRandomColor()}
                dot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
};

export const ECarSales = {
  render: () => {
    const graph_data_wacc = all.filter(entry => entry.code === 'e_cars_sales');
    const formattedData = reformat(graph_data_wacc);
    return (
      <div style={{ width: "80vw", height: "80vh" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={formattedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="d" />
            <YAxis type="number" domain={["auto", "auto"]} />
            <Tooltip />
            <Legend />

            {teams.slice(0, 20).map((team) => (
              <Line
                key={team}
                type="monotone"
                dataKey={team}
                stroke={generateRandomColor()}
                dot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
};

export const CO2Penalty = {
  render: () => {
    const graph_data_wacc = all.filter(entry => entry.code === 'co2_penalty');
    const formattedData = reformat(graph_data_wacc);
    return (
      <div style={{ width: "80vw", height: "80vh" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={formattedData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="d" />
            <YAxis type="number" domain={["auto", "auto"]} />
            <Tooltip />
            <Legend />

            {teams.slice(0, 20).map((team) => (
              <Line
                key={team}
                type="monotone"
                dataKey={team}
                stroke={generateRandomColor()}
                dot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  },
};
