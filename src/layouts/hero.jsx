import { motion } from "motion/react";

export default function Hero() {
  return (
    <div className="flex h-screen flex-col items-center justify-center font-[modak] select-none">
      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-secondary text-[10dvw]/[1] drop-shadow-lg"
        >
          Happy Birthday
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-secondary-content absolute top-[5%] -z-10 text-[10dvw]/[1] opacity-30"
        >
          Happy Birthday
        </motion.p>
      </div>
      <div className="relative">
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-secondary text-[10dvw]/[1] drop-shadow-lg"
        >
          Puspita
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-secondary-content absolute top-[5%] -z-10 text-[10dvw]/[1] opacity-30"
        >
          Puspita
        </motion.p>
      </div>
    </div>
  );
}
