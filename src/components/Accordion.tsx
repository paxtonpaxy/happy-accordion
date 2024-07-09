import React, { useState } from "react";
import useFetchData from "../helpers/useFetchData";
import Product from "./Product";

interface AccordionProps {
  setMainTitle: (title: string) => void;
}

const Accordion: React.FC<AccordionProps> = ({ setMainTitle }) => {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const data = useFetchData();
  const finalData = showAll ? data : data.slice(0, 4);
  // Testing with title to pass the value to the parent component
  const mainTitle = "Veelgestelde vragen";

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowAll(true);
      setIsLoading(false);
    }, 1000); // To display some dialay for loading
  };

  const handleOpenAndclose = (index: number) => {
    openItemIndex === index ? setOpenItemIndex(null) : setOpenItemIndex(index);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  React.useEffect(() => {
    setMainTitle(mainTitle);
  }, [mainTitle, setMainTitle]);

  return (
    <>
      {finalData.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          description={product.description}
          isOpen={openItemIndex === index}
          onClick={() => handleOpenAndclose(index)}
        />
      ))}
      {!showAll && (
        <button
          className="bg-green-btn hover:bg-green-btn-hover duration-300 text-white font-bold py-2 px-4 rounded mt-2 sm:mt-4 min-w-[130px]"
          onClick={handleLoadMore}
        >
          {isLoading ? (
            "Loading..."
          ) : (
            <div className="flex gap-1 items-center">
              Load more
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8 4l8 8-8 8"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </button>
      )}
      {showAll && (
        <button
          className="bg-green-btn hover:bg-green-btn-hover duration-300 text-white font-bold py-2 px-4 rounded mt-2 sm:mt-4 min-w-[130px]"
          onClick={handleShowLess}
        >
          <div className="flex gap-0.5 items-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M16 4l-8 8 8 8"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Show less
          </div>
        </button>
      )}
    </>
  );
};

export default Accordion;
