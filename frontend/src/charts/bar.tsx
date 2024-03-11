import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
// import { ResponsiveBar } from "@nivo/bar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <Card className="w-full bg-white p-4 rounded-lg shadow-md">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold">ESG Risk</CardTitle>
          <InfoIcon className="text-gray-400" />
        </div>
        <CardDescription className="text-sm text-gray-600 mt-1">
          Company compared with its industry peers
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="my-4">
          <BarChart className="w-full h-[200px]" />
        </div>
        <div className="flex justify-between items-center text-xs font-medium text-gray-500">
          <span>Score</span>
          <span>Percentile Class</span>
        </div>
        <div className="flex justify-between items-center mt-2">
          <Badge className="text-orange-500 bg-orange-100" variant="default">
            Laggards
          </Badge>
          <Badge className="text-yellow-500 bg-yellow-100" variant="default">
            Below Avg.
          </Badge>
          <Badge className="bg-orange-200" variant="secondary">
            AVG
          </Badge>
          <Badge className="text-green-500 bg-green-100" variant="default">
            Above Avg.
          </Badge>
          <Badge className="text-blue-500 bg-blue-100" variant="default">
            Leaders
          </Badge>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-4">
        <div className="flex space-x-2 text-xs">
          <Badge className="bg-yellow-200" variant="default">
            Laggards
          </Badge>
          <Badge className="bg-yellow-200" variant="default">
            Below Avg.
          </Badge>
          <Badge className="bg-yellow-200" variant="default">
            Avg.
          </Badge>
          <Badge className="bg-yellow-200" variant="default">
            Above Avg.
          </Badge>
          <Badge className="bg-yellow-200" variant="default">
            Leaders
          </Badge>
          <Badge className="bg-yellow-200" variant="default">
            Peers
          </Badge>
        </div>
        <Button className="text-blue-500" variant="ghost">
          View more →
        </Button>
      </CardFooter>
    </Card>
  )
}

function BarChart(props) {
  return (
    <div {...props}>
      {/* <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      /> */}
    </div>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}
