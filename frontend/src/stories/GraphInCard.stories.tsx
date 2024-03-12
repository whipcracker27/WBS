import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    Radar,
    RadarChart
} from "recharts";

export default {
  title: "Design System/Components/Graph Cards",
  component: Card,
  docs: {
    autodocs: false,
  },
};

export const Basic = () => {
  const data = [
    { code: "wacc", "2023-06-18": 21, "2023-06-19": 35, "2023-06-20": 10, "2023-06-22": 21, "2023-06-23": 35, "2023-06-24": 10 },
    {
      code: "factory_utilization",
      "2023-06-18": 22,
      "2023-06-19": 35,
      "2023-06-20": 35,
    },
    { code: "scores", "2023-06-18": -32, "2023-06-19": 35, "2023-06-20": 10 },
    {
      code: "employee_engagement",
      "2023-06-18": -14,
      "2023-06-19": 35,
      "2023-06-20": 10,
    },
    {
      code: "interest_coverage",
      "2023-06-18": -51,
      "2023-06-19": 35,
      "2023-06-20": 10,
    },
    {
      code: "marketing_spend_rev",
      "2023-06-18": 16,
      "2023-06-19": 35,
      "2023-06-20": 10,
    },
    {
      code: "e_car_sales",
      "2023-06-18": 7,
      "2023-06-19": 35,
      "2023-06-20": 10,
    },
    {
      code: "co2_penalty",
      "2023-06-18": -8,
      "2023-06-19": 35,
      "2023-06-20": 10,
    },
  ];

  return (
    <div className="flex flex-wrap items-stretch">
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Radar Graph</CardTitle>
        <CardDescription>Description.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadarChart height={400} width={300} outerRadius="100" data={data}>
          <PolarGrid />

          <PolarAngleAxis dataKey="code" />
          <PolarRadiusAxis />
          <Radar dataKey="2023-06-18" stroke="green" fill="green"fillOpacity={0.1}/>
          <Radar dataKey="2023-06-19" stroke="green" fill="green" fillOpacity={0.1} />
          <Radar dataKey="2023-06-20" stroke="green" fill="green" fillOpacity={0.1} />
          <Radar dataKey="2023-06-22" stroke="green" fill="green"fillOpacity={0.1}/>
          <Radar dataKey="2023-06-23" stroke="green" fill="green" fillOpacity={0.1} />
          <Radar dataKey="2023-06-24" stroke="green" fill="green" fillOpacity={0.1} />
        </RadarChart>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>

    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Radar Graph</CardTitle>
        <CardDescription>Description.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadarChart height={400} width={300} outerRadius="100" data={data}>
          <PolarGrid />

          <PolarAngleAxis dataKey="code" />
          <PolarRadiusAxis />
          <Radar dataKey="2023-06-18" stroke="green" fill="green"fillOpacity={0.1}/>
          <Radar dataKey="2023-06-19" stroke="green" fill="green" fillOpacity={0.1} />
          <Radar dataKey="2023-06-20" stroke="green" fill="green" fillOpacity={0.1} />
          <Radar dataKey="2023-06-22" stroke="green" fill="green"fillOpacity={0.1}/>
          <Radar dataKey="2023-06-23" stroke="green" fill="green" fillOpacity={0.1} />
          <Radar dataKey="2023-06-24" stroke="green" fill="green" fillOpacity={0.1} />
        </RadarChart>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>

    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Radar Graph</CardTitle>
        <CardDescription>Description.</CardDescription>
      </CardHeader>
      <CardContent>
        <RadarChart height={400} width={300} outerRadius="100" data={data}>
          <PolarGrid />

          <PolarAngleAxis dataKey="code" />
          <PolarRadiusAxis />
          <Radar dataKey="2023-06-18" stroke="green" fill="green"fillOpacity={0.1}/>
          <Radar dataKey="2023-06-19" stroke="green" fill="green" fillOpacity={0.1} />
          <Radar dataKey="2023-06-20" stroke="green" fill="green" fillOpacity={0.1} />
          <Radar dataKey="2023-06-22" stroke="green" fill="green"fillOpacity={0.1}/>
          <Radar dataKey="2023-06-23" stroke="green" fill="green" fillOpacity={0.1} />
          <Radar dataKey="2023-06-24" stroke="green" fill="green" fillOpacity={0.1} />
        </RadarChart>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>

    </div>
  );
};
