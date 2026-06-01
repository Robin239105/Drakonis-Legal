import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({ title, subtitle, centered = true, light = false }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${centered ? 'text-center' : ''}`}
    >
      <h2 className={`font-heading ${light ? 'text-obsidian' : 'text-warm-white'}`}>
        {title}
      </h2>
      <div className="flex justify-center mt-4 mb-6">
        <div className="w-20 h-[2px] bg-gradient-to-r from-gold-muted via-gold to-gold-muted" />
      </div>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto font-body ${light ? 'text-gray-muted' : 'text-gray-light'}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
