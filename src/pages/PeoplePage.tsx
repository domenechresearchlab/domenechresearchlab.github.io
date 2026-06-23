import React from "react";
import { Linkedin, Mail } from "lucide-react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import adrianBonillaImg from "../assets/lab-members/adrian-bonilla.jpg";
import arianaMartellImg from "../assets/lab-members/ariana-martell.jpg";
import arleenHidalgoImg from "../assets/lab-members/arleen-hidalgo.jpg";
import carolinaRiveraImg from "../assets/lab-members/carolina-rivera.jpg";
import carlosBarretoImg from "../assets/lab-members/carlos-barreto.jpg";
import cruzRomeroImg from "../assets/lab-members/cruz-romero.png";
import emilioLopezImg from "../assets/lab-members/emilio-lopez.jpg";
import kamilleSantiagoImg from "../assets/lab-members/kamille-santiago.png";
import leonelVelezImg from "../assets/lab-members/leonel-velez.jpg";
import maredRoaImg from "../assets/lab-members/mared-roa.jpg";
import maribellaDomenechImg from "../assets/lab-members/maribella-domenech.jpg";
import miosotisAcevedoImg from "../assets/lab-members/miosotis-acevedo.jpg";
import vivianaVelezImg from "../assets/lab-members/viviana-velez.jpg";

export function PeoplePage() {
  const pi = {
    name: "Dr. Maribella Domenech García",
    title: "Professor",
    department: "Dr. Maribella Domenech was born and raised in Puerto Rico. She is a Professor in the Department of Chemical Engineering at the University of Puerto Rico, Mayagüez (UPR-Mayagüez). She completed a bachelor’s in Industrial Biotechnology at University of Puerto Rico-Mayagüez (2006), an M.S. and Ph.D. in Biomedical Engineering at University of Wisconsin, Madison (2010) and a Postdoc in Chemical Engineering at the University of Puerto Rico-Mayagüez (2012). Dr. Domenech has been an independent researcher and educator in the areas of chemical engineering and biomedical engineering for 11 years. Much of her research trajectory has been focused on developing biomaterials and microfluidic platforms of defined biochemical, physical and mechanical properties for studies of modeling the breast tumor microenvironment, and improving the potency of therapeutic cells in the manufacturing process. She is part of the leadership teams of the NSF-Sponsored Engineering Research Center in Cell Manufacture Technologies (CMAT) and the Center for the Advancement of Wearable Technologies (CAWT). Her research work has been presented at more than 30 conferences, and she has authored numerous peer-reviewed journal articles (>20) and 2 book chapters.",
    institution: "One of her research articles on the role of collagen fibrous architecture in modulating drug resistance in breast cancer was featured on the cover of the prestigious ACS biomaterial science & engineering journal (2021). Her research and mentorship efforts have been recognized through multiples awards including the Industrial Biotechnology Alumni Role Model Award for three consecutive years (2015-2017), Faculty Cancer Research Award (2016) by the American Association for Cancer Research, Distinguished Engineer Faculty Award (2018) and more recently the 2024 AACR Minority and Minority-Serving Institution Faculty Scholar in Cancer Research Award. Dr. Domenech was the first female engineering faculty from the UPR system to be elected as a standing member of the Cellular and Molecular Technologies Study Section at the NIH Center for Scientific Review. Also, last year she was recognized by the Engineering Now Magazine as one of the most outstanding females in the engineering research faculty at UPR-Mayaguez and by Ciencia Puerto Rico among the top 37 Puerto Rican females in STEM disciplines and selected to be part of the Borinqueñas in STEM Exhibit at the Centro Criollo de Ciencias y Tecnología del Caribe (C3Tec).",
    email: "maribella.domenech@upr.edu",
    focus:
      "Mechanobiology and translational cell manufacturing",
  };

  const staff = [
    {
      name: "Miosotis Acevedo",
      role: "Research Assistant",
      focus: "",
      methods: "",
      linkedinUrl: "https://www.linkedin.com/in/miosotis-acevedo-106a53195/",
      image: miosotisAcevedoImg,
    },
  ];

  const graduate = [
    {
      name: "Carlos A. Barreto Gamarra",
      degree: "PhD Candidate, Chemical Engineering",
      focus:
        "Scale-up Culture of Mature hiPSC-CMs for Cell Manufacturing Applications",
      methods: "",
      linkedinUrl: "https://www.linkedin.com/in/cbarretogamarra/",
      image: carlosBarretoImg,
    },
    {
      name: "Carolina Rivera",
      degree: "PhD Candidate, Bioengineering",
      focus:
        "Scalable Xeno-Free Bioreactor Expansion of MSC-derived Chondrocytes",
      methods: [
        "Cell culture",
        "Bioreactor scale-up",
        "Gene sequencing",
        "Protein assays",
        "Immunofluorescent microscopy",
      ],
      linkedinUrl: "https://www.linkedin.com/in/carolinarivera6/",
      image: carolinaRiveraImg,
    },
    {
      name: "Leonel Vélez Román",
      degree: "PhD Student, Bioengineering",
      focus:
        "Mechanical Conditioning of Cell Secretory and Immunomodulatory Function Through Engineered Surface Topography and Microgravity",
      methods: [
        "Mammalian cell culture",
        "Extracellular vesicle isolation & characterization",
        "Flow cytometry",
        "ELISA & multiplex cytokine assays",
        "Fluorescence microscopy",
      ],
      linkedinUrl: "https://www.linkedin.com/in/leonel-velez-roman/",
      image: leonelVelezImg,
    },
    {
      name: "Kamille Santiago Padró",
      degree: "M.S. Student, Chemical Engineering",
      focus:
        "Tunable Collagen–Heparan Sulfate Matrices to Enhance Cell Viability and Migration in 3D Microenvironments",
      methods: [
        "FRESH bioprinting",
        "Hydrogel fabrication",
        "Cell culture",
        "Confocal microscopy",
        "Rheological characterization",
      ],
      linkedinUrl:
        "https://www.linkedin.com/in/kamille-santiago-4006a2200",
      image: kamilleSantiagoImg,
    },
    {
      name: "Mared Roa Fontalvo",
      degree: "M.S. Student, Chemical Engineering",
      focus:
        "Scalable Suspension Culture of Cardiac Cells in Bioreactors",
      methods: [],
      linkedinUrl: "https://www.linkedin.com/in/mared-roa-835342279",
      image: maredRoaImg,
    },
    {
      name: "Sebastián A. Cruz Romero",
      degree: "M.S. Student, Bioengineering",
      focus:
        "A Learned Representation of Mesenchymal Stromal Cell-derived Extracellular Vesicles for Engineering Cell Therapeutics",
      methods: ["Mamallian cell culture", "Extracellular Vesicle (EV) isolation and characterization", "Multi-omics analysis", "Machine learning", "Semi-supervised learning"],
      linkedinUrl: "https://www.linkedin.com/in/romerocruzsa",
      image: cruzRomeroImg,
    },
    // {
    //   name: "Arleen Hidalgo",
    //   degree: "M.E. Student, Bioengineering",
    //   focus:
    //     "",
    //   methods: "",
    //   linkedinUrl: "https://www.linkedin.com/in/harleen-hidalgo/",
    //   image: arleenHidalgoImg,
    // },
  ];

  const undergrad = [
    {
      name: "Adrian D. Bonilla González",
      year: "B.S. Industrial Microbiology",
      focus: "",
      linkedinUrl: "https://www.linkedin.com/in/adrian-bonilla-gonz%C3%A1lez-0647802a8/",
      image: adrianBonillaImg,
    },
    {
      name: "Viviana Vélez Avilés",
      year: "B.S. Chemical Engineering",
      focus:
        "Engineering Collagen-Based 3D Bioprinted Models to Study Tumor Cell Invasion",
      linkedinUrl:
        "https://www.linkedin.com/in/viviana-v%C3%A9lez-55547a205?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFLtV27bfTTu54ipCqeZxtg%3D%3D",
      image: vivianaVelezImg,
    },
    {
      name: "Ariana Martell",
      year: "B.S. Industrial Microbiology",
      focus: "",
      linkedinUrl: "https://www.linkedin.com/in/ariana-martell-vega-90a106322",
      image: arianaMartellImg,
    },
    {
      name: "Emilio López",
      year: "B.S. Chemical Engineering",
      focus: "",
      linkedinUrl: "https://www.linkedin.com/in/emilio-a-lópez-3a6652316/",
      image: emilioLopezImg,
    },
  ];

  // const graduateAlumni = [
  //   {
  //     name: "Alumni Name 1",
  //     degree: "PhD, 2024",
  //     current: "Postdoctoral Fellow, Institution Name",
  //     thesis:
  //       "Mechanotransduction in engineered tumor microenvironments",
  //   },
  //   {
  //     name: "Alumni Name 2",
  //     degree: "MS, 2023",
  //     current: "Research Scientist, Biotech Company",
  //     thesis: "EV isolation workflow optimization",
  //   },
  // ];

  // const undergradAlumni = [
  //   {
  //     name: "Alumni Name 3",
  //     degree: "BS, 2024",
  //     current: "Graduate Student, University Name",
  //   },
  //   {
  //     name: "Alumni Name 4",
  //     degree: "BS, 2023",
  //     current: "Research Technician, Biotech Company",
  //   },
  // ];

  return (
    <div className="min-h-screen py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="section-divider" />
          <h1 className="mb-6">People</h1>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
            Our interdisciplinary team brings together expertise
            in biomaterials, cell biology, imaging, and
            quantitative methods to advance mechanobiology
            research.
          </p>
        </div>

        {/* Principal Investigator */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <h2 className="mb-8">Principal Investigator</h2>

          <div className="editorial-grid">
            <div>
              <ImageWithFallback
                src={maribellaDomenechImg}
                alt="Dr. Maribella Domenech García"
                className="w-64 h-64 object-cover rounded-sm"
              />
            </div>
            <div>
              <h3 className="mb-3">{pi.name}</h3>
              <div className="text-[var(--color-text-muted)] space-y-1 mb-4">
                <div className="font-medium">{pi.title}</div>
                <div>{pi.department}</div>
                <div>{pi.institution}</div>
              </div>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-4">
                {pi.focus}
              </p>
              <a
                href={`mailto:${pi.email}`}
                className="inline-flex items-center gap-2 text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors font-medium"
              >
                <Mail size={16} />
                {pi.email}
              </a>
            </div>
          </div>
        </section>

        {/* Graduate Students */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <h2 className="mb-8">Graduate Students</h2>

          <div className="space-y-12">
            {graduate.map((student, idx) => (
              <div key={idx} className="flex gap-8 items-start">
                <ImageWithFallback
                  src={student.image}
                  alt={student.name}
                  className="w-32 h-32 object-cover rounded-sm flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="mb-1">{student.name}</h4>
                  <div className="text-sm text-[var(--color-text-muted)] mb-3">
                    {student.degree}
                  </div>
                  <p className="text-[var(--color-text-muted)] leading-relaxed mb-3">
                    {student.focus}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {(Array.isArray(student.methods) ? student.methods : []).map((method, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-xs px-2 py-1 bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                  {student.linkedinUrl ? (
                    <a
                      href={student.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Staff */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <h2 className="mb-8">Staff</h2>

          {staff.map((person, idx) => (
            <div key={idx} className="flex gap-8 items-start">
              <ImageWithFallback
                src={person.image}
                alt={person.name}
                className="w-32 h-32 object-cover rounded-sm flex-shrink-0"
              />
              <div className="flex-1">
                <h4 className="mb-1">{person.name}</h4>
                <div className="text-sm text-[var(--color-text-muted)] mb-3">
                  {person.role}
                </div>
                <p className="text-[var(--color-text-muted)] leading-relaxed mb-3">
                  {person.focus}
                </p>
                <div className="flex flex-wrap gap-2">
                  {(Array.isArray(person.methods) ? person.methods : []).map((method, mIdx) => (
                    <span
                      key={mIdx}
                      className="text-xs px-2 py-1 bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                    >
                      {method}
                    </span>
                  ))}
                </div>
                {person.linkedinUrl ? (
                  <a
                    href={person.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </section>

        {/* Undergraduate Researchers */}
        <section className="mb-20 pb-16 border-b border-[var(--color-border)]">
          <h2 className="mb-8">Undergraduate Researchers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {undergrad.map((student, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <ImageWithFallback
                  src={student.image}
                  alt={student.name}
                  className="w-24 h-24 object-cover rounded-sm flex-shrink-0"
                />
                <div>
                  <h4 className="mb-1">{student.name}</h4>
                  <div className="text-sm text-[var(--color-text-muted)] mb-2">
                    {student.year}
                  </div>
                  {student.linkedinUrl ? (
                    <a
                      href={student.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  ) : (
                    <p className="text-sm text-[var(--color-text-muted)]">
                      {student.focus}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alumni */}
        {/* <section>
          <h2 className="mb-8">Alumni</h2> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> */}
            {/* Graduate Alumni */}
            {/* <div>
              <h3 className="mb-6 text-lg font-semibold text-[var(--color-text)]">Graduate Alumni</h3>
              <div className="space-y-6">
                {graduateAlumni.map((person, idx) => (
                  <div key={idx} className="pb-6 border-b border-[var(--color-border)] last:border-0">
                    <div className="mb-2">
                      <h4 className="mb-1">{person.name}</h4>
                      <span className="text-sm text-[var(--color-text-muted)]">
                        {person.degree}
                      </span>
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)] mb-1">
                      <span className="font-medium">Current:</span>{" "}
                      {person.current}
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)]">
                      <span className="font-medium">Thesis:</span>{" "}
                      {person.thesis}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Undergraduate Alumni */}
            {/* <div>
              <h3 className="mb-6 text-lg font-semibold text-[var(--color-text)]">Undergraduate Alumni</h3>
              <div className="space-y-6">
                {undergradAlumni.map((person, idx) => (
                  <div key={idx} className="pb-6 border-b border-[var(--color-border)] last:border-0">
                    <div className="mb-2">
                      <h4 className="mb-1">{person.name}</h4>
                      <span className="text-sm text-[var(--color-text-muted)]">
                        {person.degree}
                      </span>
                    </div>
                    <div className="text-sm text-[var(--color-text-muted)]">
                      <span className="font-medium">Current:</span>{" "}
                      {person.current}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
}
