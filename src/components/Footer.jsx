import { Link } from 'react-router-dom';
import { FaGem, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { company, navLinks } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-2 font-heading text-xl text-diamond-silver mb-4">
            <FaGem className="text-diamond-gold" />
            Shree Hari Diamtech
          </Link>
          <p className="font-body text-sm text-diamond-silver/70">{company.shortIntro}</p>
        </div>

        <div>
          <h3 className="font-heading text-diamond-gold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="font-body text-sm text-diamond-silver/70 hover:text-diamond-gold transition-colors">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-diamond-gold mb-4">Contact</h3>
          <ul className="space-y-2 font-body text-sm text-diamond-silver/70">
            <li>{company.address}</li>
            <li>{company.phone}</li>
            <li>{company.email}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-diamond-gold mb-4">Newsletter</h3>
          <form className="flex" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="bg-white/5 border border-white/10 rounded-l-full px-4 py-2 text-sm font-body text-diamond-silver flex-1 focus:outline-none focus:border-diamond-gold"
            />
            <button className="bg-diamond-gold text-diamond-black px-4 rounded-r-full font-body text-sm">
              Join
            </button>
          </form>
          <div className="flex gap-4 mt-6 text-diamond-silver/70">
            <a href={company.social.facebook} target="_blank" rel="noreferrer" className="hover:text-diamond-gold"><FaFacebookF /></a>
            <a href={company.social.instagram} target="_blank" rel="noreferrer" className="hover:text-diamond-gold"><FaInstagram /></a>
            <a href={company.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-diamond-gold"><FaLinkedinIn /></a>
            <a href={company.social.twitter} target="_blank" rel="noreferrer" className="hover:text-diamond-gold"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 mt-10 pt-6 text-center font-body text-xs text-diamond-silver/50">
        &copy; {new Date().getFullYear()} Shree Hari Diamtech. All rights reserved.
      </div>
    </footer>
  );
}
