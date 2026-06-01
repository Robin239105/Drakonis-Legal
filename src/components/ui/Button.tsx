import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  className,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-ui tracking-tight transition-all duration-300 ease-out';
  
  const variants = {
    primary: 'bg-gold text-obsidian hover:bg-gold-light font-semibold',
    outline: 'border border-gold text-gold hover:bg-gold hover:text-obsidian',
    ghost: 'text-gold hover:text-gold-light',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], disabled && 'opacity-50 cursor-not-allowed', className);

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
