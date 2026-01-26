import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick,
  className = ''
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all rounded-lg';
  
  const variantStyles = {
    primary: 'bg-[var(--color-primary)] text-white hover:bg-[#0a1a30] active:scale-95',
    secondary: 'bg-white text-[var(--color-text)] border border-[var(--color-border)] hover:bg-gray-50 active:scale-95',
    accent: 'bg-[var(--color-accent-cyan)] text-[var(--color-primary)] hover:bg-[#1bc5ed] active:scale-95',
  };
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </button>
  );
}
