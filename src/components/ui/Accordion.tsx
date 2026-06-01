import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item) => (
        <div
          key={item.id}
          className="border border-gold-subtle rounded-lg overflow-hidden bg-navy/50"
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-navy transition-colors"
          >
            <span className="font-ui font-medium text-warm-white">{item.title}</span>
            <motion.span
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-gold" />
            </motion.span>
          </button>
          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="px-6 pb-5 text-gray-light font-body">
                  {item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
