import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Badge from '../ui/Badge';
import type { Case } from '../../types';

function getOutcomeBadgeVariant(outcome: string) {
  switch (outcome) {
    case 'Victory': return 'victory' as const;
    case 'Acquittal': case 'Cleared': return 'acquittal' as const;
    default: return 'settlement' as const;
  }
}

export default function CaseCard({ caseItem, index }: { caseItem: Case; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <Link
        to={`/case-results/${caseItem.slug}`}
        className="block p-8 bg-navy rounded-lg border border-gold/10 hover:border-gold/40 transition-all duration-300 group h-full"
      >
        <div className="flex items-center justify-between mb-4">
          <Badge variant="outline">{caseItem.category}</Badge>
          <div className="flex items-center space-x-3">
            <span className="text-xs font-ui text-gray-muted">{caseItem.year}</span>
            <span className="text-xs font-ui text-gray-muted">{caseItem.jurisdiction}</span>
          </div>
        </div>
        <h3 className="font-heading text-lg text-warm-white mb-3 group-hover:text-gold transition-colors">{caseItem.title}</h3>
        <div className="flex items-center space-x-3 mb-4">
          <Badge variant={getOutcomeBadgeVariant(caseItem.outcome)}>{caseItem.outcome}</Badge>
          <span className="text-sm font-ui text-gold">{caseItem.value}</span>
        </div>
        <p className="text-sm text-gray-light font-body mb-5 line-clamp-2">{caseItem.summary}</p>
        <span className="inline-flex items-center text-sm font-ui text-gold group-hover:text-gold-light transition-colors">
          Read More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </motion.div>
  );
}
