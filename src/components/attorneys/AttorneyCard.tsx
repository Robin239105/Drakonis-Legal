import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Badge from '../ui/Badge';
import type { Attorney } from '../../types';

export default function AttorneyCard({ attorney, index }: { attorney: Attorney; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/attorneys/${attorney.slug}`}
        className="block bg-navy rounded-lg border border-gold/10 hover:border-gold/40 overflow-hidden transition-all duration-300 group hover:scale-[1.02]"
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <img src={attorney.image} alt={attorney.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="font-heading text-lg text-warm-white">{attorney.name}</h3>
            <p className="text-sm font-ui text-gold mt-1">{attorney.title}</p>
          </div>
        </div>
        <div className="p-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {attorney.specialty.slice(0, 2).map((spec) => (
              <Badge key={spec} variant="muted">{spec}</Badge>
            ))}
          </div>
          <p className="text-xs text-gray-muted font-ui mb-2">{attorney.barAdmissions.join(' · ')}</p>
          <p className="text-xs text-gray-muted font-ui mb-3">{attorney.languages.join(', ')}</p>
          <span className="inline-flex items-center text-sm font-ui text-gold group-hover:text-gold-light transition-colors">
            View Profile <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
