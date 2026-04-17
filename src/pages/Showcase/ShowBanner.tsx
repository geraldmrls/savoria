
import { motion } from "motion/react";

// hooks
import { cn } from "../../utils/cn.ts";

import "./Showcase.css"

export function ShowBanner() {
  const browserWidth = window.innerWidth;
  const lineWidth = `${browserWidth >= 1024 ? "200px" : "100px"}`;
  return (
    <>
      {/* card container */}
      <div
        className={cn(
          // mobile styles
          " bg-brown-bg-dark py-20 flex flex-col items-center justify-center lg:py-25 virtual-tour-fonts",
        )}
      >
        <h1 className="text-white text-3xl lg:text-6xl">Virtual Tour</h1>

        {/* line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: lineWidth }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="border border-brown-bg mx-auto mt-4 lg:mt-8"
        ></motion.div>

        <p className="text-amber-50 text-center mt-4 w-80 lg:mt-8">
          Discover our carefully curated selection of dishes, drinks, and
          desserts
        </p>
      </div>
    </>
  );
}
