import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGem } from 'react-icons/fa';
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
        scrolled ? 'bg-diamond-black/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2 font-heading text-xl text-diamond-silver">
          <FaGem className="text-diamond-gold" />
          <span>Shree Hari <span className="text-diamond-gold">Diamtech</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `font-body text-sm uppercase tracking-wide transition-colors ${
                  isActive ? 'text-diamond-gold' : 'text-diamond-silver hover:text-diamond-gold'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <button
          className="md:hidden text-diamond-silver text-2xl"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <FaBars />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="fixed top-0 right-0 h-full w-72 bg-diamond-black z-[1100] flex flex-col p-8 gap-6 shadow-2xl"
          >
            <button
              className="self-end text-diamond-silver text-2xl mb-6"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `font-body text-lg uppercase tracking-wide ${
                    isActive ? 'text-diamond-gold' : 'text-diamond-silver hover:text-diamond-gold'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
