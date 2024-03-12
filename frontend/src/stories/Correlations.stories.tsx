// eslint-disable-next-line max-classes-per-file
import {
  CartesianGrid,
  Label,
  Legend,
  LineChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';

import { grouped } from './data/grouped';

export default {
  component: LineChart,
  docs: {
    autodocs: false,
  },
};

const filterDataByKeys = (data, keys) => {
  return data.map(item => {
    const filteredItem = {};
    filteredItem["x"] = item[keys[0]];
    filteredItem["y"] = item[keys[1]];
    return filteredItem;
  });
};

export const WACC_v_Scores = {
  args: {
    activeShape: { fill: 'red' },
    activeIndex: undefined,
  },

  render: args => {
    const codes = ["wacc", "scores"];
    let data = filterDataByKeys(grouped, codes);
    
    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name={codes[0]} domain={["auto", "auto"]} >
            <Label value={codes[0]}  offset={0} position="insideBottom"/>
          </XAxis>
          <YAxis type="number" dataKey="y" name={codes[1]} domain={["auto", "auto"]}
            label={{ value: codes[1], angle:-90, position: 'insideLeft'}} />

          <Tooltip cursor={{ strokeDasharray: '3 3' }} />      
          <Scatter
            activeShape={args.activeShape}
            activeIndex={args.activeIndex}
            name="Scatter By Codes"
            data={data}
            fill="#8884d8"
          />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};

export const Factory_Utilization_v_Scores = {
  args: {
    activeShape: { fill: 'red' },
    activeIndex: undefined,
  },

  render: args => {
    const codes = ["factory_utilization", "scores"];
    const data = filterDataByKeys(grouped, codes);

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name={codes[0]} domain={["auto", "auto"]} >
            <Label value={codes[0]}  offset={0} position="insideBottom"/>
          </XAxis>
          <YAxis type="number" dataKey="y" name={codes[1]} domain={["auto", "auto"]}
            label={{ value: codes[1], angle:-90, position: 'insideLeft'}} />

          <Tooltip cursor={{ strokeDasharray: '3 3' }} />      
          <Scatter
            activeShape={args.activeShape}
            activeIndex={args.activeIndex}
            name="Scatter By Codes"
            data={data}
            fill="#8884d8"
          />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};

export const Employee_Engagement_v_Scores = {
  args: {
    activeShape: { fill: 'red' },
    activeIndex: undefined,
  },

  render: args => {
    const codes = ["employee_engagement", "scores"];
    const data = filterDataByKeys(grouped, codes);

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name={codes[0]} domain={["auto", "auto"]} >
            <Label value={codes[0]}  offset={0} position="insideBottom"/>
          </XAxis>
          <YAxis type="number" dataKey="y" name={codes[1]} domain={["auto", "auto"]}
            label={{ value: codes[1], angle:-90, position: 'insideLeft'}} />

          <Tooltip cursor={{ strokeDasharray: '3 3' }} />      
          <Scatter
            activeShape={args.activeShape}
            activeIndex={args.activeIndex}
            name="Scatter By Codes"
            data={data}
            fill="#8884d8"
          />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};

export const Interest_Coverage_v_Scores = {
  args: {
    activeShape: { fill: 'red' },
    activeIndex: undefined,
  },

  render: args => {
    const codes = ["interest_coverage", "scores"];
    const data = filterDataByKeys(grouped, codes);

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name={codes[0]} domain={["auto", "auto"]} >
            <Label value={codes[0]}  offset={0} position="insideBottom"/>
          </XAxis>
          <YAxis type="number" dataKey="y" name={codes[1]} domain={["auto", "auto"]}
            label={{ value: codes[1], angle:-90, position: 'insideLeft'}} />

          <Tooltip cursor={{ strokeDasharray: '3 3' }} />      
          <Scatter
            activeShape={args.activeShape}
            activeIndex={args.activeIndex}
            name="Scatter By Codes"
            data={data}
            fill="#8884d8"
          />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};

export const CO2_Penalty_v_Scores = {
  args: {
    activeShape: { fill: 'red' },
    activeIndex: undefined,
  },

  render: args => {
    const codes = ["co2_penalty", "scores"];
    const data = filterDataByKeys(grouped, codes);

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name={codes[0]} domain={["auto", "auto"]} >
            <Label value={codes[0]}  offset={0} position="insideBottom"/>
          </XAxis>
          <YAxis type="number" dataKey="y" name={codes[1]} domain={["auto", "auto"]}
            label={{ value: codes[1], angle:-90, position: 'insideLeft'}} />

          <Tooltip cursor={{ strokeDasharray: '3 3' }} />      
          <Scatter
            activeShape={args.activeShape}
            activeIndex={args.activeIndex}
            name="Scatter By Codes"
            data={data}
            fill="#8884d8"
          />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};

export const E_Cars_Sales_v_Scores = {
  args: {
    activeShape: { fill: 'red' },
    activeIndex: undefined,
  },

  render: args => {
    const codes = ["e_cars_sales", "scores"];
    const data = filterDataByKeys(grouped, codes);

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name={codes[0]} domain={["auto", "auto"]} >
            <Label value={codes[0]}  offset={0} position="insideBottom"/>
          </XAxis>
          <YAxis type="number" dataKey="y" name={codes[1]} domain={["auto", "auto"]}
            label={{ value: codes[1], angle:-90, position: 'insideLeft'}} />

          <Tooltip cursor={{ strokeDasharray: '3 3' }} />      
          <Scatter
            activeShape={args.activeShape}
            activeIndex={args.activeIndex}
            name="Scatter By Codes"
            data={data}
            fill="#8884d8"
          />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};

export const Marketing_Spend_Rev_v_Scores = {
  args: {
    activeShape: { fill: 'red' },
    activeIndex: undefined,
  },

  render: args => {
    const codes = ["marketing_spend_rev", "scores"];
    const data = filterDataByKeys(grouped, codes);

    return (
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name={codes[0]} domain={["auto", "auto"]} >
            <Label value={codes[0]}  offset={0} position="insideBottom"/>
          </XAxis>
          <YAxis type="number" dataKey="y" name={codes[1]} domain={["auto", "auto"]}
            label={{ value: codes[1], angle:-90, position: 'insideLeft'}} />

          <Tooltip cursor={{ strokeDasharray: '3 3' }} />      
          <Scatter
            activeShape={args.activeShape}
            activeIndex={args.activeIndex}
            name="Scatter By Codes"
            data={data}
            fill="#8884d8"
          />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};

