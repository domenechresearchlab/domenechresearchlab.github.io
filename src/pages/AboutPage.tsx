import { Users, BookOpen, Mail } from 'lucide-react';
import piPhoto from '../assets/facilities/image3.jpg';

export function AboutPage() {
  const timeline = [
    {
      year: '2013',
      phase: 'Domenech Research Lab Founded',
      institution: 'University of Puerto Rico, Mayagüez',
      focus:
        'Established research program in chemical engineering focused on engineered technologies for manufacturing cell therapies and cell/tissue models for biomedical applications.',
    },
    {
      year: '2014–2024',
      phase: 'Growth & Federal Funding Phase',
      institution: 'UPRM — Chemical Engineering',
      focus:
        'Expanded research portfolio through federal and local funding. Program grew to encompass biomaterials engineering, scalable MSC manufacturing, tumor microenvironments, and space biomanufacturing.',
    },
    {
      year: '2025–Present',
      phase: 'Active Research Program',
      institution: 'UPRM — Chemical Engineering',
      focus:
        'Continuing work in cell therapy manufacturing, LNP-based delivery, and space-enabled biomanufacturing through active partnerships with NSF-ERC CMAT, NSF-AIR Foundry, and NSF/CASIS.',
    },
  ];

  const leadership = [
    {
      role: 'Co-PI & MSC-Testbed Co-Lead',
      organization: 'NSF-ERC Center for Cell Manufacture Technologies (CMAT)',
      link: 'https://cellmanufacturingusa.org',
    },
    {
      role: 'WG2 Leader — LNP Development',
      organization: 'NSF-AIR Foundry',
      link: 'https://airfoundry.upenn.edu',
    },
    {
      role: 'Standing Member',
      organization: 'NIH Center for Scientific Review, Cellular and Molecular Technologies Study Section',
      link: undefined,
    },
    {
      role: 'Affiliated Investigator',
      organization:
        'Division of Clinical and Translational Cancer Research, UPR Comprehensive Cancer Center (UPR-UCC)',
      link: undefined,
    },
    {
      role: 'Affiliated Professor',
      organization: 'Bioengineering Graduate Program, UPR Mayagüez',
      link: undefined,
    },
  ];

  return (
    <div className="min-h-screen py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="section-divider" />
          <h1 className="mb-6">Principal Investigator</h1>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
            A research program at the intersection of chemical engineering, biomaterials, and cell
            manufacturing — advancing technologies for cell therapy production and biomedical
            applications.
          </p>
        </div>

        {/* PI Profile */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <div className="editorial-grid">
            <div>
              <img
                src={piPhoto}
                alt="Dr. Maribella Domenech García"
                className="w-64 h-80 object-cover object-top rounded-sm"
              />
            </div>
            <div>
              <h2 className="mb-3">Dr. Maribella Domenech García</h2>
              <div className="text-[var(--color-text-muted)] space-y-1 mb-6">
                <div className="font-medium text-[var(--color-text)]">Professor of Chemical Engineering</div>
                <div>Department of Chemical Engineering</div>
                <div>University of Puerto Rico, Mayagüez</div>
              </div>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Dr. Domenech García leads a research program focused on engineered technologies for
                manufacturing cell therapies and developing cell and tissue models for biomedical
                applications. Her work spans biomaterials design, scalable stem cell manufacturing,
                tumor microenvironment modeling, and space biomanufacturing.
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
              From lab founding to a nationally recognized research program in biomanufacturing
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
                <p className="text-[var(--color-text-muted)] leading-relaxed">{item.focus}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership & Service */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <div className="editorial-grid mb-12">
            <div className="flex items-center gap-3">
              <Users size={24} className="text-[var(--color-secondary)]" />
              <h2>Affiliations & Leadership</h2>
            </div>
            <p className="text-[var(--color-text-muted)]">
              National and institutional roles advancing research in cell manufacturing and biomedical
              engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadership.map((item, idx) => (
              <div key={idx} className="border-l-2 border-[var(--color-border)] pl-6">
                <h4 className="mb-2">{item.role}</h4>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    {item.organization}
                  </a>
                ) : (
                  <p className="text-[var(--color-text-muted)]">{item.organization}</p>
                )}
              </div>
            ))}
          </div>
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
                Download CV (PDF)
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
