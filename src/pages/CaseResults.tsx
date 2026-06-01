import { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import CaseGrid from '../components/cases/CaseGrid';
import CaseFilter from '../components/cases/CaseFilter';
import StatCard from '../components/ui/StatCard';
import { cases } from '../data/cases';

const categories = ['All', 'Corporate', 'Technology', 'Criminal', 'Regulatory', 'Property', 'Arbitration', 'Restructuring', 'Private Client'];

export default function CaseResults() {
  const [activeCategory, setActiveCategory] = useState('All');
  const filtered = activeCategory === 'All' ? cases : cases.filter((c) => c.category === activeCategory);

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-20 bg-navy-deep">
        <div className="relative container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Case Results' }]} />
          <h1 className="font-heading text-warm-white mt-6">Notable Matters</h1>
          <p className="text-xl text-gray-light font-body mt-4">Results speak louder than words.</p>
        </div>
      </section>

      <section className="py-12 bg-navy-deep border-b border-gold/10">
        <div className="container-custom px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value={4200} prefix="£" suffix="M+" label="Total Recovered" />
            <StatCard value={850} suffix="+" label="Cases Closed" />
            <StatCard value={97} suffix="%" label="Success Rate" />
            <StatCard value={42} suffix="" label="Jurisdictions" />
          </div>
        </div>
      </section>

      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <CaseFilter categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          <CaseGrid cases={filtered} />
          <p className="text-center text-xs text-gray-muted font-body mt-12 max-w-2xl mx-auto">
            Case results are illustrative of firm capability. Past results do not guarantee future outcomes.
            All case names are fictional and used for illustrative purposes only.
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
