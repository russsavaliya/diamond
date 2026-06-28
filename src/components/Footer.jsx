import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { company, navLinks } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="block mb-4">
            <img src="/images/logo.png" alt="Cauer" className="h-10" />
          </Link>
          <p className="font-body text-sm text-white/60 leading-relaxed">{company.shortIntro}</p>
        </div>

        <div>
          <h3 className="font-heading text-white text-sm tracking-widest uppercase mb-5">Quick Links</h3>
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="font-body text-sm text-white/60 hover:text-white transition-colors tracking-wide"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-white text-sm tracking-widest uppercase mb-5">Contact</h3>
          <ul className="space-y-3 font-body text-sm text-white/60 leading-relaxed">
            <li>{company.address}</li>
            <li>{company.phone}</li>
            <li>{company.email}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-white text-sm tracking-widest uppercase mb-5">Newsletter</h3>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="bg-white/5 border border-white/20 rounded-l-full px-4 py-2 text-sm font-body text-white flex-1 focus:outline-none focus:border-white/50 transition-colors"
            />
            <button className="bg-white text-black px-4 rounded-r-full font-body text-sm font-semibold hover:bg-white/90 transition-colors">
              Join
            </button>
          </form>
          <div className="flex gap-5 mt-6 text-white/50">
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
                className="hover:text-white transition-colors text-lg"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/5 mt-10 pt-6 text-center font-body text-xs text-white/30 tracking-widest">
        &copy; {new Date().getFullYear()} Cauer Lab Grown Diamonds. All rights reserved.
      </div>
    </footer>
  );
}
