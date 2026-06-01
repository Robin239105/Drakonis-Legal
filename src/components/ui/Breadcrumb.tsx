import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm font-ui">
      {items.map((item, index) => (
        <span key={index} className="flex items-center space-x-2">
          {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-muted" />}
          {item.to ? (
            <Link to={item.to} className="text-gray-light hover:text-gold transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-gold">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
