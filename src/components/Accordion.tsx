import React, { useState, useEffect } from "react";
import useFetchData from "../helpers/useFetchData";
import Product from "./Product";

interface AccordionProps {
  setMainTitle: (title: string) => void;
  position: string;
}

const Accordion: React.FC<AccordionProps> = ({ setMainTitle, position }) => {
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);

  const data = useFetchData();
  const finalData = showAll ? data : data.slice(0, 4);
  const mainTitle = "Use the button to move the Accordion";

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setShowAll(true);
      setIsLoading(false);
    }, 1000); // To display some delay for loading
  };

  const handleOpenAndClose = (index: number) => {
    openItemIndex === index ? setOpenItemIndex(null) : setOpenItemIndex(index);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  useEffect(() => {
    setMainTitle(mainTitle);
  }, [mainTitle, setMainTitle]);

  return (
    <div className={`accordion-wrapper accordion-wrapper-${position}`}>
      <div className={`p-4 accordion`}>
        {finalData.map((product, index) => (
          <Product
            key={index}
            title={product.title}
            description={product.description}
            isOpen={openItemIndex === index}
            onClick={() => handleOpenAndClose(index)}
          />
        ))}
        {!showAll && (
          <button
            className="bg-green-500 hover:bg-green-600 duration-300 text-white font-bold py-2 px-4 rounded mt-2 sm:mt-4 min-w-[130px]"
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
            className="bg-green-500 hover:bg-green-600 duration-300 text-white font-bold py-2 px-4 rounded mt-2 sm:mt-4 min-w-[130px]"
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
      </div>
    </div>
  );
};

export default Accordion;
