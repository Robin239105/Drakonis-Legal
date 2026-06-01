import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { insights } from '../../data/insights';
import { formatDate } from '../../lib/utils';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function NewsPreview() {
  const previewInsights = insights.slice(0, 3);

  return (
    <section className="page-section bg-obsidian">
      <div className="container-custom">
        <SectionHeader
          title="Legal Insights"
          subtitle="Analysis and commentary from our leading practitioners."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {previewInsights.map((insight, index) => (
            <motion.div
              key={insight.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={`/insights/${insight.slug}`}
                className="block bg-navy rounded-lg border border-gold/10 hover:border-gold/40 overflow-hidden transition-all duration-300 group h-full"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-3">{insight.category}</Badge>
                  <h3 className="font-heading text-lg text-warm-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
                    {insight.title}
                  </h3>
                  <div className="flex items-center space-x-4 text-xs font-ui text-gray-muted mb-3">
                    <span>{insight.author}</span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(insight.date)}</span>
                    </span>
                  </div>
                  <p className="text-sm text-gray-light font-body line-clamp-2 mb-4">
                    {insight.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm font-ui text-gold group-hover:text-gold-light transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/insights" variant="outline">
            View All Insights
          </Button>
        </div>
      </div>
    </section>
  );
}
