import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export function Card({ children, className = '', onClick, hover = false }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={`bg-white rounded-[var(--radius-card)] border border-[var(--color-border)] p-6 ${
        hover ? 'cursor-pointer hover:shadow-lg hover:border-[var(--color-accent-cyan)] transition-all' : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

interface PillarCardProps {
  title: string;
  description: string;
  color: 'cyan' | 'magenta' | 'amber' | 'primary';
  onClick?: () => void;
}

export function PillarCard({ title, description, color, onClick }: PillarCardProps) {
  const colorMap = {
    cyan: 'var(--color-accent-cyan)',
    magenta: 'var(--color-accent-magenta)',
    amber: 'var(--color-accent-amber)',
    primary: 'var(--color-primary)',
  };

  return (
    <Card hover onClick={onClick} className="group">
      <div className="flex items-start gap-4">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: `${colorMap[color]}20` }}
        >
          <div 
            className="w-6 h-6 rounded-full"
            style={{ backgroundColor: colorMap[color] }}
          />
        </div>
        <div className="flex-1">
          <h3 className="mb-2 group-hover:text-[var(--color-accent-cyan)] transition-colors">
            {title}
          </h3>
          <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <ArrowRight 
          size={20} 
          className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-cyan)] group-hover:translate-x-1 transition-all flex-shrink-0 mt-1"
        />
      </div>
    </Card>
  );
}
