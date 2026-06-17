import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -8, boxShadow: '0 10px 40px rgba(212,175,55,0.15)' } : undefined}
      transition={{ duration: 0.3 }}
      className={`glass rounded-2xl p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
