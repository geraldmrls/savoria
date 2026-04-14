import { motion } from "motion/react";

export function MakeReservationInfo() {
  return (
    <div className="bg-brown-bg-dark flex flex-col items-center justify-between gap-4 py-20 mt-12 px-7 h-100">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full flex flex-col justify-between items-center"
      >
        <h2 className="text-white text-2xl sm:text-3xl text-center">
          Reserve Your Table Today
        </h2>
        <p className="text-amber-50 text-sm sm:text-base text-center">
          Experience the perfect blend of flavor, ambiance, and hospitality.
          Join us for an unforgettable dining experience
        </p>

        {/* make a reservation button */}

        <button className="bg-yellow-border text-brown-bg-dark py-3 px-6 font-semibold hover:bg-amber-600 transition-colors">
          MAKE A RESERVATION
        </button>
      </motion.div>
    </div>
  );
}
