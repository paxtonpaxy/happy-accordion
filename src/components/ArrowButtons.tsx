import React from "react";
import { useEffect } from "react";

type ArrowButtonsProps = {
  setPosition: (position: string) => void;
};

const ArrowButtons: React.FC<ArrowButtonsProps> = ({ setPosition }) => {
  useEffect(() => {
    const detectKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          setPosition("top");
          break;
        case "ArrowLeft":
          setPosition("left");
          break;
        case "ArrowDown":
          setPosition("center");
          break;
        case "ArrowRight":
          setPosition("right");
          break;
      }
    };

    document.addEventListener("keydown", detectKeyDown, true);
    return () => {
      document.removeEventListener("keydown", detectKeyDown, true);
    };
  }, [setPosition]);

  return (
    <div className="flex flex-wrap arrow-buttons">
      <div className="basis-full flex justify-center">
        <button
          className="arrow-button bg-green-500 duration-300 text-white font-bold rounded mt-2 sm:mt-4"
          onClick={() => setPosition("top")}
        >
          Top
        </button>
      </div>
      <div className="arrow-buttons-bottom">
        <button
          className="arrow-button bg-green-500 duration-300 text-white font-bold rounded mt-2 sm:mt-4"
          onClick={() => setPosition("left")}
        >
          Left
        </button>
        <button
          className="arrow-button bg-green-500 duration-300 text-white font-bold rounded mt-2 sm:mt-4"
          onClick={() => setPosition("center")}
        >
          Center
        </button>
        <button
          className="arrow-button bg-green-500 duration-300 text-white font-bold rounded mt-2 sm:mt-4"
          onClick={() => setPosition("right")}
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default ArrowButtons;
