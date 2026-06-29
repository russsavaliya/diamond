import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import Card from '../components/Card';
import CountUp from '../components/CountUp';
import Sparkles from '../components/Sparkles';
import { hero, diamonds, factory } from '../data/images';
import { whyChooseUs, processSteps, stats, testimonials } from '../data/siteData';

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-black">
        <img
          src={hero.bg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* <Sparkles /> */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 pb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/jewellery" variant="primary">Explore Jewellery</Button>
            <Button to="/diamonds" variant="secondary-light">Explore Collection</Button>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <AnimatedSection as="section" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-diamond-silver mb-6">
          Redefining Luxury for a <span className="text-gradient-gold">New Era</span>
        </h2>
        <p className="font-body text-diamond-silver/70 leading-relaxed mb-8">
          Cauer is a premium lab-grown diamond jewellery house, combining cutting-edge CVD technology
          with timeless craftsmanship to create pieces of exceptional brilliance, ethical origin,
          and enduring beauty.
        </p>
        <Link to="/about" className="font-body text-diamond-silver underline hover:text-diamond-blue transition-colors">
          Learn More &rarr;
        </Link>
      </AnimatedSection>

      {/* WHY CHOOSE US */}
      <section className="dark-section py-24 px-6 bg-[#0d0d0d]">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-white">Why Choose Us</h2>
        </AnimatedSection>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <Card className="h-full text-center">
                <item.icon className="text-4xl text-white mx-auto mb-4" />
                <h3 className="font-heading text-lg text-white mb-2">{item.title}</h3>
                <p className="font-body text-sm text-white/60">{item.desc}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* JEWELLERY PREVIEW */}
      <section className="py-24 px-6">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-diamond-silver">Our Diamonds</h2>
        </AnimatedSection>
        <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-3">
          {diamonds.map((src, i) => (
            <AnimatedSection key={i} variant="scaleIn" delay={i * 0.05}>
              <div className="relative aspect-square overflow-hidden rounded-xl group shine-overlay">
                <img
                  src={src}
                  alt={`Diamond cut ${i + 1}`}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button to="/jewellery">View Jewellery Collection</Button>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="dark-section py-24 px-6 bg-[#0d0d0d]">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-white">Our Manufacturing Process</h2>
        </AnimatedSection>
        <div className="max-w-6xl mx-auto relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-white/20" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.15} className="text-center relative">
                <div className="w-16 h-16 mx-auto rounded-full glass flex items-center justify-center mb-4 relative z-10">
                  <step.icon className="text-2xl text-white" />
                </div>
                <h3 className="font-heading text-sm text-white mb-2">{step.title}</h3>
                <p className="font-body text-xs text-white/60">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Button to="/process" variant="secondary-light">See Full Process</Button>
        </div>
      </section>

      {/* FACTORY GLIMPSE */}
      <section className="py-24 px-6">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-diamond-silver">A Glimpse Into Our Facility</h2>
        </AnimatedSection>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[factory.shot1, factory.shot2, factory.shot3].map((src, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="overflow-hidden rounded-xl shine-overlay">
                <img src={src} alt={`Facility glimpse ${i + 1}`} className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="dark-section py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <CountUp end={stat.value} />
              <p className="font-body text-sm text-white/60 mt-2">{stat.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-diamond-silver">What Our Clients Say</h2>
        </AnimatedSection>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection key={t.name} delay={i * 0.1}>
              <Card>
                <p className="font-accent text-lg text-diamond-blue italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                <p className="font-heading text-diamond-silver">{t.name}</p>
                <p className="font-body text-xs text-diamond-silver/50">{t.role}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <AnimatedSection as="section" className="dark-section py-24 px-6 text-center bg-[#111111]">
        <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
          Ready to Discover Your Perfect Piece?
        </h2>
        <Button to="/contact">Get in Touch</Button>
      </AnimatedSection>
    </div>
  );
}
