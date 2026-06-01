import { Link } from 'react-router-dom';
import { Share2 } from 'lucide-react';
import { practiceAreas } from '../../data/practiceAreas';

export default function Footer() {
  const firmLinks = [
    { label: 'About', to: '/about' },
    { label: 'Attorneys', to: '/attorneys' },
    { label: 'Case Results', to: '/case-results' },
    { label: 'Insights', to: '/insights' },
    { label: 'Careers', to: '/careers' },
    { label: 'Press', to: '/press' },
    { label: 'Diversity & Inclusion', to: '/diversity' },
    { label: 'Pro Bono', to: '/pro-bono' },
  ];

  return (
    <footer className="bg-obsidian border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo & Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="font-ui text-lg tracking-[0.2em] uppercase text-gold font-semibold">
                Drakonis Legal
              </span>
            </Link>
            <p className="text-sm text-gray-light font-body mb-4">
              Power. Precision. Precedent.
            </p>
            <p className="text-xs text-gray-muted font-body leading-relaxed mb-6">
              Drakonis Legal LLP is authorised and regulated by the Solicitors Regulation Authority (SRA No. 000000).
              A full list of partners is available for inspection at our registered office.
            </p>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-gray-muted hover:text-gold transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span className="text-xs font-ui">LinkedIn</span>
            </a>
          </div>

          {/* Column 2: Practice Areas */}
          <div>
            <h4 className="font-ui text-sm tracking-wide uppercase text-gold mb-6">Practice Areas</h4>
            <ul className="space-y-2.5">
              {practiceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    to={`/practice-areas/${area.slug}`}
                    className="text-sm text-gray-light hover:text-gold transition-colors font-body"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Firm */}
          <div>
            <h4 className="font-ui text-sm tracking-wide uppercase text-gold mb-6">Firm</h4>
            <ul className="space-y-2.5">
              {firmLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-gray-light hover:text-gold transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-ui text-sm tracking-wide uppercase text-gold mb-6">Contact</h4>
            <div className="space-y-4 text-sm text-gray-light font-body">
              <div>
                <p className="text-warm-white font-medium">London (HQ)</p>
                <p>1 King's Bench Walk, Temple</p>
                <p>London EC4Y 7DB</p>
              </div>
              <div>
                <p>
                  <a href="tel:+442070000000" className="hover:text-gold transition-colors">
                    +44 20 7000 0000
                  </a>
                </p>
                <p>
                  <a href="mailto:enquiries@drakonislegal.com" className="hover:text-gold transition-colors">
                    enquiries@drakonislegal.com
                  </a>
                </p>
              </div>
              <div>
                <p className="text-gray-muted text-xs">
                  Monday – Friday: 8:00 – 19:00 GMT
                </p>
                <p className="text-gray-muted text-xs">
                  Emergency line available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-muted font-ui">
              © {new Date().getFullYear()} Drakonis Legal LLP. All rights reserved.
              {' · '}
              Developed by{' '}
              <a
                href="https://alaminrobin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Al Amin Robin
              </a>
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="text-xs text-gray-muted hover:text-gold transition-colors font-ui">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-xs text-gray-muted hover:text-gold transition-colors font-ui">
                Terms of Service
              </Link>
              <Link to="/client-portal" className="text-xs text-gray-muted hover:text-gold transition-colors font-ui">
                Client Portal
              </Link>
            </div>
          </div>
          <p className="text-[11px] text-gray-muted/60 font-body mt-6 max-w-4xl">
            The information on this website is for general guidance only and does not constitute legal advice.
            No attorney-client relationship is created by the use of this website. Past results do not guarantee future outcomes.
            Drakonis Legal LLP is a limited liability partnership registered in England & Wales.
          </p>
        </div>
      </div>
    </footer>
  );
}
