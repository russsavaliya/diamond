import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';
import { aboutBanner, factory, team as teamImgs, certificates } from '../data/images';
import { coreValues, team } from '../data/siteData';

export default function About() {
  return (
    <div>
      <PageBanner title="About Us" crumb="About" />

      {/* COMPANY STORY */}
      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <AnimatedSection variant="fadeLeft">
          <img src={aboutBanner} alt="Our story" className="rounded-2xl w-full object-cover shine-overlay" />
        </AnimatedSection>
        <AnimatedSection variant="fadeRight">
          <h2 className="font-heading text-3xl text-diamond-silver mb-6">Our Story</h2>
          <p className="font-body text-diamond-silver/70 leading-relaxed mb-4">
            Founded with a vision to redefine luxury jewellery, Cauer has grown from a passionate
            studio into a globally recognized name in lab-grown diamond jewellery. Over nearly two
            decades, we have invested in advanced CVD growth technology, master craftsmanship, and
            rigorous quality standards.
          </p>
          <p className="font-body text-diamond-silver/70 leading-relaxed">
            Today, our diamonds travel from our growth chambers to jewellery houses across the world,
            carrying with them a promise of brilliance, ethics, and unmatched craftsmanship — truly
            Beyond Your Choice.
          </p>
        </AnimatedSection>
      </section>

      {/* MISSION & VISION */}
      <section className="dark-section py-24 px-6 bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
            <Card className="h-full">
              <h3 className="font-heading text-2xl text-white mb-4">Our Mission</h3>
              <p className="font-body text-white/70">
                To deliver ethically grown, exceptionally brilliant diamonds through sustainable CVD technology,
                empowering jewelers worldwide with a transparent and reliable supply chain.
              </p>
            </Card>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <Card className="h-full">
              <h3 className="font-heading text-2xl text-white mb-4">Our Vision</h3>
              <p className="font-body text-white/70">
                To be the world's most trusted name in lab-grown diamond jewellery, setting the global
                standard for quality, innovation, and ethical luxury.
              </p>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* MANUFACTURING FACILITY */}
      <section className="py-24 px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-heading text-3xl text-diamond-silver">Our Manufacturing Facility</h2>
          <p className="font-body text-diamond-silver/50 text-sm mt-2">
            Factory capacity, technology, and floor area details to be added.
          </p>
        </AnimatedSection>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[factory.shot1, factory.shot2, factory.machine].map((src, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <img src={src} alt={`Facility ${i + 1}`} className="rounded-xl w-full h-56 object-cover shine-overlay" />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="dark-section py-24 px-6 bg-[#0d0d0d]">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading text-3xl text-white">Our Core Values</h2>
        </AnimatedSection>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreValues.map((value, i) => (
            <AnimatedSection key={value.title} delay={i * 0.1}>
              <Card className="text-center h-full">
                <value.icon className="text-3xl text-white mx-auto mb-3" />
                <h3 className="font-heading text-lg text-white mb-2">{value.title}</h3>
                <p className="font-body text-sm text-white/60">{value.desc}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="py-24 px-6">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading text-3xl text-diamond-silver">Leadership Team</h2>
        </AnimatedSection>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <AnimatedSection key={member.name} delay={i * 0.1}>
              <Card className="text-center">
                <img src={teamImgs[i]} alt={member.name} className="rounded-xl w-full h-64 object-cover mb-4" />
                <h3 className="font-heading text-lg text-diamond-silver">{member.name}</h3>
                <p className="font-body text-sm text-diamond-silver/60">{member.role}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="dark-section py-24 px-6 bg-[#0d0d0d]">
        <AnimatedSection className="text-center mb-14">
          <h2 className="font-heading text-3xl text-white">Certifications</h2>
        </AnimatedSection>
        <div className="max-w-3xl mx-auto flex flex-wrap justify-center gap-8">
          {certificates.map((cert, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <img src={cert} alt={`Certificate ${i + 1}`} className="rounded-xl shadow-lg" />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
}
