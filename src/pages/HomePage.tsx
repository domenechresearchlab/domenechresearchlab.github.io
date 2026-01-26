import { ArrowRight, FlaskConical, Microscope, Dna, TrendingUp } from 'lucide-react';
import heroImage from 'figma:asset/098ca56a0bad280b20ca3b75c097af4cec647133.png';
import exampleImage from 'figma:asset/372a01ab23d4e95e8a4c186852ff8e23534a1b2c.png';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const pillars = [
    {
      id: 'mechanobiology',
      title: 'Stem-Cell Mechanobiology & Scalable Manufacturing',
      icon: FlaskConical,
      summary: 'Mechanical cues and engineered substrates tune MSC state, functional potency, and secretory output.',
      image: 'https://images.unsplash.com/photo-1647083701139-3930542304cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVtJTIwY2VsbCUyMG1pY3Jvc2NvcGV8ZW58MXx8fHwxNzY5NDU4NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'tumor',
      title: 'Engineered Tumor Microenvironments',
      icon: Microscope,
      summary: 'Biomaterials recreating key physical features of the TME to interrogate signaling and therapeutic response.',
      image: 'https://images.unsplash.com/photo-1706639996436-3c90695c7dd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5jZXIlMjBjZWxscyUyMHR1bW9yfGVufDF8fHx8MTc2OTQ1ODYxNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'ev',
      title: 'Extracellular Vesicles & Targeted Delivery',
      icon: Dna,
      summary: 'Decoding MSC-EV targeting mechanisms and translating design rules into synthetic delivery platforms.',
      image: 'https://images.unsplash.com/photo-1707863080685-177f4f6e850d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2xlY3VsYXIlMjBiaW9sb2d5JTIwdmVzaWNsZXN8ZW58MXx8fHwxNzY5NDU4NjE2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    // {
    //   id: 'quantitative',
    //   title: 'Quantitative Methods & Multi-Omics',
    //   icon: TrendingUp,
    //   summary: 'Imaging and proteomic integration converting biological signals into testable mechanisms.',
    //   image: 'https://images.unsplash.com/photo-1656337426914-5e5ba162d606?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzaXMlMjBwcm90ZW9taWNzfGVufDF8fHx8MTc2OTQ1ODYxNnww&ixlib=rb-4.1.0&q=80&w=1080',
    // },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative border-b border-[var(--color-border)] overflow-hidden bg-white">
        {/* Background Image with 100% opacity */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/75" />
        
        {/* Content */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-12 py-20 lg:py-28">
          <div className="max-w-4xl">
            <div className="section-divider bg-white" style={{ backgroundColor: 'white' }} />
            <h1 className="mb-6 text-white">
              Engineering microenvironments to decode cellular mechanobiology
            </h1>
            <p className="text-xl text-white leading-relaxed mb-8 max-w-3xl font-medium">
              We design and build biomaterial platforms to understand how physical and biochemical 
              cues regulate stem cell state, cancer phenotype, and extracellular vesicle function—translating 
              discoveries into scalable manufacturing and targeted delivery systems.
            </p>
            <div className="flex gap-6">
              <button
                onClick={() => onNavigate('research')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[var(--color-primary)] hover:bg-[var(--color-secondary)] hover:text-white transition-colors font-medium"
              >
                Research Overview
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => onNavigate('publications')}
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-[var(--color-primary)] transition-colors font-medium"
              >
                Publications
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Research Approach Narrative */}
      <section className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12 py-16 lg:py-20">
          <div className="editorial-grid">
            <div>
              <div className="section-divider" />
              <h2>Research Approach</h2>
            </div>
            <div>
              <p className="highlight-text">
                Our work follows a coherent trajectory from fundamental mechanobiology questions 
                to translational platform development.
              </p>
              <div className="grid grid-cols-1 gap-8 mt-8">
                <div>
                  <h4>1. Engineered Microenvironments</h4>
                  <p className="text-[var(--color-text-muted)]">
                    We design biomaterials and microfabricated substrates with controlled mechanical, 
                    topographical, and biochemical properties to serve as model systems.
                  </p>
                </div>
                <div>
                  <h4>2. Cellular Mechanotransduction</h4>
                  <p className="text-[var(--color-text-muted)]">
                    Quantitative imaging and multi-omics reveal how cells sense and respond to 
                    microenvironmental cues through mechanosensor pathways.
                  </p>
                </div>
                <div>
                  <h4>3. Functional Outputs</h4>
                  <p className="text-[var(--color-text-muted)]">
                    We measure functional consequences—potency, secretome, immunomodulation, and 
                    therapeutic efficacy—linking biophysical regulation to biological outcomes.
                  </p>
                </div>
                <div>
                  <h4>4. Translational Design Rules</h4>
                  <p className="text-[var(--color-text-muted)]">
                    Mechanistic insights inform rational design of cell manufacturing platforms, 
                    targeted delivery systems, and tissue engineering strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Pillars */}
      <section className="border-b border-[var(--color-border)]">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12 py-16 lg:py-20">
          <div className="mb-12">
            <div className="section-divider" />
            <h2 className="mb-4">Our Pillars</h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-3xl">
              Three interconnected research areas drive our mechanobiology program.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="cursor-pointer group overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-colors"
                onClick={() => onNavigate('research')}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={pillar.image} 
                    alt={pillar.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-5">
                  <pillar.icon size={28} className="text-[var(--color-secondary)] mb-3" />
                  <h3 className="text-lg mb-3 group-hover:text-[var(--color-primary)] transition-colors leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-4">
                    {pillar.summary}
                  </p>
                  <div className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium text-sm group-hover:gap-3 transition-all">
                    Learn more <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Publication */}
      <section className="bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12 py-16 lg:py-20">
          <div className="editorial-grid">
            <div>
              <div className="section-divider" />
              <h2>Featured Publication</h2>
              <p className="text-sm text-[var(--color-text-muted)] mt-4">
                Recent work from the lab
              </p>
            </div>
            <div>
              <div className="mb-4">
                <span className="text-xs font-semibold text-[var(--color-secondary)] uppercase tracking-wider">
                  Stem Cell Research & Therapy, 2025
                </span>
              </div>
              
              {/* Paper Preview Image */}
              <div className="mb-6 overflow-hidden rounded-sm border border-[var(--color-border)]">
                <img 
                  src={exampleImage}
                  alt="Featured publication preview"
                  className="w-full h-72 object-cover object-top"
                />
              </div>

              <h3 className="mb-4">
                Cryogenic Microcarrier-Assisted Stem Cell Storage (Cryo-MASCS): A Preservation Method Enabling Scalable Culture of Human Mesenchymal Stem Cells
              </h3>
              <p className="text-[var(--color-text-muted)] mb-4 leading-relaxed">
                Microcarrier (µC) suspension systems enable closed, high-density manufacturing of human mesenchymal
                stem cells (MSCs), but current workflows remain labor-intensive because they require post-thaw
                cryoprotectant removal and static culture steps to allow cell attachment. To address these bottlenecks,
                we developed a cryogenic microcarrier-assisted stem cell storage (Cryo-MASCS) workflow that integrates
                cell attachment, cryopreservation, and thawing directly on surface-engineered µCs. MSCs were pre-seeded
                onto µCs coated with stacked heparan sulfate-collagen bilayers, cryopreserved on-carrier in either
                conventional dimethyl sulfoxide (DMSO)-supplemented medium or a DMSO-free, serum-free (SF) minimally
                supplemented medium, and then thawed and returned directly to suspension culture without intermediate
                processing. We optimized cell seeding density to maximize recovery. Following thaw, MSCs on engineered
                µCs and cryopreserved in either DMSO-containing or DMSO-free media retained viability comparable to
                traditional suspension cultures in DMSO-containing medium, while remaining attached to the carrier
                surface. Surface-engineered µCs show increased MSC yield within seven days in SF medium, significantly
                outperforming commercial collagen-coated µCs. Moreover, MSCs recovered metabolic activity and retained
                robust suppression of lipopolysaccharide-induced M1 macrophage polarization after IFN-γ priming. These
                findings demonstrate that direct cryopreservation of MSCs on heparan sulfate-collagen-coated µCs is
                compatible with both DMSO-free and DMSO-supplemented conditions and supports streamlined, scalable
                culture of undifferentiated MSCs for translational applications.
              </p>
              <p className="text-sm text-[var(--color-text-muted)] mb-6">
                <span className="font-medium">Authors:</span> Rivera-Crespo, C., Velez-Román, L., Acevedo-Esquilin, M., Mills, H. J., Holzhaus, O. G., Domenech-García, M.
              </p>
              <button className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium hover:text-[var(--color-secondary)] transition-colors">
                Read full article
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Funders, Supporters & Affiliations */}
      <section className="border-b border-[var(--color-border)]">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12 py-16 lg:py-20">
          <div className="mb-12 text-center">
            <div className="section-divider mx-auto" />
            <h2 className="mb-4">Funders, Supporters & Affiliations</h2>
            <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
              Our research is made possible through generous support from federal agencies, 
              industry partners, and academic institutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
            <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <img 
                src="https://cellmanufacturingusa.org/sites/default/files/inline-images/image_23.png" 
                alt="NIIMBL"
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <img 
                src="https://cellmanufacturingusa.org/sites/default/files/cmat-logo-small.png" 
                alt="CMAT"
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <img 
                src="https://airfoundry.upenn.edu/wp-content/uploads/2025/02/AIRFoundry-logo-clr.png" 
                alt="AIR Foundry"
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <img 
                src="https://cawt.upr.edu/wp-content/uploads/2021/03/cawt-lg.png" 
                alt="CAWT"
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <img 
                src="https://images.squarespace-cdn.com/content/v1/603694a3db22ea06eeeadf2b/1614192771365-RATNKBXOT94FXXVBIRT4/rhsc-transparent-logo.png" 
                alt="RHSC"
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
              <img 
                src="https://www.uprm.edu/uprmcaep/wp-content/uploads/sites/88/2016/11/logo-uprm.png" 
                alt="UPRM"
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 md:col-span-3 lg:col-span-1">
              <img 
                src="https://www.upr.edu/ac/wp-content/uploads/sites/1/2021/12/screen-shot-2021-12-21-at-100141-am-1.png" 
                alt="UPR"
                className="max-h-16 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 md:col-span-3 lg:col-span-1">
              <img 
                src="https://res.cloudinary.com/ximbio/image/upload/c_fit,fl_lossy,q_auto/31238f70-4fae-4154-ba62-4b6a95da8edf.png"
                alt="PRSTRT"
                className="max-h-16 w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Sections */}
      <section>
        <div className="max-w-[1200px] mx-auto px-8 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              onClick={() => onNavigate('people')}
              className="cursor-pointer group border-t-2 border-[var(--color-primary)] pt-6"
            >
              <h3 className="text-xl mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                People
              </h3>
              <p className="text-[var(--color-text-muted)] mb-4">
                Meet our interdisciplinary research team
              </p>
              <div className="inline-flex items-center gap-2 text-[var(--color-primary)] font-medium text-sm group-hover:gap-3 transition-all">
                View team <ArrowRight size={16} />
              </div>
            </div>

            <div
              onClick={() => onNavigate('join')}
              className="cursor-pointer group border-t-2 border-[var(--color-secondary)] pt-6"
            >
              <h3 className="text-xl mb-3 group-hover:text-[var(--color-secondary)] transition-colors">
                Join the Lab
              </h3>
              <p className="text-[var(--color-text-muted)] mb-4">
                Open positions for students and postdocs
              </p>
              <div className="inline-flex items-center gap-2 text-[var(--color-secondary)] font-medium text-sm group-hover:gap-3 transition-all">
                Open positions <ArrowRight size={16} />
              </div>
            </div>

            <div
              onClick={() => onNavigate('contact')}
              className="cursor-pointer group border-t-2 border-[var(--color-accent)] pt-6"
            >
              <h3 className="text-xl mb-3 group-hover:text-[var(--color-accent)] transition-colors">
                Collaborate
              </h3>
              <p className="text-[var(--color-text-muted)] mb-4">
                Interested in research collaboration?
              </p>
              <div className="inline-flex items-center gap-2 text-[var(--color-accent)] font-medium text-sm group-hover:gap-3 transition-all">
                Get in touch <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}