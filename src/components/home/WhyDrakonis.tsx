import { motion } from 'framer-motion';
import bgWhyDrakonis from '../../assets/images/bg_why_drakonis.png';
import { Check } from 'lucide-react';

const reasons = [
  'Unmatched track record across 42 jurisdictions',
  'Band 1 ranked in 8 Chambers UK categories',
  'Average 94% favourable outcome rate',
  'Direct partner involvement in every matter',
  'Full-service capability from investigation to appeal',
  'Multilingual counsel in 12 languages',
];

export default function WhyDrakonis() {
  return (
    <section className="page-section bg-navy-deep">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src={bgWhyDrakonis}
                alt="Drakonis Legal Office"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-lg" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading text-warm-white mb-8">Why Drakonis Legal?</h2>
            <div className="space-y-4 mb-10">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-gold" />
                  </div>
                  <p className="text-gray-light font-body">{reason}</p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="border-l-2 border-gold pl-6">
              <p className="text-xl font-heading italic text-warm-white leading-relaxed">
                "We do not settle for less. Neither should you."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
