"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function XPTopbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 z-[100] bg-[#0B0F1A]/50 backdrop-blur-sm border-b border-white/5">
      <motion.div
        className="h-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-300 origin-left shadow-[0_0_15px_rgba(245,158,11,0.5)]"
        style={{ scaleX }}
      />
    </div>
  );
}
