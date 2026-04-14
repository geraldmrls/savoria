export function ContentOnImage() {
  return (
    <>
      {/* content on image */}
      <div className="relative z-10 py-6 flex flex-col items-center justify-center gap-4 px-4 h-100">
        <h4 className="text-white text-center text-2xl font-semibold max-w-xl">
          An Experience Worth Savoring
        </h4>

        {/* line */}
        <div className="border-t border-yellow-border mx-auto w-1/4"></div>

        {/* description */}

        <p className="text-white max-w-[24rem] text-center text-sm leading-6">
          Where culinary artistry meets timeless elegance. Every dish tells a
          story, every moment creates a memory
        </p>

        {/* explore menu button */}

        <button className="text-white py-2.5 px-6 bg-brown-bg transition-colors duration-300 w-full max-w-48">
          EXPLORE MENU
        </button>

        {/* Virtual tour button*/}

        <button className="text-white py-2.5 px-6 border-yellow-border border-2 w-full max-w-48">
          VIRTUAL TOUR
        </button>

        {/* Square with dot animation */}

        <div className="h-10 w-5 border-2 rounded-full border-yellow-border flex flex-col items-center justify-center animate-pulse">
          <div className="w-1.5 h-1.5 bg-yellow-border rounded-full"></div>
        </div>
      </div>
    </>
  );
}
