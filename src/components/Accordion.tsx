import { useState } from "react";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1 className="p-4">Title for Accordion</h1>
      <div className="bg-gray-200 border border-black rounded py-1">
        <button
          className="flex flex-start px-1 gap-4 w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="5" y="11" width="14" height="2" fill="currentColor" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="11" y="5" width="2" height="14" fill="currentColor" />
              <rect x="5" y="11" width="14" height="2" fill="currentColor" />
            </svg>
          )}
          <span>this is the title</span>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-200 ease-linear ${
            isOpen
              ? "block grid-rows-1 opacity-100"
              : "hidden grid-rows-0 opacity-0"
          }`}
        >
          <div className="overflow-hidden">This the content</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
