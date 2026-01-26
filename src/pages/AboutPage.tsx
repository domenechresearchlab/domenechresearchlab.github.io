import { Download, Award, Users, BookOpen, Mail } from 'lucide-react';

export function AboutPage() {
  const timeline = [
    {
      year: '2015-2020',
      phase: 'Postdoctoral Training',
      institution: 'Institution Name',
      focus: 'Mechanobiology of stem cells and engineered microenvironments',
    },
    {
      year: '2020',
      phase: 'Assistant Professor',
      institution: 'University of Puerto Rico, Mayagüez',
      focus: 'Establishing mechanobiology research program with focus on MSC manufacturing',
    },
    {
      year: '2021-2023',
      phase: 'Program Expansion',
      institution: 'UPRM',
      focus: 'Integration of tumor microenvironment and extracellular vesicle research',
    },
    {
      year: '2024-Present',
      phase: 'Translational Focus',
      institution: 'UPRM',
      focus: 'Space-enabled mechanobiology and targeted nanodelivery platforms',
    },
  ];

  const leadership = [
    {
      role: 'Study Section Member',
      organization: 'NIH Bioengineering Sciences and Technologies (BEST)',
      period: '2023-Present',
    },
    {
      role: 'Center Co-Director',
      organization: 'UPRM Center for Biomaterials Research',
      period: '2022-Present',
    },
    {
      role: 'Editorial Board',
      organization: 'Journal of Biomedical Materials Research',
      period: '2024-Present',
    },
  ];

  const recognitions = [
    'NSF CAREER Award (2023)',
    'BMES Young Innovator Award (2022)',
    'UPRM Excellence in Research Award (2024)',
  ];

  return (
    <div className="min-h-screen py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="section-divider" />
          <h1 className="mb-6">Principal Investigator</h1>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
            A research trajectory focused on understanding and engineering cellular microenvironments 
            to advance regenerative medicine and disease modeling.
          </p>
        </div>

        {/* PI Profile */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <div className="editorial-grid">
            <div>
              <img 
                src="https://www.upr.edu/ac/wp-content/uploads/sites/1/2021/11/dra-maribella-domenech-garcia-scaled.jpg"
                alt="Dr. Maribella Domenech García" 
                className="w-64 h-64 aspect-[3/4] object-cover rounded-sm"
              />
            </div>
            <div>
              <h2 className="mb-3">Dr. Maribella Domenech García</h2>
              <div className="text-[var(--color-text-muted)] space-y-1 mb-4">
                <div className="font-medium">Assistant Professor</div>
                <div>Department of Chemical Engineering</div>
                <div>University of Puerto Rico, Mayagüez</div>
              </div>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Dr. Domenech García leads a research program focused on mechanobiology, biomaterials engineering, 
                and translational cell manufacturing. Her work bridges fundamental questions about cellular 
                mechanotransduction with scalable platform development for regenerative medicine and disease modeling.
              </p>
              <a
                href="mailto:maribella.domenech@upr.edu"
                className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors font-medium"
              >
                <Mail size={18} />
                maribella.domenech@upr.edu
              </a>
            </div>
          </div>
        </section>

        {/* Research Trajectory Timeline */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <div className="editorial-grid mb-12">
            <div className="flex items-center gap-3">
              <BookOpen size={24} className="text-[var(--color-secondary)]" />
              <h2>Research Trajectory</h2>
            </div>
            <p className="text-[var(--color-text-muted)]">
              Evolution of research interests from fundamental mechanobiology to translational applications
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, idx) => (
              <div key={idx} className="editorial-grid">
                <div>
                  <div className="text-sm font-semibold text-[var(--color-secondary)] uppercase tracking-wider mb-1">
                    {item.year}
                  </div>
                  <h3 className="text-xl mb-1">{item.phase}</h3>
                  <div className="text-sm text-[var(--color-text-muted)]">{item.institution}</div>
                </div>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {item.focus}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership & Service */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <div className="editorial-grid mb-12">
            <div className="flex items-center gap-3">
              <Users size={24} className="text-[var(--color-secondary)]" />
              <h2>Leadership & Service</h2>
            </div>
            <p className="text-[var(--color-text-muted)]">
              Contributions to the scientific community through editorial, advisory, and leadership roles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((item, idx) => (
              <div key={idx} className="border-l-2 border-[var(--color-border)] pl-6">
                <h4 className="mb-2">{item.role}</h4>
                <p className="text-[var(--color-text-muted)] mb-2">
                  {item.organization}
                </p>
                <div className="text-sm text-[var(--color-text-muted)]">
                  {item.period}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Selected Recognitions */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <div className="editorial-grid mb-12">
            <div className="flex items-center gap-3">
              <Award size={24} className="text-[var(--color-secondary)]" />
              <h2>Selected Recognitions</h2>
            </div>
          </div>
          
          <ul className="space-y-3 max-w-2xl">
            {recognitions.map((recognition, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="text-[var(--color-secondary)] font-serif text-2xl flex-shrink-0">•</span>
                <span className="text-[var(--color-text)]">{recognition}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* CV Download */}
        <section>
          <div className="bg-[var(--color-surface)] border-l-4 border-[var(--color-primary)] p-8 lg:p-12">
            <div className="max-w-2xl">
              <h3 className="mb-4">Curriculum Vitae</h3>
              <p className="text-[var(--color-text-muted)] mb-6 leading-relaxed">
                Download a complete academic CV including publications, grants, teaching experience, 
                and professional service activities.
              </p>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] transition-colors font-medium">
                <Download size={18} />
                Download CV (PDF)
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}