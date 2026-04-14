export function ContentOnImage() {
  return (
    <>
      {/* content on image */}
      <div className="relative py-6 flex flex-col items-center gap-4 mt-16 px-4">
        <h4 className="text-white text-center text-2xl font-semibold max-w-xl">
          An Experience Worth Savoring
        </h4>

        {/* line */}
        <div className="border-t border-y-amber-200 mx-auto w-1/4"></div>

        {/* description */}

        <p className="text-white max-w-[24rem] text-center text-sm leading-6">
          Where culinary artistry meets timeless elegance. Every dish tells a
          story, every moment creates a memory
        </p>

        {/* explore menu button */}

        <button className="text-white py-2.5 px-6 bg-buttons-bg transition-colors duration-300 rounded-full w-full max-w-[12rem]">
          EXPLORE MENU
        </button>

        {/* Virtual tour button*/}

        <button className="text-white py-2.5 px-6 border-amber-200 border-2 rounded-full w-full max-w-[12rem]">
          VIRTUAL TOUR
        </button>

        {/* Square with dot animation */}

        <div className="h-10 w-5 border-2 rounded-full border-amber-200 flex flex-col items-center justify-center animate-pulse">
          <div className="w-1.5 h-1.5 bg-amber-200 rounded-full"></div>
        </div>
      </div>
    </>
  );
}
