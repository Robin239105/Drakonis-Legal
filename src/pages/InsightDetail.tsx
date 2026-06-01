import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, MessageCircle, Share2, Copy, ArrowRight } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import Badge from '../components/ui/Badge';
import { insights } from '../data/insights';
import { attorneys } from '../data/attorneys';
import { formatDate } from '../lib/utils';

export default function InsightDetail() {
  const { slug } = useParams();
  const insight = insights.find((i) => i.slug === slug);

  if (!insight) {
    return <PageWrapper><div className="pt-32 text-center text-warm-white"><h1>Article Not Found</h1></div></PageWrapper>;
  }

  const author = attorneys.find((a) => a.slug === insight.authorSlug);
  const relatedInsights = insights.filter((i) => i.slug !== insight.slug && i.category === insight.category).slice(0, 3);
  
  // Split content and find the blockquote
  const contentParts = insight.content.split(/> "(.+?)"/);

  return (
    <PageWrapper>
      <section className="pt-32 pb-16 bg-navy-deep">
        <div className="container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Insights', to: '/insights' }, { label: insight.title }]} />
          <div className="max-w-4xl mt-8">
            <Badge variant="outline" className="mb-4">{insight.category}</Badge>
            <h1 className="font-heading text-warm-white text-3xl md:text-4xl leading-tight mb-6">{insight.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-sm font-ui text-gray-muted">
              {author && (
                <Link to={`/attorneys/${author.slug}`} className="flex items-center space-x-3 hover:text-gold transition-colors">
                  <img src={author.image} alt={author.name} className="w-8 h-8 rounded-full object-cover" />
                  <span>{author.name}</span>
                </Link>
              )}
              <span className="flex items-center space-x-1"><Calendar className="w-3.5 h-3.5" /><span>{formatDate(insight.date)}</span></span>
              <span className="flex items-center space-x-1"><Clock className="w-3.5 h-3.5" /><span>{insight.readTime}</span></span>
            </div>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href={`mailto:enquiries@drakonislegal.com?subject=${encodeURIComponent(`Re: ${insight.title}`)}`}
                title="Contact us about this article"
                className="p-2 border border-gold/20 rounded hover:border-gold/50 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-gray-muted" />
              </a>
              <button
                type="button"
                title="Share"
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({ title: insight.title, url: window.location.href }).catch(() => {});
                  } else {
                    navigator.clipboard?.writeText(window.location.href);
                  }
                }}
                className="p-2 border border-gold/20 rounded hover:border-gold/50 transition-colors"
              >
                <Share2 className="w-4 h-4 text-gray-muted" />
              </button>
              <button
                type="button"
                title="Copy link"
                onClick={() => navigator.clipboard?.writeText(window.location.href)}
                className="p-2 border border-gold/20 rounded hover:border-gold/50 transition-colors"
              >
                <Copy className="w-4 h-4 text-gray-muted" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="page-section bg-obsidian">
        <div className="max-w-[720px] mx-auto px-4">
          {insight.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('> ')) {
              const quoteText = paragraph.replace(/^> /, '').replace(/"/g, '');
              return (
                <motion.blockquote key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="border-l-3 border-gold pl-8 py-4 my-10">
                  <p className="text-xl font-heading italic text-gold leading-relaxed">{quoteText}</p>
                </motion.blockquote>
              );
            }
            return (
              <motion.p key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 }}
                className="text-gray-light font-body text-[18px] leading-[1.9] mb-6">{paragraph}</motion.p>
            );
          })}
        </div>
      </section>

      {/* Author Card */}
      {author && (
        <section className="py-16 bg-navy-deep">
          <div className="max-w-[720px] mx-auto px-4">
            <div className="p-8 bg-navy rounded-lg border border-gold/10">
              <div className="flex items-start space-x-6">
                <img src={author.image} alt={author.name} className="w-16 h-16 rounded-full object-cover flex-shrink-0" />
                <div>
                  <h4 className="font-heading text-lg text-warm-white">{author.name}</h4>
                  <p className="text-sm font-ui text-gold mb-3">{author.title}</p>
                  <p className="text-sm text-gray-light font-body line-clamp-3">{author.bio.split('\n')[0]}</p>
                  <Link to={`/attorneys/${author.slug}`} className="inline-flex items-center text-sm font-ui text-gold hover:text-gold-light mt-3 transition-colors">
                    View Full Profile <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Tags */}
      <section className="py-8 bg-obsidian">
        <div className="max-w-[720px] mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {insight.tags.map((tag) => (
              <Badge key={tag} variant="muted">{tag}</Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      {relatedInsights.length > 0 && (
        <section className="page-section bg-navy-deep">
          <div className="container-custom">
            <h2 className="font-heading text-warm-white text-center mb-8">Related Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedInsights.map((ri) => (
                <Link key={ri.slug} to={`/insights/${ri.slug}`} className="p-6 bg-navy rounded-lg border border-gold/10 hover:border-gold/40 transition-all group">
                  <Badge variant="outline" className="mb-3">{ri.category}</Badge>
                  <h4 className="font-heading text-lg text-warm-white group-hover:text-gold transition-colors mb-2">{ri.title}</h4>
                  <p className="text-xs font-ui text-gray-muted">{ri.author} · {formatDate(ri.date)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageWrapper>
  );
}
