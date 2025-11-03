import { useEffect, useState } from "react";
import "./App.css";
import Card from "./compoments/Card";
import DirectusAPI from "./compoments/DirectusAPI";
import type { Person } from "./compoments/Person";
function App() {
  const [data, setData] = useState<Person[]>([]);

  useEffect(() => {
    async function fetchData() {
      const api = new DirectusAPI();
      const data = (await api.fetchData()) as Person[];
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div className=" h-screen bg-gray-700">
      <div className="bg-gray-700 font-mono">
        <div className="flex justify-end text-4xl font-bold text-white mb-5 pt-2 pr-2">
          Htl Dornbirn
        </div>
        {Array.isArray(data) && data.length > 0 && (
          <div className="grid grid-cols-2  sm:grid-cols-3 lg:grid-cols-5 gap-3 p-1">
            {data.map((item, i) => (
              <div key={i}>
                <Card data={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
