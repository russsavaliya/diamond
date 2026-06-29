import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import PageBanner from '../components/PageBanner';
import AnimatedSection from '../components/AnimatedSection';
import Card from '../components/Card';
import Button from '../components/Button';
import { company } from '../data/siteData';

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Valid email is required';
    if (!form.phone.trim()) errs.phone = 'Phone is required';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setShowToast(true);
      setForm(initialForm);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  const inputClass = (field) =>
    `w-full bg-black/5 border rounded-lg px-4 py-3 font-body text-sm text-diamond-silver focus:outline-none focus:border-black transition-colors ${
      errors[field] ? 'border-red-500' : 'border-black/15'
    }`;

  const infoItems = [
    { icon: HiLocationMarker, label: 'Address', value: company.address },
    { icon: HiPhone, label: 'Phone', value: company.phone },
    { icon: HiMail, label: 'Email', value: company.email },
  ];

  return (
    <div>
      <PageBanner title="Contact Us" crumb="Contact" />

      <section className="py-24 px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        {infoItems.map((item, i) => (
          <AnimatedSection key={item.label} delay={i * 0.1}>
            <Card className="text-center h-full">
              <item.icon className="text-4xl text-diamond-gold mx-auto mb-3" />
              <h3 className="font-heading text-diamond-silver mb-2 tracking-wide">{item.label}</h3>
              <p className="font-body text-sm text-diamond-silver/60">{item.value}</p>
            </Card>
          </AnimatedSection>
        ))}
        <AnimatedSection delay={0.3} className="lg:col-span-3 md:col-span-1">
          <Card className="text-center">
            <HiClock className="text-4xl text-diamond-gold mx-auto mb-3" />
            <h3 className="font-heading text-diamond-silver mb-2 tracking-wide">Working Hours</h3>
            <p className="font-body text-sm text-diamond-silver/60">{company.hours}</p>
          </Card>
        </AnimatedSection>
      </section>

      <section className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <AnimatedSection variant="fadeRight">
          <h2 className="font-heading text-3xl text-diamond-silver mb-8 tracking-wide">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass('name')}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass('email')}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div>
              <input
                type="tel"
                placeholder="Your Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass('phone')}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className={inputClass('subject')}
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={inputClass('message')}
              />
              {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </AnimatedSection>

        <AnimatedSection variant="fadeLeft">
          <div className="rounded-2xl overflow-hidden h-full min-h-[400px] border border-black/10">
            <iframe
              title="Shree Hari Diamtech location"
              src="https://maps.google.com/maps?q=Surat,Gujarat,India&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px', filter: 'invert(0.9) hue-rotate(180deg)' }}
              loading="lazy"
            />
          </div>
        </AnimatedSection>
      </section>

      <AnimatedSection as="section" className="py-16 px-6 text-center">
        <h3 className="font-heading text-2xl text-diamond-silver mb-8 tracking-wide">Connect With Us</h3>
        <div className="flex justify-center gap-6 text-xl">
          {[
            { href: company.social.facebook, Icon: FaFacebookF },
            { href: company.social.instagram, Icon: FaInstagram },
            { href: company.social.linkedin, Icon: FaLinkedinIn },
            { href: company.social.twitter, Icon: FaTwitter },
          ].map(({ href, Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-diamond-silver/50 hover:text-diamond-silver transition-colors duration-300"
            >
              <Icon />
            </a>
          ))}
        </div>
      </AnimatedSection>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 right-8 bg-diamond-gold text-diamond-black font-body font-semibold px-6 py-4 rounded-xl shadow-2xl z-[5000]"
          >
            Message submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
