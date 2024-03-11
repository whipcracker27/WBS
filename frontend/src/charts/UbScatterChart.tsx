import { CartesianGrid, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { x: 90, y: 120, z: 100 },
  { x: 11, y: 10, z: 220 },
  { x: 30, y: 40, z: 40 },
  { x: 110, y: 150, z: 210 },
  { x: 30, y: 200, z: 310 },
  { x: 80, y: 10, z: 110 },
];

export default function UbScatterChart() {
    return (
      <div>
        <ScatterChart
          width={300}
          height={300}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="upper" unit="px" />
          <YAxis type="number" dataKey="y" name="lower" unit="in" />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Scatter name="Grid" data={data} fill="blue" />
        </ScatterChart>
      </div>
    );
}