import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';
import Modal from '../components/Modal';
import { diamonds } from '../data/images';
import { diamondCategories, diamondProducts } from '../data/siteData';

export default function Diamonds() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered =
    activeCategory === 'All'
      ? diamondProducts
      : diamondProducts.filter((p) => p.category === activeCategory);

  return (
    <div>
      <PageBanner title="Our Diamonds" crumb="Diamonds" />

      <section className="py-16 px-6 max-w-7xl mx-auto">
        {/* CATEGORY TABS */}
        {/* <div className="flex flex-wrap justify-center gap-3 mb-14">
          {diamondCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-colors ${
                activeCategory === cat
                  ? 'bg-diamond-gold text-diamond-black'
                  : 'glass text-diamond-silver hover:text-black'
              }`}
            >
              {cat}
            </button>
          ))}
        </div> */}

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((product, i) => (
            <AnimatedSection key={product.name} variant="scaleIn" delay={i * 0.05}>
              <div
                className="relative overflow-hidden rounded-xl group cursor-pointer shine-overlay"
                onClick={() => setSelected({ ...product, image: diamonds[i % diamonds.length] })}
              >
                <img
                  src={diamonds[i % diamonds.length]}
                  alt={product.name}
                  className="w-full h-72 object-contain bg-white transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-body text-white tracking-wide uppercase text-sm">
                    View Details
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <img src={selected.image} alt={selected.name} className="rounded-xl w-full object-cover" />
        )}
      </Modal>
    </div>
  );
}
