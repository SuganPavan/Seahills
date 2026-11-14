import React from 'react';
import { motion } from 'framer-motion';

interface MotionButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'gold' | 'glass';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function MotionButton({
  href,
  variant = 'gold',
  className = '',
  children,
  onClick
}: MotionButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2.5 px-6 py-3 sm:px-7 sm:py-3 rounded-full font-medium text-[11px] sm:text-xs tracking-[0.16em] uppercase transition-all duration-300 no-underline select-none cursor-pointer";
  
  // Refined Champagne-Gold & Understated Palette
  const variants = {
    // Champagne Gold Primary
    gold: "bg-[#D6B66C] hover:bg-[#E2C783] text-[#101416] border border-[#D6B66C]/60 shadow-[0_4px_20px_rgba(214,182,108,0.22)] hover:shadow-[0_6px_24px_rgba(214,182,108,0.32)] font-medium",
    primary: "bg-[#D6B66C] hover:bg-[#E2C783] text-[#101416] border border-[#D6B66C]/60 shadow-[0_4px_20px_rgba(214,182,108,0.22)] font-medium",
    // Understated Secondary Glass
    glass: "bg-[#101416]/40 hover:bg-[#101416]/75 text-[#F5F1E8] hover:text-white backdrop-blur-md border border-[#C8BFAE]/30 hover:border-[#D6B66C]/50 shadow-sm font-light",
    secondary: "bg-[#252525] hover:bg-[#101416] text-[#F5F1E8] border border-[#C8BFAE]/25 shadow-sm"
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ scale: 1.025, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      type="button"
      className={combinedClasses}
      whileHover={{ scale: 1.025, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
