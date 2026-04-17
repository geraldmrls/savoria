import { motion } from "motion/react";
import { cn } from "../../utils/cn";

// icons
import RightArrowIcon from "../../assets/right-arrow-icon.svg?react";

export function ContentOnImage() {
  const browserWidth = window.outerWidth;
  const lineWidth = `${browserWidth >= 1024 ? "26%" : "25%"}`;

  return (
    <>
      {/* content on image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={cn(
          // mobile
          "relative z-10 py-6 flex flex-col items-center justify-center gap-4 px-4 h-115 content-image-fonts",

          // desktop

          "lg:h-160 lg:w-180",
        )}
      >
        <h4
          className={cn(
            // mobile
            "text-white text-center text-2xl sm:text-2xl font-semibold max-w-xl",

            // desktop

            "lg:text-7xl lg:max-w-full lg:font-normal",
          )}
        >
          An Experience Worth Savoring
        </h4>

        {/* line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: lineWidth }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="border-t mt-2 border-yellow-border mx-auto w-1/4 lg:border-t-2 lg:w-50 lg:mt-4"
        ></motion.div>

        {/* description */}
        <p className="text-white mt-2 max-w-74 sm:max-w-[24rem] text-center sm:text-base leading-6 lg:text-xl lg:text-amber-50 lg:mt-4 lg:max-w-140">
          Where culinary artistry meets timeless elegance. Every dish tells a
          story, every moment creates a memory
        </p>

        {/* buttons container */}
        <div className="flex flex-col justify-center items-center mt-2 gap-3 lg:flex-row lg:items-stretch lg:w-125 lg:justify-between lg:mt-6 lg:gap-4">
          <button
            className={cn(
              "text-white bg-brown-bg transition-all duration-300 w-full flex items-center justify-center gap-2",
              // Use identical padding
              "py-3 px-6 lg:px-8 lg:py-4 lg:w-full lg:cursor-pointer group lg:transition-all duration-75"
            )}
          >
            EXPLORE MENU
            <RightArrowIcon className="hidden lg:inline lg:w-4.5 lg:h-4.5 lg:stroke-white lg:fill-white group-hover:translate-x-1 duration-300 transition-transform"/>
          </button>

          <button
            className={cn(
              "text-white border-yellow-border border-2 w-full flex items-center justify-center",
              // Use identical padding (account for the 2px border)
              "py-2.5 px-6 lg:px-8 lg:py-3.5 lg:w-full lg:cursor-pointer lg:hover:bg-amber-50/20 duration-300 transition-colors",
            )}
          >
            VIRTUAL TOUR
          </button>
        </div>

        {/* Square with dot animation */}

        <div className="mt-2 h-10 w-5 border-2 rounded-full border-yellow-border flex flex-col items-center justify-center animate-pulse lg:w-7 lg:h-11 lg:mt-4">
          <div className="w-1.5 h-1.5 bg-yellow-border rounded-full"></div>
        </div>
      </motion.div>
    </>
  );
}
