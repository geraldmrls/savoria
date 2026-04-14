import { motion } from "motion/react";

export function PageWrapper({ children, direction }: { children: React.ReactNode, direction: number }) {
  return (
    <motion.div
      initial={{ x: direction * 100 + "%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: direction * -100 + "%", opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}