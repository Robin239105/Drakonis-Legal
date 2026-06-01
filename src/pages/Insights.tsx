import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Mail } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import Badge from '../components/ui/Badge';
import { insights } from '../data/insights';
import { formatDate } from '../lib/utils';

const categories = ['All', 'Litigation', 'Regulatory', 'Arbitration', 'Corporate', 'Technology', 'Restructuring'];

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [subscribed, setSubscribed] = useState(false);
  const filtered = activeCategory === 'All' ? insights : insights.filter((i) => i.category === activeCategory);
  const featured = filtered[0];
  const remaining = filtered.slice(1);

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-20 bg-navy-deep">
        <div className="relative container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Insights' }]} />
          <h1 className="font-heading text-warm-white mt-6">Legal Insights</h1>
          <p className="text-xl text-gray-light font-body mt-4">Analysis and commentary from our leading practitioners.</p>
        </div>
      </section>

      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-sm font-ui tracking-wide rounded-full border transition-all ${
                  activeCategory === cat ? 'bg-gold text-obsidian border-gold' : 'text-gray-light border-gold/20 hover:border-gold/50'
                }`}>{cat}</button>
            ))}
          </div>

          {featured && (
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <Link to={`/insights/${featured.slug}`} className="block bg-navy rounded-lg border border-gold/10 hover:border-gold/40 overflow-hidden transition-all group">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="aspect-[16/10] md:aspect-auto overflow-hidden">
                    <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge variant="outline" className="mb-4 self-start">{featured.category}</Badge>
                    <h2 className="font-heading text-2xl text-warm-white mb-4 group-hover:text-gold transition-colors">{featured.title}</h2>
                    <div className="flex items-center space-x-4 text-sm font-ui text-gray-muted mb-4">
                      <span>{featured.author}</span>
                      <span className="flex items-center space-x-1"><Calendar className="w-3 h-3" /><span>{formatDate(featured.date)}</span></span>
                      <span>{featured.readTime}</span>
                    </div>
                    <p className="text-gray-light font-body mb-6">{featured.excerpt}</p>
                    <span className="inline-flex items-center text-sm font-ui text-gold">Read Article <ArrowRight className="w-4 h-4 ml-2" /></span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {remaining.map((insight, i) => (
              <motion.div key={insight.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link to={`/insights/${insight.slug}`} className="block bg-navy rounded-lg border border-gold/10 hover:border-gold/40 overflow-hidden transition-all group h-full">
                  <div className="aspect-[16/9] overflow-hidden">
                    <img src={insight.image} alt={insight.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-6">
                    <Badge variant="outline" className="mb-3">{insight.category}</Badge>
                    <h3 className="font-heading text-lg text-warm-white mb-3 group-hover:text-gold transition-colors line-clamp-2">{insight.title}</h3>
                    <div className="flex items-center space-x-3 text-xs font-ui text-gray-muted mb-3">
                      <span>{insight.author}</span><span>{formatDate(insight.date)}</span>
                    </div>
                    <p className="text-sm text-gray-light font-body line-clamp-2">{insight.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-navy-deep">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="font-heading text-warm-white mb-4">Subscribe to Drakonis Insights</h2>
          <p className="text-gray-light font-body mb-8">Receive our latest legal analysis and commentary directly in your inbox.</p>
          {subscribed ? (
            <p className="text-gold font-ui">Thank you for subscribing. You will receive our next insight by email.</p>
          ) : (
            <div className="flex gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 bg-navy border border-gold/20 rounded px-4 py-3 text-warm-white font-body text-sm focus:border-gold focus:outline-none" />
              <button onClick={() => setSubscribed(true)} className="bg-gold text-obsidian font-ui font-semibold px-6 py-3 rounded hover:bg-gold-light transition-colors flex items-center space-x-2">
                <Mail className="w-4 h-4" /><span>Subscribe</span>
              </button>
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  );
}
