export function PlatformsPage() {
  const platforms = [
    {
      title: 'Biomaterials & Engineered Microenvironments',
      description: 'Design and fabrication of synthetic ECM-mimetic materials with tunable mechanical, biochemical, and topographical properties.',
      capabilities: [
        'Hydrogel synthesis (PEG, alginate, collagen-based)',
        'Mechanical property characterization (rheology, AFM)',
        'Biochemical functionalization (RGD, growth factor tethering)',
        '3D cell culture and spheroid formation',
      ],
    },
    {
      title: 'Microfabrication & Surface Topography',
      description: 'Photolithography and soft lithography techniques to create micro- and nano-scale topographical features for mechanobiology studies.',
      capabilities: [
        'Photolithography (SU-8, UV/contact mask)',
        'PDMS replica molding and surface patterning',
        'Groove, pillar, and pit pattern libraries',
        'Topography characterization (SEM, profilometry)',
      ],
    },
    {
      title: 'Microfluidics & In Vitro Models',
      description: 'Microfluidic devices for controlled gradient generation, co-culture, and organ-on-chip applications.',
      capabilities: [
        'Multi-channel gradient generators',
        'Perfusion-based culture systems',
        'Tumor-on-chip and vascular models',
        'Real-time monitoring and sampling',
      ],
    },
    {
      title: 'Imaging & Quantitative Analysis',
      description: 'High-content imaging platforms and computational workflows for single-cell and population-level phenotyping.',
      capabilities: [
        'Automated widefield and confocal microscopy',
        'Live-cell time-lapse imaging',
        'Image analysis pipelines (CellProfiler, ImageJ, custom)',
        'Morphology, fluorescence intensity, and nuclear translocation quantification',
      ],
    },
    {
      title: 'Proteomics & Omics Integration',
      description: 'Mass spectrometry-based proteomics, RNA sequencing, and bioinformatics for mechanistic discovery.',
      capabilities: [
        'LC-MS/MS proteomic profiling (secretome, lysate)',
        'RNA-seq and transcriptomics (bulk and single-cell)',
        'Pathway enrichment and network analysis',
        'Integration with imaging and phenotypic data',
      ],
    },
    {
      title: 'EV Isolation & Characterization',
      description: 'Scalable methods for extracellular vesicle purification and comprehensive biophysical/biochemical characterization.',
      capabilities: [
        'Differential ultracentrifugation and size-exclusion chromatography',
        'Nanoparticle tracking analysis (NTA)',
        'Transmission electron microscopy (TEM)',
        'Surface marker profiling and cargo analysis',
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="section-divider" />
          <h1 className="mb-6">Platforms & Methods</h1>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
            Integrated experimental and computational platforms enable rigorous mechanobiology research 
            from material design through multi-omics analysis.
          </p>
        </div>

        {/* Platforms List */}
        <div className="space-y-16">
          {platforms.map((platform, idx) => (
            <section key={idx} className="pb-16 border-b border-[var(--color-border)] last:border-0">
              <div className="editorial-grid">
                <div>
                  <h2 className="text-2xl mb-4">{platform.title}</h2>
                </div>
                <div>
                  <p className="text-[var(--color-text-muted)] leading-relaxed mb-8">
                    {platform.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-4">
                      Key Capabilities
                    </h4>
                    <ul className="space-y-3">
                      {platform.capabilities.map((capability, capIdx) => (
                        <li key={capIdx} className="flex items-start gap-3">
                          <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                          <span className="text-[var(--color-text-muted)]">
                            {capability}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Integration Note */}
        <div className="mt-16 bg-[var(--color-surface)] border-l-4 border-[var(--color-primary)] p-8 lg:p-12">
          <h3 className="mb-4">Platform Integration</h3>
          <p className="text-[var(--color-text-muted)] leading-relaxed">
            These platforms are designed to work together: biomaterials are fabricated with controlled topography, 
            cultured in microfluidic devices, analyzed by quantitative imaging, and characterized by proteomics. 
            This integrated workflow enables hypothesis-driven mechanobiology research with reproducible, 
            multi-scale readouts.
          </p>
        </div>
      </div>
    </div>
  );
}
