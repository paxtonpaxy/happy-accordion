import { useState, useEffect } from "react";
import spaceInvaders from "../assets/space-invaders.svg";

interface ProductListProps {
  title: string;
  description: string;
}

const Product: React.FC<ProductListProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [readyToIvade, setReadyToIvade] = useState(false);
  const [enterTimeoutId, setEnterTimeoutId] = useState<number | null>(null);

  const handleMouseEnter = () => {
    if (enterTimeoutId) clearTimeout(enterTimeoutId);
    const id = window.setTimeout(() => {
      setReadyToIvade(!readyToIvade);
    }, 5000);
    setEnterTimeoutId(id);
  };

  useEffect(() => {
    return () => {
      if (enterTimeoutId) clearTimeout(enterTimeoutId);
    };
  }, [enterTimeoutId]);

  const handleMouseLeave = () => {
    if (enterTimeoutId) clearTimeout(enterTimeoutId);
    setReadyToIvade(false);
  };

  return (
    <>
      <div
        className={
          !isOpen
            ? "bg-white py-2 pr-2 pl-1 animate-moveRight"
            : "bg-baby-blue py-2 pr-2 pl-1 border-white border-b-2 sm:border-b-2"
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="flex flex-start gap-4 w-full relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={spaceInvaders}
            alt="product"
            width={20}
            height={20}
            loading="lazy"
            className={
              readyToIvade && isOpen
                ? "block absolute right-8 top-0 animate-invadeIconAnimation"
                : "hidden"
            }
          />
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute animate-fadeIn"
            >
              <rect x="5" y="11" width="14" height="2" fill="currentColor" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute delay-200"
            >
              <rect x="11" y="5" width="2" height="14" fill="currentColor" />
              <rect x="5" y="11" width="14" height="2" fill="currentColor" />
            </svg>
          )}
          <span className="text-base font-bold ml-10 ">{title}</span>
        </button>
        <div
          className={`grid overflow-hidden ${
            isOpen
              ? "block grid-rows-1 opacity-100"
              : "hidden grid-rows-0 opacity-0"
          }`}
        >
          <div className="overflow-hidden text-base font-normal ml-10 animate-appearFromTop">
            {description}
          </div>
        </div>
      </div>
    </>
  );
};

interface Product {
  title: string;
  description: string;
  total: number;
}

interface DataState {
  products: Product[];
  total: number;
}

const Accordion = () => {
  const [data, setData] = useState<DataState>({ products: [], total: 0 });
  const [loadedProducts, setLoadedProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const URL: string = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL);
      const jsonData = await response.json();
      setData({ products: jsonData.products, total: jsonData.total });
      setLoadedProducts(jsonData.products.slice(0, 4));
    };
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setLoadedProducts(data.products);
      setShowAll(true);
      setIsLoading(false);
    }, 1000);
  };

  const handleShowLess = () => {
    setLoadedProducts(data.products.slice(0, 4));
    setShowAll(false);
  };

  return (
    <>
      {loadedProducts.map((product, index) => (
        <Product
          key={index}
          title={product.title}
          description={product.description}
        />
      ))}
      {!showAll && (
        <button
          className="bg-green-btn hover:bg-green-btn-hover text-white font-bold py-2 px-4 rounded mt-2 sm:mt-4"
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
          className="bg-green-btn hover:bg-green-btn-hover text-white font-bold py-2 px-4 rounded mt-2 sm:mt-4"
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
