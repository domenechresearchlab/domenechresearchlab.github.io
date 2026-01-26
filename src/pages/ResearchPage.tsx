import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface ResearchPageProps {
  onNavigate: (page: string) => void;
}

export function ResearchPage({ onNavigate }: ResearchPageProps) {
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

  const pillars = [
    {
      id: 'mechanobiology',
      title: 'Stem-Cell Mechanobiology & Scalable Manufacturing',
      shortTitle: 'Mechanobiology',
      why: 'MSC therapeutic efficacy depends on potency—yet conventional 2D culture degrades functional properties. Understanding mechanobiological regulation enables scalable production of high-potency cells.',
      build: 'Microtopography libraries, compliant substrates, large-scale culture platforms with controlled mechanical environments',
      measure: 'Immunomodulatory potency assays, secretome profiling, YAP/TAZ localization, surface marker expression, proliferation kinetics',
      shown: [
        'Substrate roughness at the micron scale enhances MSC self-renewal without differentiation',
        'Mechanical priming increases paracrine anti-inflammatory signaling',
        'Topography-based manufacturing reduces culture time while maintaining potency',
      ],
    },
    {
      id: 'tumor',
      title: 'Engineered Tumor Microenvironments & Cancer Mechanobiology',
      shortTitle: 'Tumor Microenvironments',
      why: 'The tumor microenvironment drives resistance to therapy, yet traditional 2D models fail to capture critical biophysical features. Engineered TMEs reveal how mechanics regulate cancer cell fate.',
      build: 'ECM-mimetic hydrogels, microfluidic gradient chambers, 3D co-culture platforms, stiffness-tunable matrices',
      measure: 'Drug sensitivity panels, invasion/migration assays, mechanotransduction marker expression, proteomics, live-cell imaging',
      shown: [
        'Matrix stiffness regulates chemotherapy resistance in breast cancer models',
        'Spatial gradients in hypoxia and nutrients reproduce in vivo phenotypic heterogeneity',
        'Microfluidic TME models predict patient-specific drug responses',
      ],
    },
    {
      id: 'ev',
      title: 'Extracellular Vesicles & Bioinspired Targeted Nanodelivery',
      shortTitle: 'EVs & Nanodelivery',
      why: 'MSC-derived EVs show therapeutic promise but suffer from low yield and unclear targeting. Decoding surface ligands enables rational design of synthetic targeted delivery systems.',
      build: 'Scalable EV isolation workflows, surface ligand libraries, functionalized lipid nanoparticles (LNPs), immune-cell targeting assays',
      measure: 'Nanoparticle tracking analysis, proteomics (surface + cargo), cell uptake assays, flow cytometry binding studies, in vitro immunomodulation',
      shown: [
        'Culture substrate roughness increases MSC EV biogenesis 2–3 fold',
        'EV surface ligand catalogs identify immune-targeting motifs',
        'EV-inspired LNPs achieve selective macrophage uptake in vitro',
      ],
    },
  ];

  const currentPillar = selectedPillar ? pillars.find(p => p.id === selectedPillar) : null;

  if (currentPillar) {
    return (
      <div className="min-h-screen py-16 lg:py-20">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
          <button
            onClick={() => setSelectedPillar(null)}
            className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-secondary)] mb-8 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Research Overview
          </button>

          <div className="section-divider" />
          <h1 className="mb-12">{currentPillar.title}</h1>

          <div className="space-y-12">
            {/* Why it matters */}
            <div className="editorial-grid">
              <h3 className="text-xl">Why It Matters</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed text-lg">
                {currentPillar.why}
              </p>
            </div>

            {/* What we build */}
            <div className="editorial-grid border-t border-[var(--color-border)] pt-12">
              <h3 className="text-xl">What We Build</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {currentPillar.build}
              </p>
            </div>

            {/* What we measure */}
            <div className="editorial-grid border-t border-[var(--color-border)] pt-12">
              <h3 className="text-xl">What We Measure</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed">
                {currentPillar.measure}
              </p>
            </div>

            {/* What we've shown */}
            <div className="editorial-grid border-t border-[var(--color-border)] pt-12">
              <h3 className="text-xl">Key Findings</h3>
              <ul className="space-y-4">
                {currentPillar.shown.map((finding, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-[var(--color-secondary)] font-serif text-2xl flex-shrink-0">•</span>
                    <span className="text-[var(--color-text-muted)] leading-relaxed">{finding}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="section-divider" />
          <h1 className="mb-6">Research Program</h1>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
            Our research follows a coherent narrative from fundamental questions about microenvironmental 
            control to translational platforms for cell manufacturing and targeted delivery.
          </p>
        </div>

        {/* Concept Map */}
        {/* <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <div className="editorial-grid mb-12">
            <h2>Research Framework</h2>
            <p className="highlight-text">
              Engineered microenvironments → MSC mechanobiology → Secretome & immunomodulation → 
              Omics & quantitative imaging → Delivery systems & translational applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {['Engineered Cues', 'Cell State', 'Function', 'Mechanism', 'Translation'].map((stage, idx) => (
              <div key={stage} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xl font-serif font-semibold">
                  {idx + 1}
                </div>
                <h4 className="text-sm font-semibold uppercase tracking-wider">{stage}</h4>
              </div>
            ))}
          </div>
        </section> */}

        {/* Pillars */}
        <section>
          {/* <div className="mb-12">
            <h2 className="mb-4">Research Pillars</h2>
            <p className="text-lg text-[var(--color-text-muted)]">
              Four interconnected research areas define our mechanobiology program.
            </p>
          </div> */}

          <div className="space-y-12">
            {pillars.map((pillar) => (
              <article
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar.id)}
                className="cursor-pointer group border-l-4 border-[var(--color-primary)] pl-8 py-4 hover:border-[var(--color-secondary)] transition-colors"
              >
                <h3 className="text-2xl mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-4 max-w-3xl">
                  {pillar.why}
                </p>
                <div className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium text-sm group-hover:gap-3 transition-all">
                  Explore this research area <ArrowRight size={16} />
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
