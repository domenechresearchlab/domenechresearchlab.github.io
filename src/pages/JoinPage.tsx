import { Mail, HelpCircle, CheckCircle, FileText } from 'lucide-react';

export function JoinPage() {
  const values = [
    {
      title: 'Rigor',
      description: 'We prioritize careful experimental design, appropriate controls, and statistical power. Reproducibility is non-negotiable.',
    },
    {
      title: 'Documentation',
      description: 'Detailed protocols, clear code comments, and organized data are essential. Future-you (and your collaborators) will thank you.',
    },
    {
      title: 'Collaboration',
      description: 'Science is a team effort. We share knowledge, troubleshoot together, and celebrate each other\'s successes.',
    },
    {
      title: 'Transparency',
      description: 'We report negative results, share methods openly, and acknowledge limitations. Trust in science starts with us.',
    },
  ];

  const positions = [
    {
      type: 'Postdoctoral Fellow',
      description: 'We are seeking a postdoctoral researcher with expertise in mechanobiology, biomaterials, or extracellular vesicles. Ideal candidates have strong cell culture skills and experience with quantitative microscopy or proteomics.',
      requirements: [
        'PhD in bioengineering, cell biology, or related field',
        'First-author publications in peer-reviewed journals',
        'Experience with 3D culture or microfluidics (preferred)',
        'Commitment to rigorous, reproducible research',
      ],
    },
    {
      type: 'Graduate Student',
      description: 'We welcome graduate students interested in mechanobiology, tissue engineering, or disease modeling. Strong candidates are motivated, detail-oriented, and excited to learn new techniques.',
      requirements: [
        'BS in engineering, biology, or related field',
        'Prior research experience (academic or industry)',
        'Interest in interdisciplinary, quantitative biology',
        'Willingness to develop computational skills',
      ],
    },
    {
      type: 'Undergraduate Researcher',
      description: 'Undergraduate students from all UPRM majors are welcome to apply for research positions. We provide training in cell culture, microfabrication, imaging, and data analysis.',
      requirements: [
        'Minimum 10 hours/week availability',
        'GPA ≥ 3.0',
        'Commitment for at least two semesters',
        'Interest in pursuing graduate school or research careers',
      ],
    },
  ];

  const faqs = [
    {
      question: 'Do I need prior cell culture experience?',
      answer: 'Not necessarily! We provide training for motivated students. However, prior lab experience (even in a different area) demonstrates your readiness for independent research.',
    },
    {
      question: 'What programming languages should I know?',
      answer: 'No specific language is required, but willingness to learn is essential. We primarily use Python and R for data analysis, and we provide training and resources.',
    },
    {
      question: 'Can international students apply?',
      answer: 'Yes! We welcome applications from international students. Postdocs should be aware of visa requirements and timelines.',
    },
    {
      question: 'How should I prepare for an interview?',
      answer: 'Read 2–3 recent papers from the lab, identify a project that interests you, and prepare questions about methods, mentoring, and lab culture.',
    },
  ];

  return (
    <div className="min-h-screen py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="section-divider" />
          <h1 className="mb-6">Join the Lab</h1>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
            We are always looking for motivated students and postdocs who share our commitment to 
            rigorous, reproducible mechanobiology research.
          </p>
        </div>

        {/* What We Value */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <h2 className="mb-8">What We Value</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <CheckCircle size={24} className="text-[var(--color-secondary)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2">{value.title}</h4>
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <h2 className="mb-8">Open Positions</h2>
          <div className="space-y-12">
            {positions.map((position, idx) => (
              <div key={idx} className="editorial-grid">
                <div>
                  <h3 className="text-xl mb-2">{position.type}</h3>
                </div>
                <div>
                  <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                    {position.description}
                  </p>

                  <div className="bg-[var(--color-surface)] border-l-2 border-[var(--color-border)] p-6 mb-6">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
                      Requirements
                    </h4>
                    <ul className="space-y-3">
                      {position.requirements.map((req, reqIdx) => (
                        <li key={reqIdx} className="flex items-start gap-3">
                          <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                          <span className="text-[var(--color-text-muted)]">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] transition-colors font-medium">
                    <Mail size={18} />
                    Apply for This Position
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Instructions */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <div className="editorial-grid mb-8">
            <div className="flex items-center gap-3">
              <FileText size={24} className="text-[var(--color-secondary)]" />
              <h2>How to Apply</h2>
            </div>
            <p className="text-[var(--color-text-muted)]">
              Please send the following materials to{' '}
              <a href="mailto:maribella.domenech@upr.edu" className="text-[var(--color-primary)] hover:text-[var(--color-secondary)]">
                pi@example.edu
              </a>{' '}
              with the subject line "Application: [Position Type]"
            </p>
          </div>

          <div className="space-y-8 ml-8">
            <div className="editorial-grid">
              <div className="text-2xl font-serif text-[var(--color-secondary)]">1</div>
              <div>
                <h4 className="mb-2">CV / Resume</h4>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Include education, research experience, publications, and relevant skills
                </p>
              </div>
            </div>

            <div className="editorial-grid">
              <div className="text-2xl font-serif text-[var(--color-secondary)]">2</div>
              <div>
                <h4 className="mb-2">Cover Letter</h4>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Describe your research interests, relevant experience, and why you want to join this lab (1 page)
                </p>
              </div>
            </div>

            <div className="editorial-grid">
              <div className="text-2xl font-serif text-[var(--color-secondary)]">3</div>
              <div>
                <h4 className="mb-2">Transcripts (for students)</h4>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Unofficial transcripts are acceptable for initial review
                </p>
              </div>
            </div>

            <div className="editorial-grid">
              <div className="text-2xl font-serif text-[var(--color-secondary)]">4</div>
              <div>
                <h4 className="mb-2">References (for postdocs)</h4>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Names and contact information for 3 references; letters will be requested later
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle size={24} className="text-[var(--color-secondary)]" />
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="space-y-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="editorial-grid">
                <h4>{faq.question}</h4>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[var(--color-text-muted)] mb-4">
              Have a question not answered here?
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors font-medium">
              <Mail size={18} />
              Contact Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
