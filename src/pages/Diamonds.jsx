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
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {diamondCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-body text-sm transition-colors ${
                activeCategory === cat
                  ? 'bg-diamond-gold text-diamond-black'
                  : 'glass text-diamond-silver hover:text-diamond-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

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
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-diamond-black/0 group-hover:bg-diamond-black/60 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity font-body text-diamond-gold tracking-wide uppercase text-sm">
                    View Details
                  </span>
                </div>
                <div className="p-4 glass">
                  <h3 className="font-heading text-diamond-silver">{product.name}</h3>
                  <p className="font-body text-xs text-diamond-silver/60">{product.carat} &middot; {product.clarity}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <img src={selected.image} alt={selected.name} className="rounded-xl w-full object-cover" />
            <div>
              <h3 className="font-heading text-2xl text-diamond-silver mb-3">{selected.name}</h3>
              <p className="font-body text-sm text-diamond-silver/70 mb-2">Category: {selected.category}</p>
              <p className="font-body text-sm text-diamond-silver/70 mb-2">Carat Range: {selected.carat}</p>
              <p className="font-body text-sm text-diamond-silver/70">Clarity Grade: {selected.clarity}</p>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
