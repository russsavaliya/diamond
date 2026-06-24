import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { GiCutDiamond } from 'react-icons/gi';
import { navLinks } from '../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        scrolled
          ? 'bg-diamond-black/95 backdrop-blur-md shadow-[0_1px_0_rgba(0,212,255,0.15),0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-heading text-lg text-diamond-silver group">
          <motion.span
            className="text-diamond-gold drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          >
            <GiCutDiamond className="text-xl" />
          </motion.span>
          <span className="group-hover:text-diamond-silver transition-colors">
            Shree Hari <span className="text-diamond-gold">Diamtech</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-body text-xs uppercase tracking-[0.15em] transition-colors relative pb-1 ${
                  isActive ? 'text-diamond-gold' : 'text-diamond-silver/80 hover:text-diamond-gold'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-px bg-diamond-gold"
                      style={{ boxShadow: '0 0 8px rgba(0,212,255,0.8)' }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-diamond-silver text-2xl hover:text-diamond-gold transition-colors"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <HiMenuAlt3 />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1050]"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-72 bg-[#0d0d0d] border-l border-diamond-gold/10 z-[1100] flex flex-col p-8 gap-6 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-4">
                <GiCutDiamond className="text-diamond-gold text-xl drop-shadow-[0_0_8px_rgba(0,212,255,0.6)]" />
                <button
                  className="text-diamond-silver/70 text-2xl hover:text-diamond-gold transition-colors"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <HiX />
                </button>
              </div>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `font-body text-sm uppercase tracking-[0.15em] ${
                        isActive ? 'text-diamond-gold' : 'text-diamond-silver/80 hover:text-diamond-gold'
                      } transition-colors`
                    }
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
