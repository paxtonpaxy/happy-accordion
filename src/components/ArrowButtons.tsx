const ArrowButtons = () => {
  return (
    <div className="flex flex-wrap max-w-md">
      <div className="basis-full flex justify-center">
        <button className="bg-green-btn hover:bg-green-btn-hover duration-300 text-white font-bold py-2 px-4 rounded mt-2 sm:mt-4 min-w-[130px]">
          Top
        </button>
      </div>
      <button className="bg-green-btn hover:bg-green-btn-hover duration-300 text-white font-bold py-2 px-4 rounded mt-2 sm:mt-4 min-w-[130px] basis-2/6">
        Left
      </button>
      <button className="bg-green-btn hover:bg-green-btn-hover duration-300 text-white font-bold py-2 px-4 rounded mt-2 sm:mt-4 min-w-[130px] basis-2/6">
        Bottom
      </button>
      <button className="bg-green-btn hover:bg-green-btn-hover duration-300 text-white font-bold py-2 px-4 rounded mt-2 sm:mt-4 min-w-[130px] basis-2/6">
        Right
      </button>
    </div>
  );
};

export default ArrowButtons;
