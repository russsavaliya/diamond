import { motion } from 'framer-motion';

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.85 },
    visible: { opacity: 1, scale: 1 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
};

export default function AnimatedSection({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  as = 'div',
}) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants[variant]}
      transition={{
        type: 'spring',
        stiffness: 60,
        damping: 18,
        delay,
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}
