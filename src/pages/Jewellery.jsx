import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';
import Button from '../components/Button';
import { GiDiamondHard, GiLeafSwirl, GiStarMedal } from 'react-icons/gi';
import { jewellery } from '../data/images';
import { jewelleryCategories, jewelleryProducts } from '../data/siteData';

const whyLabGrown = [
  {
    icon: GiLeafSwirl,
    title: 'Ethically Sourced',
    desc: 'Every Cauer piece is set with conflict-free, sustainably grown diamonds — zero mining impact.',
  },
  {
    icon: GiDiamondHard,
    title: 'Identical to Mined',
    desc: 'Our lab-grown diamonds share the same physical, chemical, and optical properties as mined stones.',
  },
  {
    icon: GiStarMedal,
    title: 'Certified Quality',
    desc: 'All stones are independently graded and certified by IGI and GIA gemological institutes.',
  },
];

export default function Jewellery() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? jewelleryProducts
    : jewelleryProducts.filter((p) => p.category === active);

  return (
    <div>
      <PageBanner title="Our Jewellery" crumb="Jewellery" />

      {/* INTRO */}
      <AnimatedSection as="section" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-diamond-silver mb-6">
          Crafted with <span className="text-gradient-gold">Lab Grown Diamonds</span>
        </h2>
        <p className="font-body text-diamond-silver/70 leading-relaxed">
          Each Cauer piece is a celebration of light, precision, and ethical luxury. Our lab-grown
          diamond jewellery collection is designed for those who demand beauty without compromise —
          exquisite craftsmanship, certified brilliance, and a clear conscience.
        </p>
      </AnimatedSection>

      {/* CATEGORY FILTER */}
      <section className="px-6 pb-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
          {jewelleryCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className={`font-body text-xs uppercase tracking-[0.15em] px-6 py-2 rounded-full border transition-all duration-300 ${
                active === cat
                  ? 'bg-diamond-gold text-diamond-black border-diamond-gold'
                  : 'bg-transparent text-diamond-silver/70 border-diamond-silver/20 hover:border-diamond-gold hover:text-diamond-gold'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => {
              const imgSrc = jewellery[jewelleryProducts.indexOf(product)] || jewellery[i % jewellery.length];
              return (
                <motion.div
                  key={product.name}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.88 }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <Card className="p-0 overflow-hidden group cursor-pointer">
                    <div className="relative overflow-hidden shine-overlay">
                      <img
                        src={imgSrc}
                        alt={product.name}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-108"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-diamond-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <span className="font-body text-xs text-diamond-gold tracking-widest uppercase">{product.category}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-heading text-base text-diamond-silver mb-1">{product.name}</h3>
                      <p className="font-body text-xs text-diamond-silver/50 mb-1">{product.stone}</p>
                      <p className="font-body text-xs text-diamond-gold tracking-wide">{product.metal}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* WHY LAB GROWN */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-diamond-silver">
            Why Lab Grown Diamonds?
          </h2>
          <p className="font-body text-diamond-silver/50 text-sm mt-3 max-w-xl mx-auto">
            The same fire. The same brilliance. A better story.
          </p>
        </AnimatedSection>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyLabGrown.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.12}>
              <Card className="text-center h-full">
                <item.icon className="text-4xl text-diamond-gold mx-auto mb-4" />
                <h3 className="font-heading text-lg text-diamond-silver mb-3">{item.title}</h3>
                <p className="font-body text-sm text-diamond-silver/60">{item.desc}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CRAFTSMANSHIP STRIP */}
      <AnimatedSection as="section" className="py-20 px-6">
        <div className="max-w-6xl mx-auto glass rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 shimmer-bg opacity-[0.03] rounded-3xl" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-diamond-gold to-transparent opacity-50" />
          <h2 className="font-heading text-2xl md:text-4xl text-diamond-silver mb-4 relative z-10">
            Each Piece, a <span className="text-gradient-gold">Masterpiece</span>
          </h2>
          <p className="font-body text-diamond-silver/60 max-w-2xl mx-auto leading-relaxed mb-8 relative z-10">
            From seed selection to final setting, every Cauer jewellery piece passes through the hands
            of master craftsmen and gemologists dedicated to perfection. Our lab-grown stones are
            individually chosen, cut, and set to create jewellery that lasts generations.
          </p>
          <div className="relative z-10">
            <Button to="/contact" variant="primary">Request a Consultation</Button>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-diamond-gold to-transparent opacity-50" />
        </div>
      </AnimatedSection>
    </div>
  );
}
