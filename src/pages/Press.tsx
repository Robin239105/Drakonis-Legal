import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Mail } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';

const pressReleases = [
  { date: '2024-03-15', title: 'Drakonis Legal Secures Record £480M Victory in Harwick Capital Dispute', excerpt: 'The firm achieved one of the largest shareholder litigation judgments in English legal history, representing Harwick Capital in a 14-month trial before the Commercial Court.' },
  { date: '2023-11-20', title: 'Drakonis Legal Opens Fifth Global Office in Hong Kong', excerpt: 'The firm\'s expansion into Greater China marks a significant milestone in its Asian growth strategy, establishing a presence at Two IFC in Central Hong Kong.' },
  { date: '2024-01-10', title: 'Managing Partner Dorian Kael Named in Legal 500 Hall of Fame', excerpt: 'Dorian Kael has been inducted into the Legal 500 Hall of Fame in recognition of his outstanding career in corporate litigation spanning over three decades.' },
  { date: '2024-02-28', title: 'Drakonis Legal Ranked Band 1 in Eight Chambers UK Categories', excerpt: 'The firm has achieved its highest number of Band 1 rankings in the latest Chambers UK guide, reflecting its strength across multiple practice areas.' },
  { date: '2023-09-05', title: 'Firm Achieves Carbon Neutral Status Ahead of 2025 Target', excerpt: 'Drakonis Legal has achieved carbon neutrality across all five global offices, two years ahead of its original 2025 target, through a combination of emissions reduction and certified offset programmes.' },
  { date: '2024-04-01', title: 'Drakonis Legal Launches AI Legal Research Division', excerpt: 'The firm has established a dedicated AI Legal Research division to enhance its litigation capabilities through the application of artificial intelligence and machine learning technologies.' },
];

const mediaPartners = ['The Financial Times', 'The Lawyer', 'Legal Business', 'Chambers & Partners', 'Bloomberg Law', 'Law.com'];

export default function Press() {
  return (
    <PageWrapper>
      <section className="relative pt-32 pb-20 bg-navy-deep">
        <div className="relative container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Press & Media' }]} />
          <h1 className="font-heading text-warm-white mt-6">Press & Media</h1>
        </div>
      </section>

      <section className="py-12 bg-obsidian">
        <div className="container-custom px-4 md:px-8">
          <div className="p-6 bg-navy rounded-lg border border-gold/10 max-w-xl">
            <h4 className="font-ui text-sm text-gold uppercase tracking-wider mb-3">Press Contact</h4>
            <p className="text-sm text-gray-light font-body">For media enquiries, please contact our press office:</p>
            <a href="mailto:media@drakonislegal.com" className="flex items-center space-x-2 text-gold hover:text-gold-light mt-2 font-ui text-sm transition-colors">
              <Mail className="w-4 h-4" /><span>media@drakonislegal.com</span>
            </a>
            <p className="text-xs text-gray-muted font-body mt-2">Press office hours: Monday – Friday, 08:00 – 18:00 GMT</p>
          </div>
        </div>
      </section>

      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <h2 className="font-heading text-warm-white mb-12">Press Releases</h2>
          <div className="space-y-6 max-w-4xl">
            {pressReleases.map((pr, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="p-8 bg-navy rounded-lg border border-gold/10 hover:border-gold/30 transition-all group cursor-pointer">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="w-4 h-4 text-gold/60" />
                  <span className="text-sm font-ui text-gray-muted">{new Date(pr.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                </div>
                <h3 className="font-heading text-xl text-warm-white mb-3 group-hover:text-gold transition-colors">{pr.title}</h3>
                <p className="text-sm text-gray-light font-body">{pr.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-deep">
        <div className="container-custom px-4 md:px-8">
          <h4 className="font-ui text-sm text-gold uppercase tracking-wider text-center mb-8">As Featured In</h4>
          <div className="flex flex-wrap justify-center gap-6">
            {mediaPartners.map((partner) => (
              <div key={partner} className="px-6 py-3 border border-gold/20 rounded text-sm font-ui text-gold/70 tracking-wide">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
