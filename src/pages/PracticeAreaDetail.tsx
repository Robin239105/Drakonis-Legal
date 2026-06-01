import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Target, CheckCircle, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import ConsultationCTA from '../components/home/ConsultationCTA';
import { practiceAreas } from '../data/practiceAreas';
import { attorneys } from '../data/attorneys';
import { cases } from '../data/cases';

export default function PracticeAreaDetail() {
  const { slug } = useParams();
  const area = practiceAreas.find((a) => a.slug === slug);

  if (!area) {
    return <PageWrapper><div className="pt-32 text-center text-warm-white"><h1>Practice Area Not Found</h1></div></PageWrapper>;
  }

  const areaAttorneys = attorneys.filter((a) => area.attorneys.includes(a.slug));
  const relatedCases = cases.filter((c) => c.category.toLowerCase().includes(area.title.split(' ')[0].toLowerCase())).slice(0, 3);
  const relatedAreas = practiceAreas.filter((a) => area.relatedAreas.includes(a.slug));
  const paragraphs = area.fullDescription.split('\n').filter(Boolean);

  const approach = [
    { icon: Search, title: 'Investigate', desc: 'We begin every matter with a thorough investigation of the facts, the law, and the commercial context. Our research teams analyse relevant documentation, identify key witnesses, and map the legal landscape to build a comprehensive understanding of the dispute. This foundational work informs every subsequent decision and ensures that our litigation strategy is built on solid ground.' },
    { icon: Target, title: 'Strategise', desc: 'With a deep understanding of the matter, we develop a bespoke litigation strategy that aligns legal objectives with commercial goals. We present our clients with a clear assessment of risks and opportunities, a realistic timeline, and a range of strategic options. Our strategies are dynamic — we continuously reassess and adapt as the matter evolves.' },
    { icon: CheckCircle, title: 'Execute', desc: 'Execution is where strategy meets advocacy. Our litigation teams combine meticulous preparation with compelling courtroom advocacy to deliver outstanding results. Whether negotiating settlements, presenting arguments to tribunals, or conducting cross-examination, we bring the same intensity and precision to every stage of the process.' },
  ];

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${area.image})` }} />
        <div className="absolute inset-0 bg-obsidian/85" />
        <div className="relative container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Practice Areas', to: '/practice-areas' }, { label: area.title }]} />
          <h1 className="font-heading text-warm-white mt-6">{area.title}</h1>
        </div>
      </section>

      {/* Description + Sidebar */}
      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {paragraphs.map((p, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-gray-light font-body leading-relaxed">{p}</motion.p>
              ))}
            </div>
            <div className="space-y-6">
              {/* Stats */}
              <div className="p-6 bg-navy rounded-lg border border-gold/10">
                <h4 className="font-ui text-sm text-gold uppercase tracking-wider mb-4">Key Figures</h4>
                {area.stats.map((stat) => (
                  <div key={stat.label} className="flex justify-between items-center py-3 border-b border-gold/10 last:border-0">
                    <span className="text-sm text-gray-light font-body">{stat.label}</span>
                    <span className="font-heading font-bold text-gold">{stat.value}</span>
                  </div>
                ))}
              </div>
              {/* Attorneys */}
              <div className="p-6 bg-navy rounded-lg border border-gold/10">
                <h4 className="font-ui text-sm text-gold uppercase tracking-wider mb-4">Lead Attorneys</h4>
                {areaAttorneys.map((att) => (
                  <Link key={att.slug} to={`/attorneys/${att.slug}`} className="flex items-center space-x-3 py-3 border-b border-gold/10 last:border-0 group">
                    <img src={att.image} alt={att.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                      <p className="text-sm font-ui text-warm-white group-hover:text-gold transition-colors">{att.name}</p>
                      <p className="text-xs text-gray-muted font-ui">{att.title}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="page-section bg-navy-deep">
        <div className="container-custom">
          <h2 className="font-heading text-warm-white text-center mb-12">Key Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {area.keyServices.map((service, i) => (
              <motion.div key={service} initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start space-x-4 p-4">
                <span className="text-gold font-heading font-bold text-lg mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-gray-light font-body">{service}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <h2 className="font-heading text-warm-white text-center mb-12">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {approach.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }} className="p-8 bg-navy rounded-lg border border-gold/10">
                <step.icon className="w-8 h-8 text-gold mb-4" />
                <h4 className="font-heading text-xl text-warm-white mb-3">{step.title}</h4>
                <p className="text-sm text-gray-light font-body leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <section className="page-section bg-navy-deep">
          <div className="container-custom">
            <h2 className="font-heading text-warm-white text-center mb-12">Notable Matters</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCases.map((c) => (
                <Link key={c.slug} to={`/case-results/${c.slug}`} className="block p-6 bg-navy rounded-lg border border-gold/10 hover:border-gold/40 transition-all group">
                  <h4 className="font-heading text-lg text-warm-white mb-2 group-hover:text-gold transition-colors">{c.title}</h4>
                  <p className="text-sm text-gray-light font-body line-clamp-2">{c.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Areas */}
      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <h2 className="font-heading text-warm-white text-center mb-12">Related Practice Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {relatedAreas.map((ra) => (
              <Link key={ra.slug} to={`/practice-areas/${ra.slug}`} className="flex items-center justify-between p-6 bg-navy rounded-lg border border-gold/10 hover:border-gold/40 transition-all group">
                <h4 className="font-heading text-lg text-warm-white group-hover:text-gold transition-colors">{ra.title}</h4>
                <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageWrapper>
  );
}
