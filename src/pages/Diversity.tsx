import { motion } from 'framer-motion';
import { Users, Globe, MessageCircle, Heart } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';

const stats = [
  { value: '42%', label: 'Female Partners' },
  { value: '38%', label: 'Ethnic Minority Professionals' },
  { value: '12', label: 'Languages Spoken' },
  { value: '2015', label: 'D&I Committee Established' },
];

const initiatives = [
  { title: 'Pathways Programme', desc: 'Engaging with secondary school students from underrepresented backgrounds through mentoring, work experience placements, and legal skills workshops. The programme has reached over 500 students since its launch in 2018.', impact: '500+ students reached' },
  { title: 'Diverse Futures Scholarship', desc: 'Providing full LPC/SQE fee sponsorship and a training contract to one exceptional candidate from an underrepresented background each year. Scholars receive mentoring from a senior partner throughout their studies.', impact: '8 scholars awarded to date' },
  { title: 'Reverse Mentoring Programme', desc: 'Pairing junior lawyers from diverse backgrounds with senior partners to share perspectives, challenge assumptions, and foster mutual understanding. The programme has transformed the firm\'s leadership approach to inclusion.', impact: '24 mentoring pairs active' },
  { title: 'LGBT+ Alliance Network', desc: 'Supporting our LGBT+ colleagues and allies through networking events, awareness campaigns, and policy advocacy. The network has been instrumental in achieving Stonewall Gold Employer status.', impact: 'Stonewall Gold Employer' },
];

export default function Diversity() {
  return (
    <PageWrapper>
      <section className="relative pt-32 pb-20 bg-navy-deep">
        <div className="relative container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Diversity & Inclusion' }]} />
          <h1 className="font-heading text-warm-white mt-6">Diversity, Equity & Inclusion</h1>
          <p className="text-xl text-gray-light font-body mt-4">A firm that reflects the world it serves.</p>
        </div>
      </section>

      <section className="page-section bg-obsidian">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading text-warm-white mb-8">Our Commitment</h2>
          <div className="space-y-6 text-gray-light font-body leading-relaxed">
            <p>Drakonis Legal is committed to building a firm that reflects the diversity of the communities and clients we serve. We believe that diversity of background, perspective, and experience strengthens our practice and enables us to deliver better outcomes for our clients.</p>
            <p>Our commitment to diversity, equity, and inclusion is not merely a statement of values — it is embedded in our recruitment, promotion, training, and culture. We have established measurable targets, robust monitoring systems, and dedicated governance structures to ensure that our commitment translates into meaningful action and visible progress.</p>
            <p>We recognise that the legal profession has historically underrepresented many communities, and we are determined to be part of the solution. Through our outreach programmes, scholarships, and internal initiatives, we are working to create pathways into the profession for talented individuals who might otherwise be excluded.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-deep">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-navy rounded-lg border border-gold/10">
                <div className="text-3xl font-heading font-bold text-gold mb-2">{stat.value}</div>
                <div className="text-xs font-ui text-gray-light uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <h2 className="font-heading text-warm-white text-center mb-12">Our Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {initiatives.map((init, i) => (
              <motion.div key={init.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 bg-navy rounded-lg border border-gold/10">
                <h4 className="font-heading text-xl text-warm-white mb-3">{init.title}</h4>
                <p className="text-sm text-gray-light font-body leading-relaxed mb-4">{init.desc}</p>
                <span className="text-xs font-ui text-gold">{init.impact}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy-deep">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="font-heading text-warm-white mb-4">2024 Diversity Report</h2>
          <p className="text-gray-light font-body mb-8">Download our latest annual diversity report for detailed statistics and programme updates.</p>
          <a
            href="mailto:enquiries@drakonislegal.com?subject=Request%3A%202024%20Diversity%20Report"
            className="inline-flex items-center px-8 py-4 bg-gold text-obsidian font-ui font-semibold rounded hover:bg-gold-light transition-colors"
          >
            Download Report (PDF)
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
