import { useState } from 'react';
import { Lock, Zap, Globe, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import PageWrapper from '../components/layout/PageWrapper';
import Breadcrumb from '../components/ui/Breadcrumb';
import ConsultationForm from '../components/consultation/ConsultationForm';
import FormSuccess from '../components/consultation/FormSuccess';
import { offices } from '../data/offices';

export default function Consultation() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageWrapper>
      <section className="relative pt-32 pb-20 bg-navy-deep">
        <div className="relative container-custom px-4 md:px-8">
          <Breadcrumb items={[{ label: 'Home', to: '/' }, { label: 'Consultation' }]} />
          <h1 className="font-heading text-warm-white mt-6">Schedule a Consultation</h1>
          <p className="text-xl text-gray-light font-body mt-4 max-w-2xl">All enquiries are handled with absolute discretion.</p>
          <div className="flex flex-wrap gap-8 mt-8">
            {[
              { icon: Lock, text: 'Strictly Confidential' },
              { icon: Zap, text: 'Response Within 24 Hours' },
              { icon: Globe, text: 'Available in 42 Jurisdictions' },
            ].map((item) => (
              <div key={item.text} className="flex items-center space-x-3 text-sm text-gray-light font-ui">
                <item.icon className="w-4 h-4 text-gold" /><span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-obsidian">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {submitted ? <FormSuccess /> : <ConsultationForm onSuccess={() => setSubmitted(true)} />}
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-navy rounded-lg border border-gold/10">
                <h4 className="font-ui text-sm text-gold uppercase tracking-wider mb-4">What to Expect</h4>
                {[
                  { step: '01', title: 'Submit your enquiry', desc: 'Complete the form with details of your matter.' },
                  { step: '02', title: 'Conflicts check', desc: 'We conduct a conflicts review within 24 hours.' },
                  { step: '03', title: 'Partner consultation call', desc: 'A partner contacts you to discuss your matter.' },
                  { step: '04', title: 'Engagement letter', desc: 'We issue terms and commence work immediately.' },
                ].map((item) => (
                  <div key={item.step} className="flex items-start space-x-4 mb-5 last:mb-0">
                    <span className="text-lg font-heading font-bold text-gold">{item.step}</span>
                    <div>
                      <p className="text-sm font-ui text-warm-white">{item.title}</p>
                      <p className="text-xs text-gray-muted font-body">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-navy rounded-lg border border-gold/10">
                <h4 className="font-ui text-sm text-gold uppercase tracking-wider mb-4">Office Contacts</h4>
                {offices.slice(0, 3).map((office) => (
                  <div key={office.city} className="mb-4 last:mb-0">
                    <p className="text-sm font-ui text-warm-white">{office.city}</p>
                    <p className="text-xs text-gray-muted font-body flex items-center space-x-1 mt-1">
                      <Phone className="w-3 h-3" /><span>{office.phone}</span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-navy rounded-lg border border-red-500/20">
                <h4 className="font-ui text-sm text-red-400 uppercase tracking-wider mb-2">Emergency Contact</h4>
                <p className="text-sm text-warm-white font-ui">For urgent matters:</p>
                <a href="tel:+442070000000" className="text-lg font-heading text-gold hover:text-gold-light transition-colors">
                  +44 20 7000 0000
                </a>
                <p className="text-xs text-gray-muted font-body mt-1">Available 24 hours, 7 days a week</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
