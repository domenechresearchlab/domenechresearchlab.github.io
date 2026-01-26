import { Download, ExternalLink, Shield } from 'lucide-react';

export function DataPage() {
  const protocols = [
    {
      title: 'MSC Isolation and Culture on Microtopography',
      category: 'Cell Culture',
      description: 'Standard protocol for isolating bone marrow MSCs and culturing on micropatterned substrates.',
      version: 'v2.1',
    },
    {
      title: 'EV Isolation by Differential Ultracentrifugation',
      category: 'Extracellular Vesicles',
      description: 'Optimized workflow for isolating EVs from conditioned culture media with quality control checkpoints.',
      version: 'v1.3',
    },
    {
      title: 'Immunomodulation Assay (Macrophage Polarization)',
      category: 'Functional Assays',
      description: 'Protocol for testing MSC or EV immunomodulatory effects on M1/M2 macrophage polarization.',
      version: 'v1.0',
    },
  ];

  const datasets = [
    // {
    //   title: 'MSC Morphology on Topography Library',
    //   description: 'High-content imaging dataset of MSC morphology across 20 topography conditions (>50,000 cells).',
    //   type: 'Imaging',
    //   format: 'TIF + CSV',
    //   size: '4.2 GB',
    // },
    // {
    //   title: 'EV Proteomic Profiles Under Mechanical Priming',
    //   description: 'Mass spectrometry data for EVs isolated from MSCs cultured on flat vs. rough substrates.',
    //   type: 'Proteomics',
    //   format: 'mzML + analysis scripts',
    //   size: '820 MB',
    // },
    // {
    //   title: 'Tumor Cell Migration in 3D Gradient Hydrogels',
    //   description: 'Time-lapse imaging and tracking data for cancer cells in stiffness-gradient matrices.',
    //   type: 'Imaging + Tracking',
    //   format: 'AVI + CSV',
    //   size: '1.8 GB',
    // },
  ];

  const codeRepos = [
    // {
    //   title: 'Image Analysis Pipeline',
    //   description: 'Python + CellProfiler workflows for automated cell morphology quantification',
    // },
    // {
    //   title: 'Proteomics Analysis',
    //   description: 'R + Jupyter notebooks for MS data processing and pathway enrichment',
    // },
  ];

  return (
    <div className="min-h-screen py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="section-divider" />
          <h1 className="mb-6">Data & Resources</h1>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
            Public protocols, datasets, analysis code, and reproducibility documentation supporting 
            published research from the Domenech Research Lab.
          </p>
        </div>

        {/* Data Management Statement */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <div className="bg-[var(--color-surface)] border-l-4 border-[var(--color-primary)] p-8 lg:p-12">
            <div className="flex items-start gap-4">
              <Shield size={28} className="text-[var(--color-primary)] flex-shrink-0 mt-1" />
              <div>
                <h3 className="mb-4">Reproducibility & Data Management</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  We are committed to open science and transparent research practices. Protocols, datasets, 
                  and analysis code are made publicly available where possible. Raw data supporting published 
                  findings are deposited in discipline-specific repositories and linked from publications. 
                  Contact us for access to materials not yet publicly released.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Protocol Index */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <h2 className="mb-8">Protocol Index</h2>

          <div className="space-y-6">
            {protocols.map((protocol, idx) => (
              <div key={idx} className="editorial-grid">
                <div>
                  <div className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wider mb-2">
                    {protocol.category}
                  </div>
                  <h4 className="mb-1">{protocol.title}</h4>
                  <div className="text-sm text-[var(--color-text-muted)]">{protocol.version}</div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    {protocol.description}
                  </p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors font-medium whitespace-nowrap">
                    <Download size={16} />
                    PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Datasets */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <h2 className="mb-8">Datasets</h2>

          <div className="space-y-8">
            {datasets.map((dataset, idx) => (
              <div key={idx} className="editorial-grid">
                <div>
                  <h4 className="mb-2">{dataset.title}</h4>
                  <div className="text-sm text-[var(--color-text-muted)] space-y-1">
                    <div><span className="font-medium">Type:</span> {dataset.type}</div>
                    <div><span className="font-medium">Format:</span> {dataset.format}</div>
                    <div><span className="font-medium">Size:</span> {dataset.size}</div>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-6">
                  <p className="text-[var(--color-text-muted)] leading-relaxed">
                    {dataset.description}
                  </p>
                  <div className="flex flex-col gap-2 whitespace-nowrap">
                    <button className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] transition-colors font-medium">
                      <Download size={16} />
                      Download
                    </button>
                    <button className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)] transition-colors font-medium">
                      <ExternalLink size={16} />
                      Repository
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Code & Analysis */}
        <section>
          <h2 className="mb-8">Code & Analysis Notebooks</h2>
          
          <div className="mb-8">
            <p className="text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
              Analysis scripts, image processing pipelines, and computational workflows are maintained 
              on GitHub. Each repository is linked to corresponding publications and includes documentation, 
              example data, and environment specifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {codeRepos.map((repo, idx) => (
              <div
                key={idx}
                className="border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] transition-colors cursor-pointer"
              >
                <h4 className="mb-2">{repo.title}</h4>
                <p className="text-sm text-[var(--color-text-muted)] mb-4">
                  {repo.description}
                </p>
                <div className="inline-flex items-center gap-2 text-[var(--color-primary)] text-sm font-medium">
                  View on GitHub <ExternalLink size={14} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
