import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
}) {
  const base =
    'relative overflow-hidden inline-flex items-center justify-center px-8 py-3 font-body font-medium tracking-wide rounded-full transition-colors duration-300 shine-overlay';

  const variants = {
    primary: 'bg-diamond-gold text-diamond-black hover:bg-[#e6c659]',
    secondary: 'bg-transparent border border-diamond-gold text-diamond-gold hover:bg-diamond-gold/10',
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = <span className="relative z-10">{children}</span>;

  const motionProps = {
    whileHover: { scale: 1.05, boxShadow: '0 0 20px rgba(212,175,55,0.5)' },
    whileTap: { scale: 0.97 },
  };

  if (to) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <Link to={to} className={classes}>
          {content}
        </Link>
      </motion.div>
    );
  }

  if (href) {
    return (
      <motion.div {...motionProps} className="inline-block">
        <a href={href} target="_blank" rel="noreferrer" className={classes}>
          {content}
        </a>
      </motion.div>
    );
  }

  return (
    <motion.button {...motionProps} type={type} onClick={onClick} className={classes}>
      {content}
    </motion.button>
  );
}
