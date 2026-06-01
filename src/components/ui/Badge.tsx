import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'outline' | 'muted' | 'victory' | 'settlement' | 'acquittal';
  className?: string;
}

export default function Badge({ children, variant = 'gold', className }: BadgeProps) {
  const variants = {
    gold: 'bg-gold/20 text-gold border-gold/30',
    outline: 'bg-transparent text-gold border-gold/40',
    muted: 'bg-navy text-gray-light border-gray-muted/30',
    victory: 'bg-emerald-900/30 text-emerald-400 border-emerald-400/30',
    settlement: 'bg-gold/15 text-gold-light border-gold/30',
    acquittal: 'bg-sky-900/30 text-sky-400 border-sky-400/30',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 text-xs font-ui font-medium tracking-wide uppercase border rounded-full',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
