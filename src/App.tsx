import { useState } from "react";
import Accordion from "./components/Accordion";

function App() {
  const [mainTitle, setMainTitle] = useState("");

  return (
    <div className="grid grid-cols-12 w-full h-screen bg-white">
      <div className="col-start-2 col-span-10 pt-8 pb-6 px-2 sm:col-start-3 sm:col-span-8 sm:pt-16 sm:px-0">
        <h1 className="text-xl font-bold mb-2 sm:mb-6">
          {mainTitle || "Accordion Title"}
        </h1>
        <Accordion setMainTitle={setMainTitle} />
      </div>
    </div>
  );
}

export default App;
