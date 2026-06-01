import { motion } from 'framer-motion';
import { Briefcase, Globe, GraduationCap, DollarSign, TrendingUp, Award, ChevronDown } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import Accordion from '../components/ui/Accordion';
import Badge from '../components/ui/Badge';
import { careers } from '../data/careers';
import { formatDate } from '../lib/utils';

const benefits = [
  { icon: Briefcase, title: 'Exceptional Work', desc: 'Handle the most complex and high-profile disputes in the market from day one.' },
  { icon: Globe, title: 'Global Mobility', desc: 'Opportunities for international secondments across our five offices.' },
  { icon: GraduationCap, title: 'Elite Training', desc: 'Intensive development through the Drakonis Academy and partner mentorship.' },
  { icon: DollarSign, title: 'Competitive Remuneration', desc: 'Salaries benchmarked above City market rate with performance bonuses.' },
  { icon: TrendingUp, title: 'Partnership Track', desc: 'Clear progression milestones and transparent partnership criteria.' },
  { icon: Award, title: 'Prestige', desc: 'Join a firm ranked Band 1 by Chambers UK and in the Legal 500 Hall of Fame.' },
];

export default function Careers() {
  const accordionItems = careers.map((career) => ({
    id: career.id,
    title: `${career.title} — ${career.location}`,
    content: (
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2 mb-4">
          <Badge variant="gold">{career.type}</Badge>
          <Badge variant="outline">{career.level}</Badge>
          <Badge variant="muted">{career.department}</Badge>
        </div>
        {career.description.split('\n').map((p, i) => (
          <p key={i} className="text-gray-light font-body text-sm leading-relaxed">{p}</p>
        ))}
        <div>
          <h5 className="font-ui text-sm text-gold uppercase tracking-wider mb-3">Requirements</h5>
          <ul className="space-y-2">
            {career.requirements.map((req) => (
              <li key={req} className="flex items-start space-x-2 text-sm text-gray-light font-body">
                <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" /><span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-ui text-sm text-gold uppercase tracking-wider mb-3">Benefits</h5>
          <ul className="space-y-2">
            {career.benefits.map((ben) => (
              <li key={ben} className="flex items-start space-x-2 text-sm text-gray-light font-body">
                <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" /><span>{ben}</span>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-xs text-gray-muted font-ui">Posted: {formatDate(career.posted)}</p>
        <a href={`mailto:careers@drakonislegal.com?subject=Application: ${career.title}`} className="inline-flex items-center px-6 py-3 bg-gold text-obsidian font-ui font-semibold text-sm rounded hover:bg-gold-light transition-colors">
          Apply Now
        </a>
      </div>
    ),
  }));

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-20 bg-navy-deep">
        <div className="relative container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Careers' }]} />
          <h1 className="font-heading text-warm-white mt-6">Join Drakonis Legal</h1>
          <p className="text-xl text-gray-light font-body mt-4 max-w-3xl">We recruit exceptional talent who share our commitment to excellence in the pursuit of justice.</p>
        </div>
      </section>

      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <h2 className="font-heading text-warm-white text-center mb-12">Why Join Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 bg-navy rounded-lg border border-gold/10">
                <b.icon className="w-8 h-8 text-gold mb-4" />
                <h4 className="font-heading text-lg text-warm-white mb-2">{b.title}</h4>
                <p className="text-sm text-gray-light font-body">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-navy-deep">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-warm-white mb-6">Training & Development</h2>
              <div className="space-y-4 text-gray-light font-body leading-relaxed">
                <p>At Drakonis Legal, we believe that investing in our people is investing in our clients. Our comprehensive training and development programme ensures that every lawyer at the firm has the opportunity to reach their full potential.</p>
                <p>Our training philosophy is built on the principle of learning by doing. From their first day, our lawyers are integrated into case teams working on significant matters, gaining hands-on experience under the supervision of senior practitioners who are leaders in their fields.</p>
                <p>We supplement this on-the-job training with structured educational programmes, international secondment opportunities, and a generous external training budget that supports professional development at every stage of a career.</p>
              </div>
            </div>
            <div className="p-8 bg-navy rounded-lg border border-gold/10">
              <h4 className="font-ui text-sm text-gold uppercase tracking-wider mb-6">Training Programmes</h4>
              {['Drakonis Academy — Annual training programme', 'International Secondment Programme', 'Mentorship by Senior Partners', 'LLM/MBA sponsorship for exceptional candidates', 'Pro Bono Leadership opportunities'].map((prog) => (
                <div key={prog} className="flex items-start space-x-3 mb-4">
                  <GraduationCap className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-light font-body">{prog}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <h2 className="font-heading text-warm-white text-center mb-12">Open Positions</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion items={accordionItems} />
          </div>
        </div>
      </section>

      <section className="page-section bg-navy-deep">
        <div className="container-custom max-w-3xl">
          <h2 className="font-heading text-warm-white mb-6">Trainee Programme</h2>
          <div className="space-y-4 text-gray-light font-body leading-relaxed">
            <p>Our two-year training contract is designed for candidates who aspire to become elite litigators. The programme provides four six-month seats across our core practice areas, with guaranteed exposure to high-value, complex disputes from day one.</p>
            <p>Each trainee is supervised by a dedicated training principal at partner level, who provides ongoing guidance, feedback, and mentorship throughout the training contract. Our retention rate for qualifying trainees exceeds 90%, reflecting our commitment to developing the next generation of Drakonis Legal lawyers.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-obsidian">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="font-heading text-warm-white mb-4">Don't see the right role?</h2>
          <p className="text-gray-light font-body mb-8">We are always interested in hearing from exceptional candidates. Send your CV for our consideration.</p>
          <a href="mailto:careers@drakonislegal.com" className="inline-flex items-center px-8 py-4 bg-gold text-obsidian font-ui font-semibold rounded hover:bg-gold-light transition-colors">
            Send Speculative Application
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
