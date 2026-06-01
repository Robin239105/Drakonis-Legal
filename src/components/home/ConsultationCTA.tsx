import { motion } from 'framer-motion';
import { Lock, Zap, Globe } from 'lucide-react';
import Button from '../ui/Button';

export default function ConsultationCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-navy-deep" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(184,151,58,0.1) 35px, rgba(184,151,58,0.1) 36px)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-warm-white mb-4">Begin Your Matter Today</h2>
          <p className="text-lg text-gray-light font-body mb-10">
            Confidential consultations available within 24 hours.
          </p>

          <Button to="/consultation" size="lg" className="mb-12">
            Schedule a Consultation
          </Button>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center space-x-3 text-sm text-gray-light font-ui">
              <Lock className="w-4 h-4 text-gold" />
              <span>Strictly Confidential</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-light font-ui">
              <Zap className="w-4 h-4 text-gold" />
              <span>Response Within 24 Hours</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-light font-ui">
              <Globe className="w-4 h-4 text-gold" />
              <span>Available in 42 Jurisdictions</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
