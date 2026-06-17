import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';
import { processSteps, detailedProcess } from '../data/siteData';
import { factory, diamonds } from '../data/images';

export default function Process() {
  return (
    <div>
      <PageBanner title="Our Manufacturing Process" crumb="Process" />

      <section className="py-24 px-6 max-w-6xl mx-auto space-y-24">
        {detailedProcess.map((step, i) => {
          const Icon = processSteps[i]?.icon;
          const reverse = i % 2 === 1;
          return (
            <div
              key={step.title}
              className={`flex flex-col md:flex-row items-center gap-10 ${reverse ? 'md:flex-row-reverse' : ''}`}
            >
              <AnimatedSection variant={reverse ? 'fadeLeft' : 'fadeRight'} className="flex-1">
                <img
                  src={diamonds[i % diamonds.length]}
                  alt={step.title}
                  className="rounded-2xl w-full h-72 object-cover shine-overlay"
                />
              </AnimatedSection>
              <AnimatedSection variant={reverse ? 'fadeRight' : 'fadeLeft'} className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  {Icon && (
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                      <Icon className="text-xl text-diamond-gold" />
                    </div>
                  )}
                  <span className="font-heading text-diamond-gold text-sm tracking-widest">
                    STEP {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h2 className="font-heading text-2xl md:text-3xl text-diamond-silver mb-4">{step.title}</h2>
                <p className="font-body text-diamond-silver/70 leading-relaxed">{step.desc}</p>
              </AnimatedSection>
            </div>
          );
        })}
      </section>

      {/* EQUIPMENT SHOWCASE - placeholder */}
      {/* FACTORY EQUIPMENT DETAILS TO BE ADDED */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-3xl text-diamond-silver">Factory Equipment Showcase</h2>
          <p className="font-body text-diamond-silver/50 text-sm mt-2">
            Detailed equipment specifications and capacity figures to be added.
          </p>
        </AnimatedSection>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[factory.machine, factory.shot2].map((src, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <img src={src} alt={`Equipment ${i + 1}`} className="rounded-xl w-full h-72 object-cover shine-overlay" />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
