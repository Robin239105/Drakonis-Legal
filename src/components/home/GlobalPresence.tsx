import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import { offices } from '../../data/offices';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';

export default function GlobalPresence() {
  return (
    <section className="page-section bg-navy-deep">
      <div className="container-custom">
        <SectionHeader
          title="A Global Practice"
        />

        {/* Decorative World Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-4xl mb-16 h-48 md:h-64"
        >
          {/* Simplified world map outline */}
          <svg viewBox="0 0 800 400" className="w-full h-full opacity-10" fill="none">
            <ellipse cx="400" cy="200" rx="380" ry="180" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
            <path d="M100,180 Q200,120 300,160 T500,140 T700,180" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
            <path d="M150,220 Q250,260 350,240 T550,260 T720,220" stroke="currentColor" strokeWidth="0.5" className="text-gold" />
          </svg>
          
          {/* Office markers */}
          {[
            { city: 'London', x: '47%', y: '28%' },
            { city: 'New York', x: '27%', y: '35%' },
            { city: 'Dubai', x: '58%', y: '48%' },
            { city: 'Singapore', x: '72%', y: '58%' },
            { city: 'Hong Kong', x: '76%', y: '45%' },
          ].map((marker) => (
            <div
              key={marker.city}
              className="absolute flex flex-col items-center"
              style={{ left: marker.x, top: marker.y }}
            >
              <div className="w-3 h-3 bg-gold rounded-full shadow-lg shadow-gold/30 animate-pulse" />
              <span className="text-[10px] font-ui text-gold mt-1 whitespace-nowrap">{marker.city}</span>
            </div>
          ))}
        </motion.div>

        {/* Office Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {offices.map((office, index) => (
            <motion.div
              key={office.city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-5 bg-navy rounded-lg border border-gold/10 text-center"
            >
              <h4 className="font-heading text-lg text-warm-white mb-1">{office.city}</h4>
              <p className="text-xs font-ui text-gray-muted mb-3">{office.country}</p>
              <div className="space-y-1.5 text-xs text-gray-light">
                <p className="flex items-center justify-center space-x-1.5">
                  <Phone className="w-3 h-3 text-gold/60" />
                  <span>{office.phone}</span>
                </p>
                <p className="flex items-center justify-center space-x-1.5">
                  <Mail className="w-3 h-3 text-gold/60" />
                  <span className="truncate">{office.email}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button to="/global-offices" variant="outline">
            View All Offices
          </Button>
        </div>
      </div>
    </section>
  );
}
