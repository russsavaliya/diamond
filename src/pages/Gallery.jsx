import { useState } from 'react';
import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';
import Modal from '../components/Modal';
import { gallery } from '../data/images';

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <PageBanner title="Gallery" crumb="Gallery" />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 [&>*]:break-inside-avoid">
          {gallery.map((src, i) => (
            <AnimatedSection key={i} variant="scaleIn" delay={(i % 8) * 0.05}>
              <div
                className="overflow-hidden rounded-xl cursor-pointer shine-overlay group"
                onClick={() => setSelected(src)}
              >
                <img
                  src={src}
                  alt={`Gallery item ${i + 1}`}
                  className="w-full h-64 object-contain bg-white transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <Modal isOpen={!!selected} onClose={() => setSelected(null)}>
        {selected && <img src={selected} alt="Enlarged view" className="rounded-xl w-full" />}
      </Modal>
    </div>
  );
}
