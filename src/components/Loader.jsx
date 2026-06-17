import { motion, AnimatePresence } from 'framer-motion';
import { FaGem } from 'react-icons/fa';

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-diamond-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'linear' }}
          >
            <FaGem className="text-6xl text-diamond-gold drop-shadow-[0_0_15px_rgba(212,175,55,0.7)]" />
          </motion.div>
          <motion.p
            className="mt-6 font-heading text-diamond-silver tracking-[0.3em] text-sm uppercase"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          >
            Shree Hari Diamtech
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
