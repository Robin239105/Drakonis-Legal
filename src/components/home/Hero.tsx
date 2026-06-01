import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Lock, ArrowRight, Phone } from 'lucide-react';
import bgHero from '../../assets/images/bg_hero.png';
import Button from '../ui/Button';
import { practiceAreas } from '../../data/practiceAreas';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const trust = ['Chambers UK Band 1', 'Legal 500 Hall of Fame', '£4.2B+ Recovered'];

export default function Hero() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ fullName: '', email: '', practiceArea: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/consultation', { state: form });
  };

  const fieldStyles =
    'w-full h-[46px] bg-obsidian/60 border border-gold/20 rounded px-4 py-3 text-warm-white font-body text-sm leading-5 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40 transition-colors placeholder:text-gray-muted';

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with slow ken-burns zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgHero})` }}
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 18, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/90 to-obsidian/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/30" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left — messaging */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={item} className="flex items-center gap-4 mb-7">
              <span className="h-px w-10 bg-gold" />
              <span className="text-[11px] sm:text-xs font-ui tracking-[0.3em] uppercase text-gold">
                Est. 1987 · Five Global Offices
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-heading text-warm-white leading-[1.05] mb-6 text-5xl md:text-6xl lg:text-7xl"
            >
              Power. Precision.
              <br />
              <span className="bg-gradient-to-r from-gold-light via-gold to-gold-muted bg-clip-text text-transparent">
                Precedent.
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="text-lg md:text-xl text-gray-light font-body max-w-xl mb-8 leading-relaxed"
            >
              Elite litigation counsel for corporations, institutions, and
              private clients — across 42 jurisdictions, when the matter cannot
              be lost.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-10">
              {trust.map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-2 text-xs font-ui tracking-wide uppercase text-gold/80"
                >
                  <span className="w-1.5 h-1.5 rotate-45 bg-gold/70" />
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
              <Button to="/practice-areas" variant="outline" size="lg" className="w-full sm:w-auto whitespace-nowrap">
                Our Practice Areas
              </Button>
              <a
                href="tel:+442070000000"
                className="flex items-center gap-2 text-sm font-ui text-gray-light hover:text-gold transition-colors whitespace-nowrap"
              >
                <Phone size={15} className="text-gold" />
                +44 20 7000 0000
              </a>
            </motion.div>
          </motion.div>

          {/* Right — consultation mini-form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="bg-navy-deep/80 backdrop-blur-md border border-gold/20 rounded-xl p-7 shadow-2xl shadow-black/50">
              <h2 className="font-heading text-2xl text-warm-white mb-1">
                Request a Consultation
              </h2>
              <p className="text-sm text-gray-light mb-6">
                A partner responds within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  required
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  className={fieldStyles}
                  placeholder="Full name"
                />
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={fieldStyles}
                  placeholder="Email address"
                />
                <select
                  required
                  value={form.practiceArea}
                  onChange={(e) => setForm({ ...form, practiceArea: e.target.value })}
                  className={`${fieldStyles} ${form.practiceArea ? '' : 'text-gray-muted'}`}
                >
                  <option value="">Select your matter</option>
                  {practiceAreas.map((area) => (
                    <option key={area.slug} value={area.slug} className="text-warm-white">
                      {area.title}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-gold text-obsidian font-ui font-semibold tracking-tight py-3.5 rounded hover:bg-gold-light transition-colors"
                >
                  Request Confidential Consultation
                  <ArrowRight size={16} />
                </button>
              </form>

              <p className="flex items-center gap-2 text-xs text-gray-muted mt-4">
                <Lock size={13} className="text-gold/70" />
                Strictly confidential. No obligation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
