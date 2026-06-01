import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import Badge from '../components/ui/Badge';
import ConsultationCTA from '../components/home/ConsultationCTA';
import { cases } from '../data/cases';
import { attorneys } from '../data/attorneys';

function getOutcomeBadgeVariant(outcome: string) {
  switch (outcome) {
    case 'Victory': return 'victory' as const;
    case 'Acquittal': case 'Cleared': return 'acquittal' as const;
    default: return 'settlement' as const;
  }
}

export default function CaseDetail() {
  const { slug } = useParams();
  const caseItem = cases.find((c) => c.slug === slug);

  if (!caseItem) {
    return <PageWrapper><div className="pt-32 text-center text-warm-white"><h1>Case Not Found</h1></div></PageWrapper>;
  }

  const caseAttorneys = attorneys.filter((a) => caseItem.attorneys.includes(a.slug));
  const relatedCases = cases.filter((c) => c.category === caseItem.category && c.slug !== caseItem.slug).slice(0, 3);
  const paragraphs = caseItem.fullDescription.split('\n').filter(Boolean);

  return (
    <PageWrapper>
      <section className="pt-32 pb-16 bg-navy-deep">
        <div className="container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Case Results', to: '/case-results' }, { label: caseItem.title }]} />
          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="outline">{caseItem.category}</Badge>
              <Badge variant={getOutcomeBadgeVariant(caseItem.outcome)}>{caseItem.outcome}</Badge>
              <span className="text-sm font-ui text-gray-muted">{caseItem.year}</span>
            </div>
            <h1 className="font-heading text-warm-white mb-4">{caseItem.title}</h1>
            <p className="text-xl text-gold font-ui">{caseItem.value}</p>
          </div>
        </div>
      </section>

      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-6">
              {paragraphs.map((p, i) => (
                <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="text-gray-light font-body text-[17px] leading-[1.8]">{p}</motion.p>
              ))}
            </div>
            <div>
              <div className="p-6 bg-navy rounded-lg border border-gold/10 sticky top-28">
                <h4 className="font-ui text-sm text-gold uppercase tracking-wider mb-4">Case Facts</h4>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between border-b border-gold/10 pb-3"><span className="text-gray-muted font-ui">Duration</span><span className="text-warm-white font-ui">{caseItem.duration}</span></div>
                  <div className="flex justify-between border-b border-gold/10 pb-3"><span className="text-gray-muted font-ui">Jurisdiction</span><span className="text-warm-white font-ui text-right max-w-[200px]">{caseItem.jurisdiction}</span></div>
                  <div className="flex justify-between border-b border-gold/10 pb-3"><span className="text-gray-muted font-ui">Value</span><span className="text-gold font-ui">{caseItem.value}</span></div>
                  <div className="flex justify-between border-b border-gold/10 pb-3"><span className="text-gray-muted font-ui">Outcome</span><span className="text-warm-white font-ui">{caseItem.outcome}</span></div>
                  <div>
                    <span className="text-gray-muted font-ui block mb-2">Lead Counsel</span>
                    {caseAttorneys.map((a) => (
                      <Link key={a.slug} to={`/attorneys/${a.slug}`} className="flex items-center space-x-3 py-2 group">
                        <img src={a.image} alt={a.name} className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-warm-white font-ui text-sm group-hover:text-gold transition-colors">{a.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Outcomes */}
      <section className="page-section bg-navy-deep">
        <div className="container-custom max-w-3xl">
          <h2 className="font-heading text-warm-white text-center mb-8">Key Outcomes</h2>
          <div className="space-y-4">
            {['Favourable judgment/award secured for the client', 'Established important legal precedent in the jurisdiction', 'Client\'s reputation and business interests fully protected'].map((outcome, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-start space-x-4 p-4 bg-navy rounded-lg border border-gold/10">
                <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-gray-light font-body">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Cases */}
      {relatedCases.length > 0 && (
        <section className="page-section bg-obsidian">
          <div className="container-custom">
            <h2 className="font-heading text-warm-white text-center mb-8">Related Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCases.map((c) => (
                <Link key={c.slug} to={`/case-results/${c.slug}`} className="p-6 bg-navy rounded-lg border border-gold/10 hover:border-gold/40 transition-all group">
                  <h4 className="font-heading text-lg text-warm-white group-hover:text-gold transition-colors mb-2">{c.title}</h4>
                  <Badge variant={getOutcomeBadgeVariant(c.outcome)}>{c.outcome}</Badge>
                  <p className="text-sm text-gray-light font-body line-clamp-2 mt-3">{c.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ConsultationCTA />
    </PageWrapper>
  );
}
