import { motion } from "motion/react";

// data for the first 3 dishes
import { homeDishes } from "../../data/homeDishes.ts";

// hooks
import { cn } from "../../utils/cn.ts";

export function CulinaryExcellence() {
  return (
    <div className="bg-primary-bg pt-8">
      {/* title */}
      <div className="pb-8 flex flex-col items-center gap-1 text-2xl sm:text-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-semibold text-center"
        >
          Culinary Excellence
        </motion.h2>

        {/* line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "25%" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="border border-brown-bg mx-auto w-1/4 mt-4"
        ></motion.div>
      </div>

      {/* cards container */}
      <motion.div
        onTouchStart={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className={cn(
          // mobile
          "flex overflow-x-auto snap-x snap-mandatory gap-4 px-[7.5vw] pb-10 scroll-smoot",

          // desktop
          "lg:justify-between lg:gap-0 lg:pb-0 lg:px-45",
        )}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* map cards sig dishes, craft and desserts*/}
        {homeDishes &&
          homeDishes.map((dishes) => {
            return (
              <div
                key={dishes.id}
                className={cn(
                  // mobile
                  "snap-center shrink-0 w-[85vw] max-w-[24rem] flex flex-col rounded-3xl bg-white p-6 shadow-lg shadow-black/10",

                  // desktop

                  "lg:p-0 lg:rounded-none lg:px-0 lg:pb-0 lg:bg-primary-bg lg:shadow-none",
                )}
              >
                {/* image and title container */}
                <div className="group">
                  <div className="group relative overflow-hidden rounded-3xl lg:rounded-none lg:h-115">
                    <img
                      className="w-full object-cover rounded-3xl lg:rounded-none lg:group-hover:scale-110 lg:transition-transform lg:duration-500"
                      src={dishes.image}
                      alt="water with ice"
                    />
                    {/* overlay */}
                  </div>

                  <h1 className="mt-4 text-lg sm:text-xl lg:group-hover:text-brown-bg transition-all duration-500">
                    {dishes.name}
                  </h1>
                </div>

                <p className="mt-2.5 text-gray-600 text-sm sm:text-base">
                  {dishes.description}
                </p>
              </div>
            );
          })}
      </motion.div>
    </div>
  );
}
