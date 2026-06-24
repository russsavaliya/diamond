import { motion, AnimatePresence } from 'framer-motion';
import { GiCutDiamond } from 'react-icons/gi';

export default function Loader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-diamond-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative flex items-center justify-center w-40 h-40 mb-6">
            {/* Outer rotating ring */}
            <motion.div
              className="absolute w-36 h-36 rounded-full"
              style={{
                border: '1px solid rgba(0,212,255,0.15)',
                borderTopColor: '#00d4ff',
                borderRightColor: 'rgba(0,212,255,0.5)',
              }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3, ease: 'linear' }}
            />
            {/* Inner counter-rotating ring */}
            <motion.div
              className="absolute w-24 h-24 rounded-full"
              style={{
                border: '1px solid rgba(139,92,246,0.1)',
                borderBottomColor: '#8b5cf6',
                borderLeftColor: 'rgba(139,92,246,0.4)',
              }}
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'linear' }}
            />
            {/* Diamond icon */}
            <motion.div
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
              className="drop-shadow-[0_0_30px_rgba(0,212,255,0.9)] relative z-10"
            >
              <GiCutDiamond className="text-5xl text-diamond-gold" />
            </motion.div>
          </div>

          <motion.p
            className="font-heading text-diamond-silver tracking-[0.4em] text-xs uppercase"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            Shree Hari Diamtech
          </motion.p>

          <motion.div
            className="mt-5 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, #00d4ff, #8b5cf6, transparent)' }}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 140, opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
