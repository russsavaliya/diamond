import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks } from '../data/siteData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const mobileMenu = (
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
            className="fixed top-0 right-0 h-full w-72 border-l border-diamond-gold/20 z-[1100] flex flex-col p-8 gap-6 shadow-2xl"
            style={{ backgroundColor: '#ffffff' }}
          >
            <div className="flex items-center justify-between mb-4">
              <img src="/images/logo.png" alt="Cauer" className="h-8 w-auto object-contain" />
              <button
                className="text-black/70 text-2xl hover:text-diamond-gold transition-colors"
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
                      isActive ? 'text-diamond-gold' : 'text-black/80 hover:text-diamond-gold'
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
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 bg-diamond-black/95 backdrop-blur-md ${
          scrolled
            ? 'shadow-[0_1px_0_rgba(0,0,0,0.1),0_4px_24px_rgba(0,0,0,0.08)]'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="Cauer" className="h-12 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center justify-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-body text-xs font-semibold uppercase tracking-[0.15em] transition-colors relative pb-1 ${
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
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex justify-end col-start-3">
            <button
              className="md:hidden text-diamond-silver text-2xl hover:text-diamond-gold transition-colors"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <HiMenuAlt3 />
            </button>
          </div>
        </div>
      </nav>
      {createPortal(mobileMenu, document.body)}
    </>
  );
}
