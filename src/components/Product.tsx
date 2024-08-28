import { useEffect, useState } from "react";
import spaceInvaders from "../assets/space-invaders.svg";

interface ProductProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: () => void;
}

const Product: React.FC<ProductProps> = ({
  title,
  description,
  onClick,
  isOpen,
}) => {
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
            ? "bg-white py-2 pr-2 pl-1 sm:hover:translate-x-1 transition-all mb-0.5 rounded-sm"
            : "bg-baby-blue py-2 pr-2 pl-1 mb-1 rounded-sm"
        }
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className="flex flex-start gap-4 w-full relative"
          onClick={onClick}
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
          <span className="text-base font-bold ml-10 text-left break-words">
            {title}
          </span>
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

export default Product;
