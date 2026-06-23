import labBench from '../assets/facilities/image8.jpeg';
import labScaleup from '../assets/facilities/image9.jpeg';
import labBSC from '../assets/facilities/image10.jpeg';
import labWorkbench from '../assets/facilities/image11.jpeg';

import keyenceVkX1100 from '../assets/instruments/keyence-vk-x1100.jpg';
import bionavis from '../assets/instruments/bionavis-mpspr.jpeg';
import cellscaleMicrotester from '../assets/instruments/cellscale-microtester.jpg';
import thetaFlex from '../assets/instruments/theta-flex.jpg';
import irVase from '../assets/instruments/ir-vase.jpeg';
import lumenX from '../assets/instruments/lumen-x.jpg';
import zeissSigma from '../assets/instruments/zeiss-sigma.png';
import asylumAfm from '../assets/instruments/asylum-afm.jpg';
import nanobrookDls from '../assets/instruments/nanobrook-dls.png';

import tecanSpark from '../assets/instruments/tecan-spark.png';
import seahorse from '../assets/instruments/seahorse-xfe.jpeg';
import keyenceBzX800 from '../assets/instruments/keyence-bz-x800.jpeg';
import incucyte from '../assets/instruments/incucyte.jpeg';
import quantStudio from '../assets/instruments/quantstudio-3.jpeg';
import olympusCm30 from '../assets/instruments/olympus-cm30.jpeg';
import kingfisher from '../assets/instruments/kingfisher-duo.png';
import bioplex from '../assets/instruments/bioplex-200.jpg';
import accuriC6 from '../assets/instruments/accuri-c6.jpeg';
import clinostar from '../assets/instruments/clinostar-2.jpg';

import spaceBiomanufacturing from '../assets/facilities/image30.png';
import stemcell01Patch from '../assets/facilities/image31.jpeg';
import labPrep from '../assets/facilities/image32.png';
import issChamber from '../assets/facilities/image33.jpeg';
import kscTeam from '../assets/facilities/image35.jpeg';
import rhodiumIss from '../assets/facilities/image37.jpeg';

import whatWeDo from '../assets/facilities/image5.png';
import hydrogelSample from '../assets/facilities/image36.png';

interface Instrument {
  name: string;
  image: string;
  alt: string;
}

interface FacilitySpace {
  name: string;
  description: string;
  image: string;
  alt: string;
}

function InstrumentGrid({ items }: { items: Instrument[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="group border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden"
        >
          <div className="aspect-[5/4] bg-white relative overflow-hidden flex items-center justify-center p-2">
            <img
              src={item.image}
              alt={item.alt}
              className="max-w-full max-h-full object-contain object-center"
            />
            <div className="absolute inset-0 z-10 flex items-center justify-center p-2 bg-black/50 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <p className="text-white text-sm text-center font-medium leading-snug px-2">
                {item.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function PlatformsPage() {
  const facilitySpaces: FacilitySpace[] = [
    {
      name: '1,000 sqft facility for cell biomaterial characterization.',
      description: '',
        // '1,000 sq ft dedicated space within the Center for Biomedical Engineering and Nanomedicine for cell and biomaterial characterization — housing precision instrumentation for surface analysis, mechanical testing, and optical characterization.',
      image: labBench,
      alt: 'Lab bench with characterization instrumentation',
    },
    {
      name: 'Two HEPA filter rooms for cell culture and scale-up processes.',
      description: '',
        // '800 sq ft facility for cell scale-up processes and biomaterial and microfluidic device fabrication.',
      image: labScaleup,
      alt: 'Cell scale-up and fabrication laboratory space',
    },
    {
      name: 'Cell culture rooms (LAB 101N & 101K).',
      description: '',
        // 'Two HEPA-filtered, controlled-environment rooms dedicated to sterile cell culture work, supporting long-term culture of primary cells and stem cells.',
      image: labBSC,
      alt: 'Biosafety cabinet in HEPA-filtered cell culture room',
    },
    {
      name: '800 sqft facilities for cell scale-up and biomaterial/microfluidic fabrication.',
      description: '',
        // 'Secondary cell culture area supporting day-to-day experimental workflows, with dedicated storage and equipment for routine biological assays.',
      image: labWorkbench,
      alt: 'Cell culture workbench area',
    },
  ];

  const materialsInstruments: Instrument[] = [
    {
      name: '3D Laser Surface Scanning — Keyence VK-X1100',
      image: keyenceVkX1100,
      alt: 'Keyence VK-X1100 3D laser scanning confocal microscope',
    },
    {
      name: 'MP-SPR Navi 220A — Bionavis',
      image: bionavis,
      alt: 'Bionavis MP-SPR Navi 220A surface plasmon resonance instrument',
    },
    {
      name: 'Microtester — CellScale',
      image: cellscaleMicrotester,
      alt: 'CellScale Microtester biomechanical testing system',
    },
    {
      name: 'Theta Flex Contact Angle — Biolin Scientific',
      image: thetaFlex,
      alt: 'Biolin Scientific Theta Flex optical tensiometer',
    },
    {
      name: 'IR-VASE Mark II — J.A. Woollam',
      image: irVase,
      alt: 'J.A. Woollam IR-VASE spectroscopic ellipsometer',
    },
    {
      name: 'Lumen X Bioprinter — CELLINK',
      image: lumenX,
      alt: 'CELLINK Lumen X volumetric bioprinter',
    },
    {
      name: 'SEM Gemini 1 — Zeiss Sigma 360 VP',
      image: zeissSigma,
      alt: 'Zeiss Sigma 360 VP scanning electron microscope',
    },
    {
      name: 'AFM MFP3D — Asylum Research (Oxford Instruments)',
      image: asylumAfm,
      alt: 'Asylum Research MFP3D atomic force microscope',
    },
    {
      name: 'NanoBrook DLS — Brookhaven Instruments',
      image: nanobrookDls,
      alt: 'Brookhaven NanoBrook dynamic light scattering analyzer',
    },
  ];

  const cellMolecularInstruments: Instrument[] = [
    {
      name: 'Tecan SPARK Multimode Microplate Reader',
      image: tecanSpark,
      alt: 'Tecan SPARK multimode microplate reader',
    },
    {
      name: 'Seahorse XFe/XFp — Agilent',
      image: seahorse,
      alt: 'Agilent Seahorse extracellular flux analyzer',
    },
    {
      name: 'BZ-X800 All-in-One Fluorescence Microscope — Keyence',
      image: keyenceBzX800,
      alt: 'Keyence BZ-X800 confocal fluorescence microscope',
    },
    {
      name: 'Incucyte Live-Cell Analysis System',
      image: incucyte,
      alt: 'Incucyte live-cell imaging and analysis system',
    },
    {
      name: 'QuantStudio 3 — Applied Biosystems',
      image: quantStudio,
      alt: 'Applied Biosystems QuantStudio 3 real-time PCR system',
    },
    {
      name: 'CM30 Incubation Monitoring — Olympus',
      image: olympusCm30,
      alt: 'Olympus CM30 incubation monitoring system',
    },
    {
      name: 'KingFisher Duo Prime — Thermo Scientific',
      image: kingfisher,
      alt: 'Thermo Scientific KingFisher Duo Prime nucleic acid purification system',
    },
    {
      name: 'Bio-Plex 200 — Bio-Rad',
      image: bioplex,
      alt: 'Bio-Rad Bio-Plex 200 multiplex immunoassay system',
    },
    {
      name: 'Accuri C6 Flow Cytometer — BD',
      image: accuriC6,
      alt: 'BD Accuri C6 flow cytometer',
    },
    {
      name: 'ClinoStar 2 Microgravity Bioreactor — CellVivo',
      image: clinostar,
      alt: 'CellVivo ClinoStar 2 microgravity analog bioreactor',
    },
  ];

  const industryOpportunities = [
    {
      title: 'De-risk products with cell-level preclinical assays',
      description:
        'Use biomaterials and assays to predict performance and safety before costly prototyping — including cell toxicity, drug efficacy at the cell level, inflammatory signaling, and skin toxicity.',
      impact: 'Fewer late-stage failures, stronger evidence packages, and faster iteration.',
    },
    {
      title: 'Make new materials (performance by design)',
      description:
        'Develop polymeric formats that improve reliability and enable new products with ready-to-test formulations, processing parameters, and validation datasets.',
      impact: 'Accelerated product development with documented performance data.',
    },
    {
      title: 'Open markets for existing materials through new applications',
      description:
        'Create new value without reinventing supply chains — upgrade existing polymers with functional interfaces such as anti-biofouling, low-absorption, and bioactive coatings.',
      impact: 'Faster product-line extensions and differentiated IP.',
    },
  ];

  const patents = [
    {
      title: 'Compositions and methods comprising human-induced pluripotent stem cell-derived cardiomyocytes',
      number: 'US Pat. App. No. 63/658,566',
    },
    {
      title:
        'Extracellular Matrix Hydrogels for Ambient Temperature Transport of Human Induced Pluripotent Stem Cell-Derived Cardiomyocytes',
      number: 'US Pat. App. No. 63/856,134 (WARF Ref. P250122US01)',
    },
    {
      title:
        'Collagen-coated Microcarrier-based Platform for Serum-free Cell Culture and Cryopreservation for Earth and Space Application',
      number: 'US Pat. App. No. 63/896,337',
    },
  ];

  const platforms = [
    {
      title: 'Biomaterials & Engineered Microenvironments',
      description:
        'Design and fabrication of synthetic ECM-mimetic materials with tunable mechanical, biochemical, and topographical properties.',
      capabilities: [
        'Hydrogel synthesis (PEG, alginate, collagen-based)',
        'Mechanical property characterization (rheology, AFM)',
        'Biochemical functionalization (RGD, growth factor tethering)',
        '3D cell culture and spheroid formation',
      ],
    },
    {
      title: 'Microfabrication & Surface Topography',
      description:
        'Photolithography and soft lithography techniques to create micro- and nano-scale topographical features for mechanobiology studies.',
      capabilities: [
        'Photolithography (SU-8, UV/contact mask)',
        'PDMS replica molding and surface patterning',
        'Groove, pillar, and pit pattern libraries',
        'Topography characterization (SEM, profilometry)',
      ],
    },
    {
      title: 'Microfluidics & In Vitro Models',
      description:
        'Microfluidic devices for controlled gradient generation, co-culture, and organ-on-chip applications.',
      capabilities: [
        'Multi-channel gradient generators',
        'Perfusion-based culture systems',
        'Tumor-on-chip and vascular models',
        'Real-time monitoring and sampling',
      ],
    },
    {
      title: 'Imaging & Quantitative Analysis',
      description:
        'High-content imaging platforms and computational workflows for single-cell and population-level phenotyping.',
      capabilities: [
        'Automated widefield and confocal microscopy',
        'Live-cell time-lapse imaging',
        'Image analysis pipelines (CellProfiler, ImageJ, custom)',
        'Morphology, fluorescence intensity, and nuclear translocation quantification',
      ],
    },
  ];

  const spaceImages = [
    { src: stemcell01Patch, alt: 'Stemcell01 mission patch for SpaceX CRS-31' },
    { src: labPrep, alt: 'Lab team preparing Stemcell01 samples' },
    { src: issChamber, alt: 'Rhodium Science Chamber on the International Space Station' },
    { src: kscTeam, alt: 'Domenech Lab team at Kennedy Space Center' },
    { src: rhodiumIss, alt: 'Rhodium Stem Cell 01 experiment canister aboard the ISS' },
  ];

  return (
    <div className="min-h-screen py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="section-divider" />
          <h1 className="mb-6">Facilities & Platforms</h1>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
            The lab operates within the Center for Biomedical Engineering and Nanomedicine (CBEN) at UPRM,
            combining state-of-the-art instrumentation with integrated experimental platforms for
            cell manufacturing and biomedical research.
          </p>
        </div>

        {/* Physical Facilities */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <div className="mb-10">
            <h2 className="mb-3">Physical Facilities</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {facilitySpaces.map((space, idx) => (
              <div
                key={idx}
                className="overflow-hidden border border-[var(--color-border)] group"
              >
                <div className="overflow-hidden">
                  <img
                    src={space.image}
                    alt={space.alt}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg mb-2">{space.name}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    {space.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Instrumentation */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <div className="mb-10">
            <h2 className="mb-3">Instrumentation</h2>
            {/* <p className="text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
              The lab houses a broad suite of instrumentation organized around two core needs:
              materials characterization and cell and molecular biology.
            </p> */}
          </div>

          <div className="space-y-14">
            <div>
              <h3 className="text-xl mb-2">Surface & Materials Characterization</h3>
              {/* <p className="text-[var(--color-text-muted)] leading-relaxed mb-6 max-w-3xl">
                Tools for quantifying surface topography, mechanical properties, wettability, optical
                constants, and nanoparticle size — supporting biomaterial design from the nano to
                macro scale.
              </p> */}
              <InstrumentGrid items={materialsInstruments} />
            </div>

            <div>
              <h3 className="text-xl mb-2 mt-4">Cell & Molecular Biology</h3>
              {/* <p className="text-[var(--color-text-muted)] leading-relaxed mb-6 max-w-3xl">
                Instrumentation for metabolic profiling, quantitative imaging, multiplex assays, and
                nucleic acid analysis — enabling functional readouts across cell populations.
              </p> */}
              <InstrumentGrid items={cellMolecularInstruments} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
