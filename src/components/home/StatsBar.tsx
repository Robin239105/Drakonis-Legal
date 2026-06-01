import { stats } from '../../data/stats';
import StatCard from '../ui/StatCard';

export default function StatsBar() {
  return (
    <section className="bg-navy-deep py-16 border-y border-gold/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              <StatCard
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
              />
              {/* Divider between columns, hidden at the end of each row */}
              {(index + 1) % 4 !== 0 && index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-gold/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
