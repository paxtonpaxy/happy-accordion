import Accordion from "./components/Accordion";
import { useEffect } from "react";

function App() {
  const URL = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      console.log(response.json());
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="grid w-full h-screen bg-gradient-to-r from-yellow-300 to-white-900">
      <div className="p-6">
        <Accordion></Accordion>
      </div>
    </div>
  );
}

export default App;
