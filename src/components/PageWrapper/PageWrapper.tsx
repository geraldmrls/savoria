import { motion } from "motion/react";
import { useSwipeNavigation } from "../SwipeContext/SwipeContext.tsx";

const variants = {
  initial: (direction: number) => ({ x: direction * 100 + "%", opacity: 0 }),
  animate: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction * -100 + "%", opacity: 0 }),
};

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const { direction } = useSwipeNavigation();

  return (
    <motion.div
      custom={direction}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}