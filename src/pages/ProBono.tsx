import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import StatCard from '../components/ui/StatCard';

const focusAreas = [
  { title: 'Refugee & Immigration Assistance', desc: 'Providing legal representation to asylum seekers and refugees facing deportation. Our team has secured protection for over 60 individuals and families fleeing persecution.', cases: '60+ clients represented', lead: 'Lyra Ashwood, Partner' },
  { title: 'Domestic Violence Protection Orders', desc: 'Assisting victims of domestic violence in obtaining protective orders and navigating the family court system. We provide urgent representation within 24 hours of instruction.', cases: '45 protection orders obtained', lead: 'Naomi Aldric, Associate' },
  { title: 'Wrongful Conviction Appeals', desc: 'Working with the Criminal Cases Review Commission and Innocence Project UK to identify and appeal potential wrongful convictions.', cases: '8 convictions overturned', lead: 'Seraphina Voss, Senior Partner' },
  { title: 'Small Business Legal Clinic', desc: 'Providing free legal advice to small businesses and social enterprises on corporate governance, contract disputes, and employment law through monthly clinic sessions.', cases: '120+ businesses advised', lead: 'Riven Holt, Associate' },
];

const partners = ['LawWorks', 'Advocate', 'The Free Representation Unit', 'Citizens Advice Bureau', 'Refugee Action', 'Innocence Project UK'];

export default function ProBono() {
  return (
    <PageWrapper>
      <section className="relative pt-32 pb-20 bg-navy-deep">
        <div className="relative container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Pro Bono' }]} />
          <h1 className="font-heading text-warm-white mt-6">Pro Bono & Access to Justice</h1>
        </div>
      </section>

      <section className="page-section bg-obsidian">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6 text-gray-light font-body leading-relaxed">
            <p>Drakonis Legal believes that access to justice is a fundamental right, not a privilege. Our pro bono programme reflects our conviction that legal expertise should be deployed not only in the service of those who can afford it but also in the service of those who need it most.</p>
            <p>Every lawyer at Drakonis Legal is encouraged to dedicate a minimum of 50 hours per year to pro bono work. Our pro bono committee, chaired by a senior partner, identifies matters that align with our expertise and where our involvement can make a meaningful difference to individuals and communities.</p>
            <p>Since establishing our formal pro bono programme in 2010, we have contributed over £2.4 million in legal services annually and served over 180 pro bono clients. Our pro bono work has resulted in landmark outcomes including the overturn of wrongful convictions, the protection of vulnerable individuals, and the support of social enterprises that create economic opportunity in underserved communities.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-deep">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <StatCard value={2.4} prefix="£" suffix="M" label="Annual Value" />
            <StatCard value={4200} suffix="+" label="Pro Bono Hours" />
            <StatCard value={180} suffix="+" label="Clients Served" />
          </div>
        </div>
      </section>

      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <h2 className="font-heading text-warm-white text-center mb-12">Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {focusAreas.map((area, i) => (
              <motion.div key={area.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="p-8 bg-navy rounded-lg border border-gold/10">
                <h4 className="font-heading text-xl text-warm-white mb-3">{area.title}</h4>
                <p className="text-sm text-gray-light font-body leading-relaxed mb-4">{area.desc}</p>
                <div className="flex items-center justify-between text-xs font-ui">
                  <span className="text-gold">{area.cases}</span>
                  <span className="text-gray-muted">{area.lead}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-navy-deep">
        <div className="container-custom">
          <h4 className="font-ui text-sm text-gold uppercase tracking-wider text-center mb-8">Partner Organisations</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map((partner) => (
              <div key={partner} className="px-5 py-2.5 border border-gold/20 rounded text-sm font-ui text-gold/70 tracking-wide">{partner}</div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
