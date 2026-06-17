import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function Sparkles({ count = 40 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3 + 1,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 2,
      })),
    [count]
  );

  return (
    <div className="sparkle-canvas">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-diamond-gold"
          style={{ top: `${p.top}%`, left: `${p.left}%`, width: p.size, height: p.size }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.4, 0.5] }}
          transition={{ repeat: Infinity, duration: p.duration, delay: p.delay }}
        />
      ))}
    </div>
  );
}
