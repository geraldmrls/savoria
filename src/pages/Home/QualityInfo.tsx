import { motion } from "motion/react";

// svg
import StarIcon from "../../assets/star-icon.svg?react";
import ClockIcon from "../../assets/clock-icon.svg?react";
import LocationIcon from "../../assets/location-icon.svg?react";

export function QualityInfo() {
  return (
    <>
      {/* quality container */}

      <div className="bg-white pt-14 flex flex-col gap-10 px-4 max-w-3xl mx-auto pb-14">
        {/* star circle */}
        <motion.div 
          initial={{ opacity: 0, y: 20}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{once:true}}
          className="text-center"
        >
          <div className="w-16 h-16 rounded-full border-2 border-brown-bg flex items-center justify-center mx-auto">
            <StarIcon className="h-8 w-8 stroke-brown-bg fill-white" />
          </div>

          <p className="text-center mt-2.5 text-base sm:text-lg font-semibold">Premium Quality</p>
          <p className="text-center mt-2.5 text-sm sm:text-base leading-6">
            Locally sourced ingredients, expertly crafted
          </p>
        </motion.div>

        {/* clock circle */}
        <motion.div 
          initial={{ opacity: 0, y: 20}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{once:true}}
          className="text-center"
        >
          <div className="w-16 h-16 rounded-full border-2 border-brown-bg flex items-center justify-center mx-auto">
            <ClockIcon className="h-8 w-8 stroke-brown-bg fill-white" />
          </div>

          <p className="text-center mt-2.5 text-base sm:text-lg font-semibold">Open Daily</p>
          <p className="text-center mt-2.5 text-sm sm:text-base leading-6">
            Serving breakfast, lunch, and dinner
          </p>
        </motion.div>

        {/* location circle */}

        <motion.div 
          initial={{ opacity: 0, y: 20}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{once:true}}
          className="text-center"
        >
          <div className="w-16 h-16 rounded-full border-2 border-brown-bg flex items-center justify-center mx-auto">
            <LocationIcon className="h-8 w-8 stroke-brown-bg fill-white" />
          </div>

          <p className="text-center mt-2.5 text-base sm:text-lg font-semibold">Prime Location</p>
          <p className="text-center mt-2.5 text-sm sm:text-base leading-6">Heart of the culinary district</p>
        </motion.div>
      </div>
    </>
  );
}
