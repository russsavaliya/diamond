import { useMemo } from 'react';
import { motion } from 'framer-motion';

const COLORS = ['#00d4ff', '#b9e4ff', '#ffffff', '#8b5cf6', '#00d4ff'];

export default function Sparkles({ count = 60 }) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 3.5 + 0.8,
        delay: Math.random() * 5,
        duration: Math.random() * 4 + 2.5,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      })),
    [count]
  );

  return (
    <div className="sparkle-canvas">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
          }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1.6, 0.4] }}
          transition={{ repeat: Infinity, duration: p.duration, delay: p.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
