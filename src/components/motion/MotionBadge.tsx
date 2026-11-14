import React from 'react';
import { motion } from 'framer-motion';

interface MotionBadgeProps {
  children: React.ReactNode;
  icon?: string;
  delay?: number;
}

export default function MotionBadge({ children, icon, delay = 0 }: MotionBadgeProps) {
  return (
    <motion.span
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101416]/50 backdrop-blur-md border border-[#C8BFAE]/30 text-[#F5F1E8] text-[10px] sm:text-[11px] tracking-[0.18em] uppercase font-light shadow-sm hover:border-[#D6B66C]/60 hover:bg-[#101416]/70 transition-all duration-300"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.02, y: -1 }}
    >
      {icon ? (
        <span className="text-[#D6B66C] text-[10px] sm:text-xs">{icon}</span>
      ) : (
        <span className="w-1.5 h-1.5 rounded-full bg-[#D6B66C]"></span>
      )}
      <span>{children}</span>
    </motion.span>
  );
}
