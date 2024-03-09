import { useEffect, useState } from "react";

import { DataTable } from "@/components/data-table/DataTable";
import { Data, columns } from "@/components/data-table/columns";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export default function HomePage() {
  const [data, setData] = useState<Data[]>([])

  useEffect(function () {
    async function fetchData() {
      try {
        const res = await fetch(`${baseUrl}/api/graph`);
        const graphData = await res.json();
        console.log(graphData);
        setData(graphData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="homepage">
      <h1>WBS Technical Test</h1>
      <DataTable columns={columns} data={data} />
    </main>
  );
}
