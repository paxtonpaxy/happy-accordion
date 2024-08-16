import { useState } from "react";
import Accordion from "./components/Accordion";
import ArrowButtons from "./components/ArrowButtons";

function App() {
  const [mainTitle, setMainTitle] = useState("");
  const [position, setPosition] = useState("top");

  return (
    <div className="w-full h-screen bg-white">
      <h1 className="text-xl font-bold mb-2 sm:mb-6 mt-2 sm:mt-6 text-center">
        {mainTitle || "Accordion Title"}
      </h1>
      <Accordion setMainTitle={setMainTitle} position={position} />
      <ArrowButtons setPosition={setPosition} />
    </div>
  );
}

export default App;
