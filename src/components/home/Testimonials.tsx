import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import SectionHeader from '../ui/SectionHeader';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export default function Testimonials() {
  return (
    <section className="page-section bg-navy-deep">
      <div className="container-custom">
        <SectionHeader
          title="Client Testimonials"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={item}
              className="relative p-8 bg-navy rounded-lg border border-gold/10"
            >
              <Quote className="w-10 h-10 text-gold/20 mb-4" />
              <p className="text-gray-light font-body text-[15px] leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <div>
                <p className="font-ui text-sm font-medium text-warm-white">
                  {testimonial.name}
                </p>
                <p className="text-xs font-ui text-gray-muted">
                  {testimonial.role}, {testimonial.company}
                </p>
                <p className="text-xs font-ui text-gold/60 mt-1">
                  {testimonial.matterType}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
