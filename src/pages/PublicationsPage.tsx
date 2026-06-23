import { useState } from 'react';
import { ExternalLink, ScrollText } from 'lucide-react';

type Publication = {
  title: string;
  authors: string;
  journal?: string;
  year: string;
  volume?: string;
  pages?: string;
  doi?: string;
  type?: 'article' | 'patent';
  patentNumber?: string;
  patentRef?: string;
  pillar?: string;
};

export function PublicationsPage() {
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedPillar, setSelectedPillar] = useState<string>('all');

  const publications: Publication[] = [
  {
    title:
      'Magnetoelastic Cell Monitoring System for Evaluating the Effects of Surface Chemistry on the Performance of Mesenchymal Stem Cell Growth',
    authors:
      'Skinner, W. S., Rivera-Crespo, C., Gebreyesus, E. A., Cifuentes, S., Tan, S., Douglas, T., Domenech-Garcia, M., Ong, K. G.',
    journal: 'Biotechnology and Bioengineering',
    year: '2026',
    doi: 'doi.org/10.1002/bit.70255',
  },
  {
    title:
      'TiO2-based Adsorption Platform for Non-Invasive Capture and Quantification of Cell-Derived Secretome Biomarkers',
    authors:
      'Jimenez-Osorio, J., Rivera-Crespo, C., Meza-Morales, W., Buendia-Otero, M. J., Ramos-Alamo, M., Jimenez-Corzo, D., Ayus-Martinez, S., Domenech, M., Mora, C.',
    journal: 'Bioprocess and Biosystems Engineering',
    year: '2026',
    volume: '49',
    pages: '1047-1062',
    doi: 'doi.org/10.1007/s00449-026-03306-w',
  },
  {
    title: 'Aerosolizable Formulations of Porcine Extracellular Matrix with Antibacterial and Immunomodulatory Effects',
    authors:
      'Buendia-Otero, M. J., Velez-Roman, L., Jimenez-Osorio, J., Ayus-Martinez, S., Meza-Morales, W., Domenech, M., Dion, G. R., Freytes, D., Mora, C.',
    journal: 'ACS Biomaterials Science & Engineering',
    year: '2025',
    volume: '11',
    // issue: '12',
    pages: '7254-7268',
    doi: 'doi.org/10.1021/acsbiomaterials.5c01304',
  },
  {
    title: 'Amphiphilic Silicones to Reduce the Absorption of Small Hydrophobic Molecules',
    authors: 'Quiñones-Pérez, M., Cieza, R. J., Ngo, B. K. D., Grunlan, M. A., Domenech, M.',
    journal: 'Acta Biomaterialia',
    year: '2021',
    volume: '121',
    pages: '339-348',
    doi: 'doi.org/10.1016/j.actbio.2020.11.041',
  },
  {
    title:
      'Collagen I Fibrous Substrates Modulate the Proliferation and Secretome of Estrogen Receptor-Positive Breast Tumor Cells in a Hormone-Restricted Microenvironment',
    authors:
      'Reyes-Ramos, A. M., Álvarez-García, Y. R., Solodin, N., Almodovar, J., Alarid, E. T., Torres-Garcia, W., Domenech, M.',
    journal: 'ACS Biomaterials Science & Engineering',
    year: '2021',
    volume: '7',
    // issue: '6',
    pages: '2430-2443',
    doi: 'doi.org/10.1021/acsbiomaterials.0c01803',
  },
  {
    title:
      'Cryogenic Microcarrier-Assisted Stem Cell Storage (Cryo-MASCS): A Preservation Method Enabling Scalable Culture of Human Mesenchymal Stem Cells',
    authors:
      'Rivera-Crespo, C., Velez-Román, L., Acevedo-Esquilin, M., Mills, H. J., Holzhaus, O. G., Domenech-García, M.',
    journal: 'Stem Cell Research & Therapy',
    year: '2025',
    // volume: '',
    // pages: '',
    doi: 'doi.org/10.1186/s13287-025-04871-9',
  },
  {
    title: 'Delivering Therapeutic Cells to the Heart',
    authors: 'Domenech, M., Ramirez-Vick, J. E., Freytes, D. O.',
    journal: 'Biomaterials for Cell Delivery (CRC Press)',
    year: '2018',
    // volume: '',
    pages: '173-190',
    doi: 'doi.org/10.1201/9781315151755-7',
  },
  {
    title: 'Effects of Physical, Chemical, and Biological Stimulus on h-MSC Expansion and Their Functional Characteristics',
    authors: 'Castilla-Casadiego, D. A., Reyes-Ramos, A. M., Domenech, M., Almodovar, J.',
    journal: 'Annals of Biomedical Engineering',
    year: '2020',
    volume: '48',
    // issue: '2',
    pages: '519-535',
    doi: 'doi.org/10.1007/s10439-019-02400-3',
  },
  {
    title:
      'Ergosterol Peroxide Disrupts Triple-Negative Breast Cancer Mitochondrial Function and Inhibits Tumor Growth and Metastasis',
    authors:
      'Bocachica-Adorno, A. L., Aponte-Ramos, A. Y., Rivera-Fuentes, P. S., Espinosa-Ponce, N. P., Arroyo-Cruz, L. V., Ling, T., Pérez-Ríos, N., Rivas-Tumanyan, S., Almodóvar-Rivera, I. A., Barreto-Gamarra, C., Domenech-García, M., Rivas, F., Martínez-Montemayor, M. M.',
    journal: 'International Journal of Molecular Sciences',
    year: '2025',
    volume: '26',
    // issue: '10',
    pages: '4588',
    doi: 'doi.org/10.3390/ijms26104588',
  },
  {
    title:
      'EUS-Guided Biopsy of Pancreatic Mass Lesions for the Development of Patient-Derived Organoids in Puerto Rico',
    authors: 'Flores Perez, A. S., Mendez Vega, J., Reyes Ramos, A. M., Micames, C., Torres-Lugo, M., Domenech, M.',
    journal: 'Cancer Research (AACR Annual Meeting 2022)',
    year: '2022',
    volume: '82',
    pages: '43-44',
    doi: 'https://doi.org/10.1158/1538-7445.AM2022-3075',
  },
  {
    title: 'Heparan Sulfate-Collagen Surface Multilayers Support Serum-Free Microcarrier Culture of Mesenchymal Stem Cells',
    authors:
      'Cifuentes, S. J., Theran-Suarez, N. A., Rivera-Crespo, C., Velez-Roman, L., Thacker, B., Glass, C., Domenech, M.',
    journal: 'ACS Biomaterials Science & Engineering',
    year: '2024',
    volume: '10',
    // issue: '9',
    pages: '5739-5751',
    doi: 'doi.org/10.1021/acsbiomaterials.4c01008',
  },
  {
    title:
      'Heparin–Collagen I Bilayers Stimulate FAK/ERK 1/2 Signaling via α2β1 Integrin to Support the Growth and Anti-inflammatory Potency of Mesenchymal Stromal Cells',
    authors: 'Cifuentes, S. J., Domenech, M.',
    journal: 'Journal of Biomedical Materials Research Part A',
    year: '2024',
    volume: '112',
    // issue: '1',
    pages: '65-81',
    doi: 'doi.org/10.1002/jbm.a.37614',
  },
  {
    title:
      'Heparin/Collagen Surface Coatings Modulate the Growth, Secretome, and Morphology of Human Mesenchymal Stromal Cell Response to Interferon-gamma',
    authors: 'Cifuentes, S. J., Priyadarshani, P., Castilla-Casadiego, D. A., Mortensen, L. J., Almodóvar, J., Domenech, M.',
    journal: 'Journal of Biomedical Materials Research Part A',
    year: '2021',
    volume: '109',
    // issue: '6',
    pages: '951-965',
    doi: 'doi.org/10.1002/jbm.a.37085',
  },
  {
    title: 'In Vitro Approaches to Model Breast Tumor Complexity',
    authors: 'Rosado-Galindo, H., Suarez, L., Domenech, M.',
    journal: 'Breast Cancer—Evolving Challenges and Next Frontiers (IntechOpen)',
    year: '2021',
    // volume: '',
    // pages: '',
    doi: 'doi.org/10.5772/intechopen.96338',
  },
  {
    title:
      'In Vitro Assessment of Inflammatory Skin Potential of Poly(Methyl Methacrylate) at Non-cytotoxic Concentrations',
    authors:
      'Barraza-Vergara, L. F., Carmona-Sarabia, L., Torres-García, W., Domenech-García, M., Mendez-Vega, J., Torres-Lugo, M.',
    journal: 'Journal of Biomedical Materials Research Part A',
    year: '2023',
    volume: '111',
    // issue: '11',
    pages: '1822-1832',
    doi: 'doi.org/10.1002/jbm.a.37591',
  },
  {
    title:
      'Integrin Stimulation by Collagen I at the Progenitor Stage Accelerates Maturation of Human iPSC-Derived Cardiomyocytes',
    authors: 'Barreto-Gamarra, C., Domenech, M.',
    journal: 'Journal of Molecular and Cellular Cardiology',
    year: '2025',
    volume: '201',
    pages: '70-86',
    doi: 'doi.org/10.1016/j.yjmcc.2025.02.009',
  },
  {
    title:
      'Mesenchymal Cells Support the Oncogenicity and Therapeutic Response of the Hedgehog Pathway in Triple-Negative Breast Cancer',
    authors:
      'Reyes-Ramos, A. M., Ramos-Cruz, K. P., Rodríguez-Merced, N. J., Martínez-Montemayor, M. M., Franqui-Ríos, N. D., Ríos-Grant, J. P., Flores, A., Maldonado-Martínez, G., Torres-García, W., Domenech, M.',
    journal: 'Cancers',
    year: '2019',
    volume: '11',
    // issue: '10',
    pages: '1522',
    doi: 'doi.org/10.3390/cancers11101522',
  },
  {
    title: 'PCL/PEO Polymer Membrane Prevents Biofouling in Wearable Detection Sensors',
    authors: 'Delgado-Rivera, R., García-Rodríguez, W., López, L., Cunci, L., Resto, P. J., Domenech, M.',
    journal: 'Membranes',
    year: '2023',
    volume: '13',
    // issue: '8',
    pages: '728',
    doi: 'doi.org/10.3390/membranes13080728',
  },
  {
    title: 'Polystyrene Topography Sticker Array for Cell-Based Assays',
    authors: 'Rosado-Galindo, H., Domenech, M.',
    journal: 'Recent Progress in Materials',
    year: '2020',
    volume: '2',
    // issue: '2',
    pages: '10-21926',
    doi: 'doi.org/10.21926/rpm.2002013',
  },
  {
    title:
      'Prediction of Cardiac Differentiation in Human Induced Pluripotent Stem Cell-Derived Cardiomyocyte Supernatant Using Surface-Enhanced Raman Spectroscopy and Machine Learning',
    authors: 'Echeverría-Altamar, K., Barreto-Gamarra, C., Domenech-García, M., Resto-Irizarry, P.',
    journal: 'Biosensors and Bioelectronics',
    year: '2025',
    volume: '283',
    pages: '117528',
    doi: 'https://doi.org/10.1016/j.bios.2025.117528',
  },
  {
    title: 'Substrate Topographies Modulate the Secretory Activity of Human Bone Marrow Mesenchymal Stem Cells',
    authors: 'Rosado-Galindo, H., Domenech, M.',
    journal: 'Stem Cell Research & Therapy',
    year: '2023',
    volume: '14',
    // issue: '1',
    pages: '208',
    doi: 'doi.org/10.1186/s13287-023-03450-0',
  },
  {
    title: 'Surface Roughness Modulates EGFR Signaling and Stemness of Triple-Negative Breast Cancer Cells',
    authors: 'Rosado-Galindo, H., Domenech, M.',
    journal: 'Frontiers in Cell and Developmental Biology',
    year: '2023',
    volume: '11',
    pages: '1124250',
    doi: 'https://doi.org/10.3389/fcell.2023.1124250',
  },
  {
    title: 'Open Multi-Culture Platform for Simple and Flexible Study of Multi-Cell Type Interactions',
    authors:
      'Álvarez-García, Y. R., Ramos-Cruz, K. P., Agostini-Infanzón, R. J., Stallcop, L. E., Beebe, D. J., Warrick, J. W., Domenech, M.',
    journal: 'Lab on a Chip',
    year: '2018',
    volume: '18',
    pages: '3184-3195',
    doi: 'doi.org/10.1039/C8LC00560E',
  },
  {
    title: 'Razor-Printed Sticker Microdevices for Cell-Based Applications',
    authors:
      'Stallcop, L. E., Álvarez-García, Y. R., Reyes-Ramos, A. M., Ramos-Cruz, K. P., Morgan, M. M., Shi, Y., Li, L., Beebe, D. J., Domenech, M., Warrick, J. W.',
    journal: 'Lab on a Chip',
    year: '2018',
    volume: '18',
    pages: '451-462',
    doi: 'doi.org/10.1039/C7LC00724H',
  },
  {
    title:
      'Hedgehog-Mesenchyme Gene Signature Identifies Bi-Modal Prognosis in Luminal and Basal Breast Cancer Sub-Types',
    authors: 'Torres-García, W., Domenech, M.',
    journal: 'Molecular BioSystems',
    year: '2017',
    volume: '13',
    pages: '2615-2624',
    doi: 'doi.org/10.1039/C7MB00416H',
  },
  {
    title: 'Tissue Engineering Strategies for Myocardial Regeneration: Acellular Versus Cellular Scaffolds?',
    authors: 'Domenech, M., Polo-Corrales, L., Ramirez-Vick, J. E., Freytes, D. O.',
    journal: 'Tissue Engineering Part B: Reviews',
    year: '2016',
    volume: '22',
    pages: '438-458',
    doi: 'doi.org/10.1089/ten.teb.2015.0523',
  },
  {
    title: 'Phosphodiesterase 4D Inhibitors Limit Prostate Cancer Growth Potential',
    authors:
      'Powers, G. L., Hammer, K. D., Domenech, M., Frantskevich, K., Malinowski, R. L., Bushman, W., Beebe, D. J., Marker, P. C.',
    journal: 'Molecular Cancer Research',
    year: '2015',
    volume: '13',
    pages: '149-160',
    doi: 'doi.org/10.1158/1541-7786.mcr-14-0110',
  },
  {
    title: 'Lysosomal Membrane Permeabilization by Targeted Magnetic Nanoparticles in Alternating Magnetic Fields',
    authors: 'Domenech, M., Marrero-Berrios, I., Torres-Lugo, M., Rinaldi, C.',
    journal: 'ACS Nano',
    year: '2013',
    volume: '7',
    pages: '5091-5101',
    doi: 'doi.org/10.1021/nn4007048',
  },
  {
    title: 'Hedgehog Signaling in Myofibroblasts Directly Promotes Prostate Tumor Cell Growth',
    authors: 'Domenech, M., Bjerregaard, R., Bushman, W., Beebe, D. J.',
    journal: 'Integrative Biology',
    year: '2012',
    volume: '4',
    pages: '142-152',
    doi: 'doi.org/10.1039/c1ib00104c',
  },
  {
    title: 'Biological Implications of Polydimethylsiloxane-Based Microfluidic Cell Culture',
    authors:
      'Regehr, K. J., Domenech, M., Koepsel, J. T., Carver, K. C., Ellison-Zelski, S. J., Murphy, W. L., Schuler, L. A., Alarid, E. T., Beebe, D. J.',
    journal: 'Lab on a Chip',
    year: '2009',
    volume: '9',
    pages: '2132',
    doi: 'doi.org/10.1039/b903043c',
  },
  {
    title: 'Cellular Observations Enabled by Microculture: Paracrine Signaling and Population Demographics',
    authors:
      'Domenech, M., Yu, H., Warrick, J., Badders, N. M., Meyvantsson, I., Alexander, C. M., Beebe, D. J.',
    journal: 'Integrative Biology',
    year: '2009',
    volume: '1',
    pages: '267',
    doi: 'doi.org/10.1039/b823059e',
  },
  // ── Patent Applications ──────────────────────────────────────────────────
  {
    type: 'patent',
    title: 'Compositions and Methods Comprising Human-Induced Pluripotent Stem Cell-Derived Cardiomyocytes',
    authors: 'Domenech-García, M. et al.',
    year: '2024',
    patentNumber: 'US Pat. App. No. 63/658,566',
  },
  {
    type: 'patent',
    title: 'Extracellular Matrix Hydrogels for Ambient Temperature Transport of Human Induced Pluripotent Stem Cell-Derived Cardiomyocytes',
    authors: 'Domenech-García, M. et al.',
    year: '2025',
    patentNumber: 'US Pat. App. No. 63/856,134',
    patentRef: 'WARF Ref. P250122US01',
  },
  {
    type: 'patent',
    title: 'Collagen-Coated Microcarrier-Based Platform for Serum-Free Cell Culture and Cryopreservation for Earth and Space Application',
    authors: 'Domenech-García, M. et al.',
    year: '2025',
    patentNumber: 'US Pat. App. No. 63/896,337',
  },
];

  const years = ['all', ...Array.from(new Set(publications.map(p => p.year))).sort((a, b) => Number(b) - Number(a))];
  // const pillars = [
  //   'all',
  //   'Mechanobiology',
  //   'Tumor Microenvironments',
  //   'EVs & Nanodelivery',
  //   'Quantitative Methods',
  //   'Space Mechanobiology',
  // ];

  const filteredPubs = publications.filter(pub => {
    if (selectedYear !== 'all' && pub.year !== selectedYear) return false;
    // if (selectedPillar !== 'all' && pub.pillar !== selectedPillar) return false;
    return true;
  });

  return (
    <div className="min-h-screen py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="section-divider" />
          <h1 className="mb-6">Publications & Patents</h1>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
            Peer-reviewed publications and patent applications from the Domenech Research Lab.
            Full citation information and external links provided for all works.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 pb-8 border-b border-[var(--color-border)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Year Filter */}
            <div>
              <label className="block text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider mb-3">
                Filter by Year
              </label>
              <div className="flex flex-wrap gap-2">
                {years.map(year => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 text-sm font-medium transition-colors ${
                      selectedYear === year
                        ? 'bg-[var(--color-primary)] text-white'
                        : 'bg-white border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-primary)]'
                    }`}
                  >
                    {year === 'all' ? 'All Years' : year}
                  </button>
                ))}
              </div>
            </div>

            {/* Pillar Filter */}
            {/* <div>
              <label className="block text-sm font-semibold text-[var(--color-text)] uppercase tracking-wider mb-3">
                Filter by Research Area
              </label>
              <select
                value={selectedPillar}
                onChange={(e) => setSelectedPillar(e.target.value)}
                className="w-full px-4 py-2 border border-[var(--color-border)] bg-white text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
              >
                {pillars.map(pillar => (
                  <option key={pillar} value={pillar}>
                    {pillar === 'all' ? 'All Research Areas' : pillar}
                  </option>
                ))}
              </select>
            </div> */}
          </div>

          <div className="mt-6 text-sm text-[var(--color-text-muted)]">
            Showing {filteredPubs.length} of {publications.length} publications & patents
          </div>
        </div>

        {/* Publications List */}
        <div>
          {filteredPubs.map((pub, idx) => (
            <article key={idx} className="publication-item">
              <div className="flex items-start justify-between gap-6 mb-3">
                <div className="flex-1">
                  {pub.type === 'patent' && (
                    <div className="flex items-center gap-2 mb-2">
                      <ScrollText size={14} className="text-[var(--color-accent)]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                        Patent Application
                      </span>
                    </div>
                  )}
                  <h3 className="text-xl mb-2 leading-snug">{pub.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)] mb-2">{pub.authors}</p>

                  {pub.type === 'patent' ? (
                    <div className="text-sm space-y-1">
                      <p className="font-medium text-[var(--color-text)]">{pub.patentNumber}</p>
                      {pub.patentRef && (
                        <p className="text-[var(--color-text-muted)]">{pub.patentRef}</p>
                      )}
                    </div>
                  ) : (
                    <>
                      <p className="text-sm mb-3">
                        <span className="font-medium text-[var(--color-text)]">{pub.journal}</span>
                        <span className="text-[var(--color-text-muted)]">
                          {' '}
                          ({pub.year})
                          {pub.volume && `; ${pub.volume}`}
                          {pub.pages && `: ${pub.pages}`}
                        </span>
                      </p>
                      {pub.doi && (
                        <div className="flex items-center gap-4 text-sm">
                          <a
                            href={`https://${pub.doi}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
                          >
                            DOI: {pub.doi}
                            <ExternalLink size={14} />
                          </a>
                        </div>
                      )}
                    </>
                  )}
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-sm font-medium text-[var(--color-secondary)] mb-1">
                    {pub.year}
                  </div>
                  <div className="text-xs text-[var(--color-text-muted)]">{pub.pillar}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPubs.length === 0 && (
          <div className="text-center py-16 text-[var(--color-text-muted)]">
            No publications found with the selected filters.
          </div>
        )}
      </div>
    </div>
  );
}
