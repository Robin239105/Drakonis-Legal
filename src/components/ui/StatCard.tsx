import CountUpImport from 'react-countup';
import { useInView } from 'react-intersection-observer';

// react-countup ships CJS; under Vite's interop the default import resolves to
// the module object, so unwrap the nested default to get the component.
const CountUp = ((CountUpImport as unknown as { default?: typeof CountUpImport })
  .default ?? CountUpImport) as typeof CountUpImport;

interface StatCardProps {
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
}

export default function StatCard({ value, prefix = '', suffix, label }: StatCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="text-center px-4">
      <div className="text-3xl md:text-4xl font-heading font-bold text-gold mb-2 whitespace-nowrap">
        {prefix}
        {inView ? (
          <CountUp end={value} duration={2.5} separator="," />
        ) : (
          '0'
        )}
        {suffix}
      </div>
      <div className="text-sm font-ui text-gray-light tracking-wide uppercase">
        {label}
      </div>
    </div>
  );
}
