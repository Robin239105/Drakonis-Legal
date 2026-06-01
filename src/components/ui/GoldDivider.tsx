import { motion } from 'framer-motion';

interface GoldDividerProps {
  className?: string;
  width?: string;
}

export default function GoldDivider({ className = '', width = 'w-20' }: GoldDividerProps) {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: '100%' }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`overflow-hidden ${className}`}
    >
      <div className={`${width} h-[2px] bg-gradient-to-r from-gold-muted via-gold to-gold-muted`} />
    </motion.div>
  );
}
