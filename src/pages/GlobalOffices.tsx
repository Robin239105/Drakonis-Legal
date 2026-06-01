import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Users } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import Badge from '../components/ui/Badge';
import { offices } from '../data/offices';

export default function GlobalOffices() {
  const [activeOffice, setActiveOffice] = useState(0);
  const office = offices[activeOffice];

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-20 bg-navy-deep">
        <div className="relative container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Global Offices' }]} />
          <h1 className="font-heading text-warm-white mt-6">A Global Practice</h1>
          <p className="text-xl text-gray-light font-body mt-4">Five offices united by a single standard of excellence.</p>
        </div>
      </section>

      <section className="page-section bg-obsidian">
        <div className="container-custom">
          {/* Tabs */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {offices.map((o, i) => (
              <button key={o.city} onClick={() => setActiveOffice(i)}
                className={`px-6 py-3 text-sm font-ui tracking-wide rounded-full border transition-all ${
                  activeOffice === i ? 'bg-gold text-obsidian border-gold' : 'text-gray-light border-gold/20 hover:border-gold/50'
                }`}>{o.city}</button>
            ))}
          </div>

          {/* Detail Panel */}
          <motion.div key={office.city} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="aspect-[16/10] rounded-lg overflow-hidden">
                <img src={office.image} alt={office.city} className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="font-heading text-warm-white mb-2">{office.city}</h2>
                <p className="text-sm font-ui text-gold mb-6">{office.country} · Established {office.established}</p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                    <p className="text-gray-light font-body text-sm">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-gray-light font-body text-sm hover:text-gold transition-colors">{office.phone}</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-light font-body text-sm hover:text-gold transition-colors">{office.email}</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                    <p className="text-gray-light font-body text-sm">{office.timezone} · Mon–Fri 08:00–19:00</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-4 h-4 text-gold flex-shrink-0" />
                    <p className="text-gray-light font-body text-sm">{office.attorneys} legal professionals</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="font-ui text-sm text-gold uppercase tracking-wider mb-3">Primary Practice Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {office.focus.map((f) => <Badge key={f} variant="muted">{f}</Badge>)}
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="aspect-[16/9] bg-navy rounded-lg border border-gold/10 flex items-center justify-center">
                  <span className="text-gray-muted font-ui text-sm">Interactive Map</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-navy-deep">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-2xl font-heading italic text-gold leading-relaxed">
            "Our offices share a single standard of excellence. Whether a client engages us in London, New York, or Singapore, they receive the same depth of expertise, the same quality of service, and the same commitment to their success."
          </p>
        </div>
      </section>
    </PageWrapper>
  );
}
