import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PageBanner({ title, crumb }) {
  return (
    <section className="relative pt-40 pb-20 px-6 bg-gradient-to-b from-[#111] to-diamond-black text-center overflow-hidden">
      <div className="absolute inset-0 shimmer-bg opacity-5" />
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-heading text-4xl md:text-5xl text-diamond-silver relative z-10"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-body text-sm text-diamond-silver/60 mt-3 relative z-10"
      >
        <Link to="/" className="hover:text-diamond-gold">Home</Link> / {crumb}
      </motion.p>
    </section>
  );
}
