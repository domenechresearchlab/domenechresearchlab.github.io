import { Mail, MapPin, Building } from 'lucide-react';

export function ContactPage() {
  return (
    <div className="min-h-screen py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="section-divider" />
          <h1 className="mb-6">Contact</h1>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
            Interested in collaboration, have questions about our research, or want to join the lab? 
            Get in touch using the information below.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="mb-8 text-2xl">Contact Information</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <Mail size={24} className="text-[var(--color-secondary)] flex-shrink-0 mt-1" />
              <div>
                <h4 className="mb-2">Email</h4>
                <a
                  href="mailto:maribella.domenech@upr.edu"
                  className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
                >
                  maribella.domenech@upr.edu
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-[var(--color-secondary)] flex-shrink-0 mt-1" />
              <div>
                <h4 className="mb-2">Office Location</h4>
                <div className="text-[var(--color-text-muted)]">
                  <p>Department of Chemical Engineering</p>
                  <p>University of Puerto Rico</p>
                  <p>Mayagüez, PR 00681</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* For Collaborators */}
        <section className="pt-16 border-t border-[var(--color-border)]">
          <div className="editorial-grid">
            <div className="flex items-center gap-3">
              <Building size={24} className="text-[var(--color-secondary)]" />
              <h2 className="text-2xl">For Prospective Collaborators</h2>
            </div>
            <div>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                We welcome collaborations with academic, industry, and clinical partners. When reaching out, 
                it is helpful to include:
              </p>
              <ul className="space-y-3 text-[var(--color-text-muted)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                  <span>Brief description of your research program or project goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                  <span>Areas of overlapping interest (cite specific publications if relevant)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                  <span>Proposed collaboration structure (e.g., data sharing, joint experiments, co-mentoring)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                  <span>Timeframe and any relevant funding opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
