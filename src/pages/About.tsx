import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import SectionHeader from '../components/ui/SectionHeader';
import ConsultationCTA from '../components/home/ConsultationCTA';
import { Shield, Award, Lock, Flame, Lightbulb, Globe, Star } from 'lucide-react';
import bgAbout1 from '../assets/images/bg_about_1.png';
import bgAbout2 from '../assets/images/bg_about_2.png';

const values = [
  { icon: Shield, title: 'Integrity', description: 'We hold ourselves to the highest ethical standards in every matter we undertake. Our reputation is built on a foundation of unwavering honesty and transparency with our clients, the courts, and our peers. We would sooner decline a brief than compromise our principles.' },
  { icon: Award, title: 'Excellence', description: 'Mediocrity has no place in our chambers. Every brief we accept receives the full weight of our collective expertise, resources, and determination. We pursue excellence not as an aspiration but as a minimum standard that defines every aspect of our practice.' },
  { icon: Lock, title: 'Discretion', description: 'Client confidentiality is absolute and inviolable. In a world of increasing transparency, we recognise that our clients trust us with their most sensitive matters. That trust is sacred, and we protect it with the same ferocity with which we litigate their cases.' },
  { icon: Flame, title: 'Tenacity', description: 'We fight until every avenue has been exhausted and every argument made. Our opponents know that engaging Drakonis Legal means confronting a team that will never concede a point without a fight, will never settle without proper consideration, and will never abandon a client mid-battle.' },
  { icon: Lightbulb, title: 'Innovation', description: 'We embrace technology and new methodologies to deliver better outcomes for our clients. From AI-assisted legal research to advanced document review platforms, we invest continuously in the tools and techniques that give our clients an edge in modern litigation.' },
  { icon: Globe, title: 'Global Vision', description: 'The law knows no borders. Neither do we. Our five-office international platform enables us to handle disputes wherever they arise, with local expertise and global coordination that ensures consistency of strategy and quality across jurisdictions.' },
];

const timeline = [
  { year: '1987', title: 'Founded in London', description: 'Sir Edmund Drakonis establishes the firm at King\'s Bench Walk, Temple.' },
  { year: '1992', title: 'First Major Victory', description: 'Secured a £180M judgment in a landmark shareholder dispute.' },
  { year: '1998', title: 'New York Office', description: 'Expanded to the United States with a Park Avenue presence.' },
  { year: '2003', title: 'Chambers UK Band 1', description: 'Achieved the highest ranking in corporate litigation.' },
  { year: '2008', title: 'Dubai Office', description: 'Registered with the DIFC Courts to serve the Middle East.' },
  { year: '2011', title: '£1B Milestone', description: 'Exceeded £1 billion in cumulative case value recovered.' },
  { year: '2014', title: 'Singapore Office', description: 'Launched Asia-Pacific operations from One Raffles Quay.' },
  { year: '2016', title: 'Hong Kong Office', description: 'Established Greater China presence at Two IFC.' },
  { year: '2019', title: 'Legal 500 Hall of Fame', description: 'Managing Partner inducted into the Hall of Fame.' },
  { year: '2023', title: '£4B Recovered', description: 'Surpassed £4 billion in total case value recovered for clients.' },
];

const awards = [
  { name: 'Chambers UK', detail: 'Band 1 — Corporate Litigation 2024' },
  { name: 'Legal 500', detail: 'Hall of Fame — Litigation' },
  { name: 'The Lawyer', detail: 'Top 100 UK Law Firms 2024' },
  { name: 'Law Society', detail: 'Excellence Award — Outstanding Firm 2023' },
  { name: 'Who\'s Who Legal', detail: 'Arbitration Firm of the Year 2023' },
  { name: 'Financial Times', detail: 'Innovative Law Firm Europe 2022' },
  { name: 'IFLR1000', detail: 'Financial & Corporate — Tier 1' },
  { name: 'Best Lawyers UK', detail: 'Corporate Litigation Firm of the Year 2024' },
];

export default function About() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-navy-deep">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${bgAbout1})` }} />
        <div className="relative container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'About' }]} />
          <h1 className="font-heading text-warm-white mt-6">About Drakonis Legal</h1>
        </div>
      </section>

      {/* Founding Story */}
      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <img src={bgAbout2} alt="Drakonis Legal Building" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 text-gray-light font-body leading-relaxed"
            >
              <h2 className="font-heading text-warm-white mb-4">Our Story</h2>
              <p>Founded in 1987 by Sir Edmund Drakonis in the historic chambers of King's Bench Walk, Temple, Drakonis Legal began as a boutique litigation practice specialising in corporate disputes. Sir Edmund, a former Queen's Counsel with a reputation for intellectual rigour and courtroom brilliance, envisioned a firm that would combine the advocacy skills of the bar with the strategic depth of a commercial law practice.</p>
              <p>In its early years, the firm made its name through a series of high-profile shareholder disputes and corporate governance cases that established important legal precedent. The 1992 victory in a £180 million shareholder dispute — one of the largest at the time — signalled that Drakonis Legal had arrived as a serious force in the London litigation market.</p>
              <p>The firm's growth has been deliberate and strategic. Rather than pursuing rapid expansion, Sir Edmund and his successors focused on building depth and excellence in core practice areas before extending the firm's geographic reach. The New York office followed in 1998, Dubai in 2008, Singapore in 2014, and Hong Kong in 2016 — each expansion driven by client demand and a commitment to serving clients wherever their disputes arose.</p>
              <p>Today, under the leadership of Managing Partner Dorian Kael, Drakonis Legal is a global litigation firm with over 120 legal professionals across five international offices. The firm has recovered more than £4 billion for clients across 42 jurisdictions, while maintaining the personal attention and bespoke service that distinguished it from its earliest days. Sir Edmund's founding vision — excellence without compromise — remains the animating principle of everything we do.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="page-section bg-navy-deep">
        <div className="container-custom">
          <SectionHeader title="Our Mission & Values" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-navy rounded-lg border border-gold/10"
              >
                <value.icon className="w-8 h-8 text-gold mb-4" />
                <h4 className="font-heading text-xl text-warm-white mb-3">{value.title}</h4>
                <p className="text-sm text-gray-light font-body leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <SectionHeader title="Our History" />
          <div className="relative max-w-3xl mx-auto">
            {/* Spine: left rail on mobile, centred on md+ */}
            <div className="absolute left-2 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-gold/20" />
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`relative flex items-center mb-10 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div
                  className={`w-full pl-10 text-left md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:pl-0 md:text-right' : 'md:pl-12 md:text-left'
                  }`}
                >
                  <span className="text-2xl font-heading font-bold text-gold">{item.year}</span>
                  <h4 className="font-heading text-lg text-warm-white mt-1">{item.title}</h4>
                  <p className="text-sm text-gray-light font-body mt-1">{item.description}</p>
                </div>
                <div className="absolute left-2 -translate-x-1/2 md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-obsidian z-10" />
                <div className="hidden md:block w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Quote */}
      <section className="py-24 bg-navy-deep">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-2xl md:text-3xl font-heading italic text-gold leading-relaxed mb-6">
              "The law is not merely a profession. It is a responsibility to defend what is right,
              recover what was taken, and protect what cannot afford to be lost."
            </p>
            <p className="font-ui text-sm text-gray-light tracking-wide">
              — Dorian Kael, Managing Partner
            </p>
          </motion.div>
        </div>
      </section>

      {/* Awards */}
      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <SectionHeader title="Recognition & Rankings" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {awards.map((award, index) => (
              <motion.div
                key={award.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 bg-navy rounded-lg border border-gold/10 text-center"
              >
                <Star className="w-6 h-6 text-gold mx-auto mb-3" />
                <h4 className="font-ui text-sm font-semibold text-warm-white mb-1">{award.name}</h4>
                <p className="text-xs text-gray-muted font-body">{award.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Responsibility */}
      <section className="page-section bg-navy-deep">
        <div className="container-custom">
          <SectionHeader title="Corporate Responsibility" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Pro Bono', stat: '£2.4M annually', desc: 'Providing £2.4 million in pro bono legal services annually, supporting access to justice initiatives across the United Kingdom and internationally.' },
              { title: 'Sustainability', stat: 'Carbon Neutral since 2020', desc: 'Carbon neutral since 2020, with a commitment to achieving net zero across all five offices by 2026. We offset emissions through certified environmental programmes.' },
              { title: 'Diversity', stat: '42% Female Partners', desc: '42% female partners with an active D&I committee established in 2015. We are committed to building a firm that reflects the diversity of the communities and clients we serve.' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-navy rounded-lg border border-gold/10"
              >
                <h4 className="font-heading text-xl text-warm-white mb-2">{item.title}</h4>
                <p className="text-sm font-ui text-gold mb-3">{item.stat}</p>
                <p className="text-sm text-gray-light font-body leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageWrapper>
  );
}
