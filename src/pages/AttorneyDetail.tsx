import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, GraduationCap, Award, BookOpen } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import ConsultationCTA from '../components/home/ConsultationCTA';
import { attorneys } from '../data/attorneys';
import { cases } from '../data/cases';
import { practiceAreas } from '../data/practiceAreas';

export default function AttorneyDetail() {
  const { slug } = useParams();
  const attorney = attorneys.find((a) => a.slug === slug);

  if (!attorney) {
    return <PageWrapper><div className="pt-32 text-center text-warm-white"><h1>Attorney Not Found</h1></div></PageWrapper>;
  }

  const attorneyCases = cases.filter((c) => c.attorneys.includes(attorney.slug));
  const attorneyPractices = practiceAreas.filter((p) => p.attorneys.includes(attorney.slug));
  const bioParagraphs = attorney.longBio.split('\n').filter(Boolean);

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-navy-deep">
        <div className="container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Attorneys', to: '/attorneys' }, { label: attorney.name }]} />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mt-8">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-2">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img src={attorney.image} alt={attorney.name} className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-3">
              <h1 className="font-heading text-warm-white mb-2">{attorney.name}</h1>
              <p className="text-xl font-ui text-gold mb-6">{attorney.title}</p>
              
              <div className="flex items-center space-x-6 mb-6 text-sm text-gray-light font-ui">
                <a href={`tel:${attorney.phone}`} className="flex items-center space-x-2 hover:text-gold transition-colors">
                  <Phone className="w-4 h-4" /><span>{attorney.phone}</span>
                </a>
                <a href={`mailto:${attorney.email}`} className="flex items-center space-x-2 hover:text-gold transition-colors">
                  <Mail className="w-4 h-4" /><span>{attorney.email}</span>
                </a>
              </div>

              <div className="mb-6">
                <h4 className="font-ui text-xs text-gold uppercase tracking-wider mb-3">Bar Admissions</h4>
                <div className="flex flex-wrap gap-2">
                  {attorney.barAdmissions.map((bar) => <Badge key={bar} variant="outline">{bar}</Badge>)}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-ui text-xs text-gold uppercase tracking-wider mb-3">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {attorney.languages.map((lang) => <Badge key={lang} variant="muted">{lang}</Badge>)}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-ui text-xs text-gold uppercase tracking-wider mb-3">Education</h4>
                {attorney.education.map((edu) => (
                  <div key={edu.degree} className="flex items-start space-x-3 mb-2">
                    <GraduationCap className="w-4 h-4 text-gold/60 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-warm-white font-ui">{edu.degree}</p>
                      <p className="text-xs text-gray-muted font-body">{edu.institution}, {edu.year}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button to="/consultation" size="md">Schedule Consultation</Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="page-section bg-obsidian">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading text-warm-white mb-8">Biography</h2>
          <div className="space-y-6">
            {bioParagraphs.map((p, i) => (
              <motion.p key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="text-gray-light font-body text-[18px] leading-[1.8]">{p}</motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas */}
      {attorneyPractices.length > 0 && (
        <section className="page-section bg-navy-deep">
          <div className="container-custom">
            <h2 className="font-heading text-warm-white mb-8">Practice Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {attorneyPractices.map((p) => (
                <Link key={p.slug} to={`/practice-areas/${p.slug}`} className="p-6 bg-navy rounded-lg border border-gold/10 hover:border-gold/40 transition-all group">
                  <h4 className="font-heading text-lg text-warm-white group-hover:text-gold transition-colors mb-2">{p.title}</h4>
                  <p className="text-sm text-gray-light font-body line-clamp-2">{p.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Notable Cases */}
      {attorneyCases.length > 0 && (
        <section className="page-section bg-obsidian">
          <div className="container-custom">
            <h2 className="font-heading text-warm-white mb-8">Notable Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {attorneyCases.slice(0, 3).map((c) => (
                <Link key={c.slug} to={`/case-results/${c.slug}`} className="p-6 bg-navy rounded-lg border border-gold/10 hover:border-gold/40 transition-all group">
                  <h4 className="font-heading text-lg text-warm-white group-hover:text-gold transition-colors mb-2">{c.title}</h4>
                  <Badge variant="settlement">{c.outcome}</Badge>
                  <p className="text-sm text-gray-light font-body line-clamp-2 mt-3">{c.summary}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Awards & Publications */}
      <section className="page-section bg-navy-deep">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-warm-white mb-6 flex items-center space-x-3">
                <Award className="w-6 h-6 text-gold" /><span>Awards & Recognition</span>
              </h2>
              <ul className="space-y-3">
                {attorney.awards.map((award) => (
                  <li key={award} className="flex items-start space-x-3">
                    <span className="w-2 h-2 mt-2 bg-gold rounded-full flex-shrink-0" />
                    <span className="text-gray-light font-body">{award}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-warm-white mb-6 flex items-center space-x-3">
                <BookOpen className="w-6 h-6 text-gold" /><span>Publications</span>
              </h2>
              <ul className="space-y-3">
                {attorney.publications.map((pub) => (
                  <li key={pub} className="flex items-start space-x-3">
                    <span className="w-2 h-2 mt-2 bg-gold rounded-full flex-shrink-0" />
                    <span className="text-gray-light font-body">{pub}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </PageWrapper>
  );
}
