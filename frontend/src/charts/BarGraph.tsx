import { useState } from "react";
import { Bar, BarChart, Label, Legend, Tooltip, XAxis, YAxis } from "recharts";

const BarGraph = ({
  title,
  dataKey,
  oxLabel,
  oyLabel,
  values,
  yLimit,
  labels
}) => {
  const [barProps, setBarProps] = useState(
    labels.reduce(
      (a, { key }) => {
        a[key] = false;
        return a;
      },
      { hover: null }
    )
  );

  const handleLegendMouseEnter = (e) => {
    if (!barProps[e.dataKey]) {
      setBarProps({ ...barProps, hover: e.dataKey });
    }
  };

  const handleLegendMouseLeave = (e) => {
    setBarProps({ ...barProps, hover: null });
  };

  const selectBar = (e) => {
    setBarProps({
      ...barProps,
      [e.dataKey]: !barProps[e.dataKey],
      hover: null
    });
  };

  return (
    <div>
      <h3>{title}</h3>
      <BarChart
        width={600}
        height={300}
        data={values}
        margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey={dataKey}>
          <Label value={oxLabel} position="insideBottomRight" dy={10} dx={20} />
        </XAxis>
        <YAxis type="number" domain={yLimit}>
          <Label
            value={oyLabel}
            position="left"
            angle={-90}
            dy={-20}
            dx={-10}
          />
        </YAxis>
        <Tooltip />
        <Legend
          onClick={selectBar}
          onMouseOver={handleLegendMouseEnter}
          onMouseOut={handleLegendMouseLeave}
        />
        {labels.map((label, index) => (
          <Bar
            key={index}
            dataKey={label.key}
            fill={label.color}
            stackId={dataKey}
            hide={barProps[label.key] === true}
            fillOpacity={Number(
              barProps.hover === label.key || !barProps.hover ? 1 : 0.6
            )}
          />
        ))}
      </BarChart>
    </div>
  );
};

export default BarGraph;