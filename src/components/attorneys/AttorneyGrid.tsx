import AttorneyCard from './AttorneyCard';
import type { Attorney } from '../../types';

export default function AttorneyGrid({ attorneys }: { attorneys: Attorney[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {attorneys.map((attorney, index) => (
        <AttorneyCard key={attorney.slug} attorney={attorney} index={index} />
      ))}
    </div>
  );
}
