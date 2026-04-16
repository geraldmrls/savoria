import { motion } from "motion/react";

// hooks
import { cn } from "../../utils/cn.ts";

export function OurMenuText() {
  const browserWidth = window.innerWidth;
  const lineWidth = `${browserWidth >= 1024 ? "200px" : "100px"}`;
  return (
    <>
      {/* card container */}
      <div
        className={cn(
          // mobile styles
          " bg-brown-bg-dark h-70 flex flex-col items-center justify-center",
        )}
      >
        <h1 className="text-white text-3xl">Our Menu</h1>

        {/* line */}

        {/* line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: lineWidth }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="border border-brown-bg mx-auto mt-4"
        ></motion.div>

        <p className="text-amber-50 text-center mt-4 w-80">
          Discover our carefully curated selection of dishes, drinks, and
          desserts
        </p>
      </div>
    </>
  );
}
