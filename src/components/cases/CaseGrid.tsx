import CaseCard from './CaseCard';
import type { Case } from '../../types';

export default function CaseGrid({ cases }: { cases: Case[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cases.map((c, i) => (
        <CaseCard key={c.slug} caseItem={c} index={i} />
      ))}
    </div>
  );
}
