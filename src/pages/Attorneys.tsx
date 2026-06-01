import { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import AttorneyGrid from '../components/attorneys/AttorneyGrid';
import Button from '../components/ui/Button';
import { attorneys } from '../data/attorneys';

const filters = ['All', 'Partner', 'Senior Associate', 'Associate'];

export default function Attorneys() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? attorneys
    : attorneys.filter((a) => a.title.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-20 bg-navy-deep">
        <div className="relative container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Attorneys' }]} />
          <h1 className="font-heading text-warm-white mt-6">Our Counsel</h1>
          <p className="text-xl text-gray-light font-body mt-4 max-w-3xl">
            Globally recognised litigators who bring unparalleled expertise, strategic depth, and relentless dedication to every matter.
          </p>
        </div>
      </section>

      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {filters.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)}
                className={`px-5 py-2 text-sm font-ui tracking-wide rounded-full border transition-all ${
                  activeFilter === f ? 'bg-gold text-obsidian border-gold' : 'text-gray-light border-gold/20 hover:border-gold/50 hover:text-gold'
                }`}>{f}</button>
            ))}
          </div>
          <AttorneyGrid attorneys={filtered} />
        </div>
      </section>

      <section className="py-20 bg-navy-deep">
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2 className="font-heading text-warm-white mb-4">Are you an exceptional litigator?</h2>
          <p className="text-gray-light font-body mb-8">We are always seeking outstanding talent to join our global practice.</p>
          <Button to="/careers">Explore Careers</Button>
        </div>
      </section>
    </PageWrapper>
  );
}
