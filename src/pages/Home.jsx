import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import Card from '../components/Card';
import CountUp from '../components/CountUp';
import Sparkles from '../components/Sparkles';
import { hero, diamonds, factory } from '../data/images';
import { whyChooseUs, processSteps, stats, testimonials } from '../data/siteData';

const heroWords = 'Crafting Brilliance Through CVD Technology'.split(' ');

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-diamond-black">
        <img
          src={hero.bg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <Sparkles />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center mb-6"
          >
            <img src={hero.diamond} alt="Shree Hari Diamtech diamond" className="w-40 md:w-70 animate-float drop-shadow-[0_0_40px_rgba(185,228,255,0.4)]" />
          </motion.div>

          <h1 className="font-heading text-4xl md:text-6xl text-diamond-silver mb-4">
            Shree Hari <span className="text-gradient-gold">Diamtech</span>
          </h1>

          <p className="font-accent text-xl md:text-2xl text-diamond-blue flex flex-wrap justify-center gap-2 mb-10">
            {heroWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              >
                {word}
              </motion.span>
            ))}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/diamonds" variant="primary">Explore Diamonds</Button>
            <Button to="/contact" variant="secondary">Contact Us</Button>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <AnimatedSection as="section" className="py-24 px-6 max-w-5xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl text-diamond-silver mb-6">
          Redefining Diamonds for a <span className="text-diamond-gold">New Era</span>
        </h2>
        <p className="font-body text-diamond-silver/70 leading-relaxed mb-8">
          Shree Hari Diamtech is a premium CVD diamond manufacturer, combining cutting-edge laboratory
          technology with generations of gem-cutting craftsmanship to create diamonds of exceptional
          brilliance, clarity, and ethical origin.
        </p>
        <Link to="/about" className="font-body text-diamond-gold underline hover:text-diamond-blue transition-colors">
          Learn More &rarr;
        </Link>
      </AnimatedSection>

      {/* WHY CHOOSE US */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-diamond-silver">Why Choose Us</h2>
        </AnimatedSection>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <Card className="h-full text-center">
                <item.icon className="text-4xl text-diamond-gold mx-auto mb-4" />
                <h3 className="font-heading text-lg text-diamond-silver mb-2">{item.title}</h3>
                <p className="font-body text-sm text-diamond-silver/60">{item.desc}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* DIAMOND GALLERY PREVIEW */}
      <section className="py-24 px-6">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-diamond-silver">Our Diamonds</h2>
        </AnimatedSection>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {diamonds.map((src, i) => (
            <AnimatedSection key={i} variant="scaleIn" delay={i * 0.05}>
              <div className="relative overflow-hidden rounded-xl group shine-overlay">
                <img
                  src={src}
                  alt={`Diamond ${i + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-diamond-black/0 group-hover:bg-diamond-black/30 transition-colors duration-300" />
              </div>
            </AnimatedSection>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button to="/diamonds">View All Diamonds</Button>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <AnimatedSection className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl text-diamond-silver">Our Manufacturing Process</h2>
        </AnimatedSection>
        <div className="max-w-6xl mx-auto relative">
          <div className="hidden md:block absolute top-8 left-0 right-0 h-px bg-diamond-gold/30" />
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {processSteps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.15} className="text-center relative">
                <div className="w-16 h-16 mx-auto rounded-full glass flex items-center justify-center mb-4 relative z-10">
                  <step.icon className="text-2xl text-diamond-gold" />
                </div>
                <h3 className="font-heading text-sm text-diamond-silver mb-2">{step.title}</h3>
                <p className="font-body text-xs text-diamond-silver/60">{step.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
        <div className="text-center mt-12">
          <Button to="/process" variant="secondary">See Full Process</Button>
        </div>
      </section>

      {/* FACTORY GLIMPSE */}
      <section className="py-24 px-6">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-4xl text-diamond-silver">A Glimpse Into Our Factory</h2>
          <p className="font-body text-diamond-silver/50 text-sm mt-2">Factory details to be added</p>
        </AnimatedSection>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[factory.shot1, factory.shot2, factory.shot3].map((src, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="overflow-hidden rounded-xl shine-overlay">
                <img src={src} alt={`Factory glimpse ${i + 1}`} className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 0.1}>
              <CountUp end={stat.value} />
              <p className="font-body text-sm text-diamond-silver/60 mt-2">{stat.label}</p>
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
      <AnimatedSection as="section" className="py-24 px-6 text-center bg-gradient-to-r from-[#111] via-[#1a1a1a] to-[#111]">
        <h2 className="font-heading text-3xl md:text-4xl text-diamond-silver mb-6">
          Ready to Discover Your Perfect Diamond?
        </h2>
        <Button to="/contact">Get in Touch</Button>
      </AnimatedSection>
    </div>
  );
}
