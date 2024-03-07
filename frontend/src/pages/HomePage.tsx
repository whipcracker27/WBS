import { useEffect, useState } from "react";

const baseUrl = import.meta.env.VITE_API_BASE_URL;


export default function HomePage() {
  const [data, setData] = useState([]);

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
      <h1>Homepage of my Dummy Product Page</h1>
      <div className="products__list">
        {data.map((item, index) => {
          return <div key={index}>{item.team}</div>;
        })}
      </div>
    </main>
  );
}
