import { useState, useEffect } from "react";

const URL = "https://dummyjson.com/products";

interface AccordionProps {
  title: string;
  description: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className={
          !isOpen
            ? "bg-white py-2 pr-2 pl-1"
            : "bg-baby-blue py-2 pr-2 pl-1 border-white border-b-1 sm:border-b-2"
        }
      >
        <button
          className="flex flex-start gap-4 w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute"
            >
              <rect x="5" y="11" width="14" height="2" fill="currentColor" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="absolute"
            >
              <rect x="11" y="5" width="2" height="14" fill="currentColor" />
              <rect x="5" y="11" width="14" height="2" fill="currentColor" />
            </svg>
          )}
          <span className="text-base font-bold ml-10">{title}</span>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-200 ease-in-out ${
            isOpen
              ? "block grid-rows-1 opacity-100"
              : "hidden grid-rows-0 opacity-0"
          }`}
        >
          <div className="overflow-hidden text-base font-normal ml-10">
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

const ProductList = () => {
  const [data, setData] = useState<DataState>({ products: [], total: 0 });
  const [loadedProducts, setLoadedProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(URL); // Ensure URL is defined
      const jsonData = await response.json();
      setData({ products: jsonData.products, total: jsonData.total });
      setLoadedProducts(jsonData.products.slice(0, 4));
      console.log(jsonData);
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
        <Accordion
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
        <>
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
          {/* <div className="absolute bottom-0">Total Products: {data.total}</div> */}
        </>
      )}
    </>
  );
};

export default ProductList;
