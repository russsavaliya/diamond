import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true }) {
  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -8,
              boxShadow:
                '0 16px 48px rgba(0,212,255,0.12), 0 0 0 1px rgba(0,212,255,0.2)',
            }
          : undefined
      }
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className={`glass rounded-2xl p-6 transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
}
