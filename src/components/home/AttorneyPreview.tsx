import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { attorneys } from '../../data/attorneys';
import SectionHeader from '../ui/SectionHeader';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function AttorneyPreview() {
  const featuredAttorneys = attorneys.filter((a) => a.featured);

  return (
    <section className="page-section bg-navy-deep">
      <div className="container-custom">
        <SectionHeader
          title="Our Counsel"
          subtitle="Globally recognised litigators with unparalleled expertise."
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {featuredAttorneys.map((attorney) => (
            <motion.div key={attorney.slug} variants={item}>
              <Link
                to={`/attorneys/${attorney.slug}`}
                className="block bg-navy rounded-lg border border-gold/10 hover:border-gold/40 overflow-hidden transition-all duration-300 group"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={attorney.image}
                    alt={attorney.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
                  <p className="text-xs text-gray-muted font-ui mb-3">
                    {attorney.barAdmissions.join(' · ')}
                  </p>
                  <span className="inline-flex items-center text-sm font-ui text-gold group-hover:text-gold-light transition-colors">
                    View Profile <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button to="/attorneys" variant="outline">
            Meet the Full Team
          </Button>
        </div>
      </div>
    </section>
  );
}
