import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./compoments/Card";
import ReactMarkdown from "react-markdown";
type Address = {
  id: number;
  street: string;
  streetName: string;
  buildingNumber: string;
  city: string;
  zipcode: string;
  country: string;
  country_code: string;
  latitude: number;
  longitude: number;
};

type Person = {
  id: number;
  First_Name: string;
  Last_Name: string;
  Info: string;
  Image: string;
};

function App() {
  const [data, setData] = useState<Person | undefined>();
  async function fetchData() {
    const apiRes = await fetch("http://localhost:8055/items/People");
    const json = await apiRes.json();
    const newData = json.data.map((person: Person) => ({
      ...person,
      Image: `http://localhost:8055/assets/${person.Image}`,
    }));
    setData(newData);
    console.log(newData);
  }
  useEffect(() => {
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
