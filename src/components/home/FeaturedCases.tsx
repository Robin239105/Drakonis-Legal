import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cases } from '../../data/cases';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

function getOutcomeBadgeVariant(outcome: string) {
  switch (outcome) {
    case 'Victory': return 'victory' as const;
    case 'Acquittal': return 'acquittal' as const;
    default: return 'settlement' as const;
  }
}

export default function FeaturedCases() {
  const featuredCases = cases.filter((c) => c.featured);

  return (
    <section className="page-section bg-obsidian">
      <div className="container-custom">
        <SectionHeader
          title="Notable Matters"
          subtitle="A selection of landmark cases from our extensive litigation record."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {featuredCases.map((caseItem) => (
            <motion.div key={caseItem.slug} variants={item}>
              <Link
                to={`/case-results/${caseItem.slug}`}
                className="block p-8 bg-navy rounded-lg border border-gold/10 hover:border-gold/40 transition-all duration-300 group h-full"
              >
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline">{caseItem.category}</Badge>
                  <span className="text-xs font-ui text-gray-muted">{caseItem.year}</span>
                </div>
                <h3 className="font-heading text-lg text-warm-white mb-2 group-hover:text-gold transition-colors">
                  {caseItem.title}
                </h3>
                <div className="flex items-center space-x-3 mb-4">
                  <Badge variant={getOutcomeBadgeVariant(caseItem.outcome)}>
                    {caseItem.outcome}
                  </Badge>
                  <span className="text-sm font-ui text-gold">{caseItem.value}</span>
                </div>
                <p className="text-sm text-gray-light font-body mb-5 line-clamp-2">
                  {caseItem.summary}
                </p>
                <span className="inline-flex items-center text-sm font-ui text-gold group-hover:text-gold-light transition-colors">
                  Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button to="/case-results" variant="outline">
            View All Cases
          </Button>
        </div>
      </div>
    </section>
  );
}
