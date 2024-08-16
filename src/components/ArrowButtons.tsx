import React from "react";

type ArrowButtonsProps = {
  setPosition: (position: string) => void;
};

const ArrowButtons: React.FC<ArrowButtonsProps> = ({ setPosition }) => {
  return (
    <div className="flex flex-wrap arrow-buttons">
      <div className="basis-full flex justify-center">
        <button
          className="arrow-button bg-green-btn hover:bg-green-btn-hover duration-300 text-white font-bold rounded mt-2 sm:mt-4"
          onClick={() => setPosition("top")}
        >
          Top
        </button>
      </div>
      <button
        className="arrow-button bg-green-btn hover:bg-green-btn-hover duration-300 text-white font-bold rounded mt-2 sm:mt-4 basis-2/6"
        onClick={() => setPosition("left")}
      >
        Left
      </button>
      <button
        className="arrow-button bg-green-btn hover:bg-green-btn-hover duration-300 text-white font-bold rounded mt-2 sm:mt-4 basis-2/6"
        onClick={() => setPosition("bottom")}
      >
        Bottom
      </button>
      <button
        className="arrow-button bg-green-btn hover:bg-green-btn-hover duration-300 text-white font-bold rounded mt-2 sm:mt-4 basis-2/6"
        onClick={() => setPosition("right")}
      >
        Right
      </button>
    </div>
  );
};

export default ArrowButtons;
