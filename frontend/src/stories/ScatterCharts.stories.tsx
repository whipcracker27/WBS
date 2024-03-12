// eslint-disable-next-line max-classes-per-file
import {
    CartesianGrid,
    Cell,
    LabelList,
    Legend,
    LineChart,
    ResponsiveContainer,
    Scatter,
    ScatterChart,
    Tooltip,
    XAxis,
    YAxis,
    ZAxis,
} from 'recharts';

export default {
  component: LineChart,
  docs: {
    autodocs: false,
  },
};

export const Simple = {
  args: {
    activeShape: { fill: 'red' },
    activeIndex: undefined,
  },
  render: args => {
    const data = [
      { x: 100, y: 200, z: 200 },
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];

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
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter
            activeShape={args.activeShape}
            activeIndex={args.activeIndex}
            name="A school"
            data={data}
            fill="#8884d8"
          />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};

export const ThreeDim = {
  render: () => {
    const data01 = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];
    const data02 = [
      { x: 200, y: 260, z: 240 },
      { x: 240, y: 290, z: 220 },
      { x: 190, y: 290, z: 250 },
      { x: 198, y: 250, z: 210 },
      { x: 180, y: 280, z: 260 },
      { x: 210, y: 220, z: 230 },
    ];

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
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis type="number" dataKey="y" name="weight" unit="kg" />
          <ZAxis type="number" dataKey="z" range={[60, 400]} name="score" unit="km" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Scatter name="A school" data={data01} fill="#8884d8" shape="star" />
          <Scatter name="B school" data={data02} fill="#82ca9d" shape="triangle" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};

export const MultipleYAxes = {
  render: () => {
    const data01 = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];
    const data02 = [
      { x: 300, y: 300, z: 200 },
      { x: 400, y: 500, z: 260 },
      { x: 200, y: 700, z: 400 },
      { x: 340, y: 350, z: 280 },
      { x: 560, y: 500, z: 500 },
      { x: 230, y: 780, z: 200 },
      { x: 500, y: 400, z: 200 },
      { x: 300, y: 500, z: 260 },
      { x: 240, y: 300, z: 400 },
      { x: 320, y: 550, z: 280 },
      { x: 500, y: 400, z: 500 },
      { x: 420, y: 280, z: 200 },
    ];

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
          <XAxis type="number" dataKey="x" name="stature" unit="cm" />
          <YAxis yAxisId="left" type="number" dataKey="y" name="weight" unit="kg" stroke="#8884d8" />
          <YAxis
            yAxisId="right"
            type="number"
            dataKey="y"
            name="weight"
            unit="kg"
            orientation="right"
            stroke="#82ca9d"
          />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter yAxisId="left" name="A school" data={data01} fill="#8884d8" />
          <Scatter yAxisId="right" name="A school" data={data02} fill="#82ca9d" />
        </ScatterChart>
      </ResponsiveContainer>
    );
  },
};
export const WithCells = {
  render: () => {
    const data = [
      { x: 100, y: 200, z: 200 },
      { x: 120, y: 100, z: 260 },
      { x: 170, y: 300, z: 400 },
      { x: 140, y: 250, z: 280 },
      { x: 150, y: 400, z: 500 },
      { x: 110, y: 280, z: 200 },
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    return (
      <ScatterChart
        width={400}
        height={400}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid />
        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Scatter name="A school" data={data} fill="#8884d8">
          {data.map(({ x }, index) => (
            <Cell key={`cell-${x}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Scatter>
      </ScatterChart>
    );
  },
};