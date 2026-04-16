import { useState } from "react";

// components
import { ProductInfo } from "./ProductInfo.tsx";

type Buttons = {
  innerText: string;
};

export function CategoryMeals() {
  const buttons: Buttons[] = [
    { innerText: "MEALS" },
    { innerText: "DRINKS" },
    { innerText: "DESSERTS" },
  ];
  const [buttonActive, setButtonActive] = useState<string>("MEALS");

  return (
    <div className="flex flex-col justify-center items-center">
      {/* buttons container */}
      <div
        className="flex gap-2 mt-6 overflow-x-auto pb-1 px-4"
        style={{ scrollbarWidth: "none" }}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        {buttons.map((button) => (
          <button
            key={button.innerText}
            onClick={() => setButtonActive(button.innerText)}
            className={`
              shrink-0 px-5 py-2 rounded-full text-sm font-medium tracking-wide
              border transition-all duration-200
              ${
                button.innerText === buttonActive
                  ? "bg-brown-bg text-white border-brown-bg"
                  : "bg-white text-gray-600 border-gray-200 active:bg-brown-bg active:text-white"
              }
            `}
          >
            {button.innerText}
          </button>
        ))}
      </div>

      {/* pending cards to render depending on buttons clicked */}
      <ProductInfo buttonActive={buttonActive}/>
    </div>
  );
}
