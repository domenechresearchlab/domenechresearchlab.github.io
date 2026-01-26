interface TagProps {
  label: string;
  variant?: 'pillar' | 'platform' | 'application' | 'year';
  size?: 'sm' | 'md';
}

export function Tag({ label, variant = 'platform', size = 'sm' }: TagProps) {
  const variantStyles = {
    pillar: 'bg-[var(--color-accent-cyan)]/10 text-[var(--color-accent-cyan)] border-[var(--color-accent-cyan)]/20',
    platform: 'bg-[var(--color-accent-magenta)]/10 text-[var(--color-accent-magenta)] border-[var(--color-accent-magenta)]/20',
    application: 'bg-[var(--color-accent-amber)]/10 text-[var(--color-accent-amber)] border-[var(--color-accent-amber)]/20',
    year: 'bg-gray-100 text-[var(--color-text-muted)] border-gray-200',
  };

  const sizeStyles = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  return (
    <span
      className={`inline-flex items-center rounded-[var(--radius-chip)] border font-medium ${variantStyles[variant]} ${sizeStyles[size]}`}
    >
      {label}
    </span>
  );
}
