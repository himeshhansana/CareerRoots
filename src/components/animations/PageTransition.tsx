import React, { Children } from 'react';
import { motion } from 'framer-motion';
interface PageTransitionProps {
  children: React.ReactNode;
}
export function PageTransition({
  children
}: PageTransitionProps) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} exit={{
    opacity: 0,
    y: 20
  }} transition={{
    duration: 0.5
  }}>
      {children}
    </motion.div>;
}
export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  transition: {
    duration: 0.5
  }
};
export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
export const fadeIn = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  transition: {
    duration: 0.5
  }
};
export const scaleOnHover = {
  hover: {
    scale: 1.05
  },
  tap: {
    scale: 0.95
  }
};