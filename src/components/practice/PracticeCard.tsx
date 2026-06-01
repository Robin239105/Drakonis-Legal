import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { practiceAreas } from '../../data/practiceAreas';
import type { PracticeArea } from '../../types';

interface PracticeCardProps {
  area: PracticeArea;
  index: number;
}

export default function PracticeCard({ area, index }: PracticeCardProps) {
  const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[area.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/practice-areas/${area.slug}`}
        className="block bg-navy rounded-lg border border-gold/10 hover:border-gold/40 overflow-hidden transition-all duration-300 group"
      >
        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={area.image}
            alt={area.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-8">
          <div className="flex items-center space-x-3 mb-4">
            {IconComponent && <IconComponent className="w-6 h-6 text-gold" />}
            <h3 className="font-heading text-xl text-warm-white group-hover:text-gold transition-colors">
              {area.title}
            </h3>
          </div>
          <p className="text-sm text-gray-light font-body mb-5 leading-relaxed">
            {area.fullDescription.split('\n')[0]}
          </p>
          <div className="flex flex-wrap gap-2 mb-5">
            {area.keyServices.slice(0, 4).map((service) => (
              <span key={service} className="text-xs font-ui text-gray-muted bg-navy-deep px-3 py-1 rounded-full">
                {service}
              </span>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {area.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-lg font-heading font-bold text-gold">{stat.value}</div>
                  <div className="text-[10px] font-ui text-gray-muted uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
            <span className="inline-flex items-center text-sm font-ui text-gold group-hover:text-gold-light transition-colors">
              Explore <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
