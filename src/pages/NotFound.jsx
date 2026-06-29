import { motion } from 'framer-motion';
import { FaGem } from 'react-icons/fa';
import Button from '../components/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-diamond-black">
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <FaGem className="text-7xl text-diamond-gold mb-6" />
      </motion.div>
      <h1 className="font-heading text-5xl text-diamond-silver mb-4">404</h1>
      <p className="font-body text-diamond-silver/60 mb-8 max-w-md">
        This facet doesn&apos;t exist. The page you&apos;re looking for may have been moved or polished away.
      </p>
      <Button to="/">Back to Home</Button>
    </div>
  );
}
