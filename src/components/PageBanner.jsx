import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PageBanner({ title, crumb }) {
  return (
    <section className="relative pt-44 pb-24 px-6 bg-gradient-to-b from-[#0f0f0f] to-diamond-black text-center overflow-hidden">
      {/* Animated shimmer strip */}
      <div className="absolute inset-0 shimmer-bg opacity-[0.04]" />

      {/* Decorative top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-diamond-gold to-transparent opacity-40 blur-sm" />

      <motion.h1
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 60, damping: 18 }}
        className="font-heading text-4xl md:text-6xl text-diamond-silver relative z-10 tracking-wide"
      >
        {title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-body text-xs text-diamond-silver/50 mt-4 relative z-10 tracking-[0.2em] uppercase"
      >
        <Link to="/" className="hover:text-diamond-gold transition-colors">Home</Link>
        <span className="mx-2 text-diamond-gold/40">/</span>
        {crumb}
      </motion.p>

      {/* Decorative bottom line */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #c9a96e, #a07840, transparent)' }}
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 280, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
      />
    </section>
  );
}
