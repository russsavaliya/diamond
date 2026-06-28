import { motion, AnimatePresence } from 'framer-motion';

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-diamond-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/images/logo.png"
            alt="Cauer"
            className="h-20 mb-8"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.97, 1, 0.97] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          />

          <motion.div
            className="h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a96e, #a07840, transparent)' }}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 160, opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
