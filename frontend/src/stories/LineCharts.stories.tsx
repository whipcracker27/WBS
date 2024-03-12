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

const meta = {
  title: 'WBS/Lines',
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export type PageDataType = {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  };
  
  const pageData: PageDataType[] = [
    {
      name: 'Page A',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Page B',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Page C',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Page D',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Page E',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Page F',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Page G',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];
  

type Impressions = { name: number; cost: number; impression: number };

const impressionsData: Impressions[] = [
    { name: 1, cost: 4.11, impression: 100 },
    { name: 2, cost: 2.39, impression: 120 },
    { name: 3, cost: 1.37, impression: 150 },
    { name: 4, cost: 1.16, impression: 180 },
    { name: 5, cost: 2.29, impression: 200 },
    { name: 6, cost: 3, impression: 499 },
    { name: 7, cost: 0.53, impression: 50 },
    { name: 8, cost: 2.52, impression: 100 },
    { name: 9, cost: 1.79, impression: 200 },
    { name: 10, cost: 2.94, impression: 222 },
    { name: 11, cost: 4.3, impression: 210 },
    { name: 12, cost: 4.41, impression: 300 },
    { name: 13, cost: 2.1, impression: 50 },
    { name: 14, cost: 8, impression: 190 },
    { name: 15, cost: 0, impression: 300 },
    { name: 16, cost: 9, impression: 400 },
    { name: 17, cost: 3, impression: 200 },
    { name: 18, cost: 2, impression: 50 },
    { name: 19, cost: 3, impression: 100 },
    { name: 20, cost: 7, impression: 100 },
  ];

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
  

export const Simple = {
  render: () => {
    return (
    <div style={{ width: "80vw", height: "80vh" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={pageData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          <Line type="monotone" dataKey="amt" stroke="#82ca00" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  },
};

export const BiAxial = {
  render: () => {
    return (
    <div style={{ width: "80vw", height: "80vh" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={pageData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  },
};
export const WithCustomizedLabel = {
  render: () => {
    class CustomizedLabel extends PureComponent {
      render() {
        const { x, y, stroke, value } = this.props as any;

        return (
          <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
            {value}
          </text>
        );
      }
    }

    class CustomizedAxisTick extends PureComponent {
      render() {
        const { x, y, payload } = this.props as any;

        return (
          <g transform={`translate(${x},${y})`}>
            <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
              {payload.value}
            </text>
          </g>
        );
      }
    }

    return (
    <div style={{ width: "80vw", height: "80vh" }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={pageData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" label={<CustomizedLabel />} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    );
  },
};
export const HighlightAndZoom = {
  render: () => {
    const initialState = {
      data: impressionsData,
      left: 'dataMin',
      right: 'dataMax',
      refAreaLeft: '',
      refAreaRight: '',
      top: 'dataMax+1',
      bottom: 'dataMin-1',
      top2: 'dataMax+20',
      bottom2: 'dataMin-20',
      animation: true,
    };

    const getAxisYDomain = (
      from: string | undefined,
      to: string | undefined,
      ref: keyof Impressions,
      offset: number,
    ): (number | string)[] => {
      if (from && to) {
        const refData = impressionsData.slice(Number(from) - 1, Number(to));
        let [bottom, top] = [refData[0][ref], refData[0][ref]];
        refData.forEach(d => {
          if (d[ref] > top) top = d[ref];
          if (d[ref] < bottom) bottom = d[ref];
        });

        return [(bottom | 0) - offset, (top | 0) + offset];
      }
      return [initialState.bottom, initialState.top];
    };

    const [zoomGraph, setZoomGraph] = useState(initialState);

    const zoom = () => {
      let { refAreaLeft, refAreaRight } = zoomGraph;
      const { data } = zoomGraph;

      if (refAreaLeft === refAreaRight || refAreaRight === '') {
        setZoomGraph(prev => ({
          ...prev,
          refAreaLeft: '',
          refAreaRight: '',
        }));
        return;
      }

      // xAxis domain
      if (refAreaLeft && refAreaRight && refAreaLeft > refAreaRight)
        [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

      // yAxis domain
      const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, 'cost', 1);
      const [bottom2, top2] = getAxisYDomain(refAreaLeft, refAreaRight, 'impression', 50);

      setZoomGraph(
        prev =>
          ({
            ...prev,
            refAreaLeft: '',
            refAreaRight: '',
            data: data?.slice(),
            left: refAreaLeft,
            right: refAreaRight,
            bottom,
            top,
            bottom2,
            top2,
          } as any),
      );
    };

    const zoomOut = () => {
      const { data } = zoomGraph;
      setZoomGraph(prev => ({
        ...prev,
        data: data?.slice(),
        refAreaLeft: '',
        refAreaRight: '',
        left: 'dataMin',
        right: 'dataMax',
        top: 'dataMax+1',
        bottom: 'dataMin',
        top2: 'dataMax+50',
        bottom2: 'dataMin+50',
      }));
    };

    const { data, left, right, refAreaLeft, refAreaRight, top, bottom, top2, bottom2 } = zoomGraph;

    return (
      <div className="highlight-bar-charts" style={{ userSelect: 'none', width: '100%' }}>
        <button type="button" className="btn update" onClick={() => zoomOut()}>
          Zoom Out
        </button>

        <div style={{ width: "80vw", height: "80vh" }}>
        <ResponsiveContainer minHeight={500}>
          <LineChart
            width={800}
            height={400}
            data={data}
            onMouseDown={e => setZoomGraph(prev => ({ ...prev, refAreaLeft: e.activeLabel }))}
            onMouseMove={e => zoomGraph.refAreaLeft && setZoomGraph(prev => ({ ...prev, refAreaRight: e.activeLabel }))}
            onMouseUp={() => zoom()}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis allowDataOverflow dataKey="name" domain={left && right ? [left, right] : undefined} type="number" />
            <YAxis allowDataOverflow domain={[bottom, top]} type="number" yAxisId="1" />
            <YAxis orientation="right" allowDataOverflow domain={[bottom2, top2]} type="number" yAxisId="2" />
            <Tooltip />
            <Line yAxisId="1" type="natural" dataKey="cost" stroke="#8884d8" animationDuration={300} />
            <Line yAxisId="2" type="natural" dataKey="impression" stroke="#82ca9d" animationDuration={300} />

            {refAreaLeft && refAreaRight ? (
              <ReferenceArea yAxisId="1" x1={refAreaLeft} x2={refAreaRight} strokeOpacity={0.3} />
            ) : null}
          </LineChart>
        </ResponsiveContainer>
        </div>
      </div>
    );
  },
};

export const WithBrush: StoryObj = {
  render: () => {
    return (
    <div style={{ width: "80vw", height: "80vh" }}>
      <ResponsiveContainer>
        <LineChart width={0} height={0} data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Brush dataKey="name" startIndex={2} height={30} stroke="#8884d8" />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
    );
  },
};
