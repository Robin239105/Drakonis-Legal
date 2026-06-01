import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { practiceAreas } from '../../data/practiceAreas';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function PracticeAreaPreview() {
  const previewAreas = practiceAreas.slice(0, 6);

  return (
    <section className="page-section bg-obsidian">
      <div className="container-custom">
        <SectionHeader
          title="Areas of Excellence"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {previewAreas.map((area) => {
            const IconComponent = (LucideIcons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[area.icon];
            return (
              <motion.div key={area.slug} variants={item}>
                <Link
                  to={`/practice-areas/${area.slug}`}
                  className="block p-8 bg-navy rounded-lg border border-gold/10 hover:border-gold/40 transition-all duration-300 group h-full"
                >
                  {IconComponent && (
                    <IconComponent className="w-8 h-8 text-gold mb-5 group-hover:text-gold-light transition-colors" />
                  )}
                  <h3 className="font-heading text-xl text-warm-white mb-3 group-hover:text-gold transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-gray-light font-body mb-5 line-clamp-2">
                    {area.shortDescription}
                  </p>
                  <span className="inline-flex items-center text-sm font-ui text-gold group-hover:text-gold-light transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center">
          <Button to="/practice-areas" variant="outline">
            View All Practice Areas
          </Button>
        </div>
      </div>
    </section>
  );
}
