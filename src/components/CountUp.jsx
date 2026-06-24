import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function CountUp({ end, duration = 2.2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const stepTime = 1000 / 60;
    const totalSteps = (duration * 1000) / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setValue(end);
        clearInterval(timer);
      } else {
        setValue(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <motion.span
      ref={ref}
      className="font-heading text-4xl md:text-5xl text-diamond-gold drop-shadow-[0_0_15px_rgba(0,212,255,0.5)]"
    >
      {value.toLocaleString()}+
    </motion.span>
  );
}
