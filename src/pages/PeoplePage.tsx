import React from "react";
import { Mail, Linkedin } from "lucide-react";

export function PeoplePage() {
  const pi = {
    name: "Dr. Maribella Domenech García",
    title: "Assistant Professor",
    department: "Department of Chemical Engineering",
    institution: "University of Puerto Rico, Mayagüez",
    email: "maribella.domenech@upr.edu",
    focus:
      "Mechanobiology, biomaterials engineering, and translational cell manufacturing",
  };

  const staff = [
    {
      name: "Miosotis Acevedo",
      role: "Research Assistant",
      focus:
        "Facility operations, protocol development, and trainee mentoring",
      methods: ["Cell Culture", "Microfabrication"],
      linkedinUrl: "https://www.linkedin.com/in/miosotis-acevedo-106a53195/",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQFBVyrM4Ii8ig/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720029177224?e=1775088000&v=beta&t=0jPPoPUTBjOCEhZbxN7spIk7Dr05yFAzBfm_z3qyU-Y",
    },
  ];

  const graduate = [
    {
      name: "Carlos A. Barreto Gamarra",
      degree: "PhD Candidate in Chemical Engineering",
      focus:
        "MSC mechanobiology and topography-mediated potency regulation [DRAFT]",
      methods: ["Biomaterials", "Imaging", "Proteomics", "[DRAFT]"],
      linkedinUrl: "https://www.linkedin.com/in/cbarretogamarra/?originalSubdomain=pr",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHU5tVKFIP-tQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1677078517460?e=1775088000&v=beta&t=gfi7lGn0zWrNzQ7V9IEl5yctZ1Vt5pxfypAVtg8cskM",
    },
    {
      name: "Carolina Rivera",
      degree: "PhD Candidate in Bioengineering",
      focus:
        "Scalable Xeno-Free Bioreactor Expansion of MSC-derived Chondrocytes",
      methods: ["Cell Differentiation", "Bioreactor Engineering", "Microfabrication"],
      linkedinUrl: "https://www.linkedin.com/in/carolinarivera6/",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQEeMtLUxslGtg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724110668320?e=1775088000&v=beta&t=iCDvC2d_a8RJDPnHEw5DuIYaiBhck_yzuFJh39TxtKM",
    },
    {
      name: "Leonel Vélez Román",
      degree: "PhD Candidate in Bioengineering",
      focus:
        "EV biogenesis modulation and surface ligand profiling",
      methods: ["EV Isolation", "Proteomics"],
      linkedinUrl: "https://www.linkedin.com/in/leonel-velez-roman/",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHwbJxE0jpIDA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713406666235?e=1775088000&v=beta&t=DzCIzF6kPmMgnt9YF0MT4QWlHIz43tp3F76Dj-DUaCs",
    },
    {
      name: "Mared Roa Fontalvo",
      degree: "MS Student in Chemical Engineering",
      focus:
        "EV biogenesis modulation and surface ligand profiling [DRAFT]",
      methods: ["EV Isolation", "Proteomics", "[DRAFT"],
      linkedinUrl: "https://www.linkedin.com/in/mared-roa-835342279/",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGrtJGKxh0YrQ/profile-displayphoto-crop_800_800/B4EZmOFpjoKYAI-/0/1759025471175?e=1775088000&v=beta&t=xcK40Z51O27BHnMX6C_-a9bMQgQOoMFyUJnt1G5BTnw",
    },
    {
      name: "Sebastián A. Cruz Romero",
      degree: "MS Student in Bioengineering",
      focus:
        "EV biogenesis modulation and surface ligand profiling [DRAFT]",
      methods: ["EV Isolation", "Proteomics", "[DRAFT"],
      linkedinUrl: "https://linkedin.com/in/romercruzsa",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGwyoYrGZKE-w/profile-displayphoto-shrink_400_400/B4EZbGUkLsHIAk-/0/1747084003771?e=1775088000&v=beta&t=uRRLMYjLxz3O3yrWT79pdx_JpXnPGFB-BMmBeFhScL4",
    },
    {
      name: "Arleen Hidalgo",
      degree: "ME Student in Bioengineering",
      focus:
        "EV biogenesis modulation and surface ligand profiling [DRAFT]",
      methods: ["EV Isolation", "Proteomics", "[DRAFT"],
      linkedinUrl: "https://www.linkedin.com/in/arleen-hidalgo/",
      image: "https://media.licdn.com/dms/image/v2/D5603AQHKUmzrr009vw/profile-displayphoto-shrink_800_800/B56ZTsLBMeHoAc-/0/1739129106197?e=1775088000&v=beta&t=TH2KJ-6-abAL8fpVDnScFtLPAIMIvnMCDZEecq8xP94",
    },
  ];

  const undergrad = [
    {
      name: "Adrian D. Bonilla González",
      year: "Junior in Industrial Microbiology",
      linkedinUrl: "https://www.linkedin.com/in/adrian-bonilla-gonzález-0647802a8/overlay/background-image/",
      image: "",
    },
    {
      name: "Ariana Martell",
      year: "Junior in Industrial Microbiology",
      linkedinUrl: "https://www.linkedin.com/in/ariana-martell-vega-90a106322/",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQEI2ThiFchrCw/profile-displayphoto-crop_800_800/B4EZzaP9.MHQAI-/0/1773188146213?e=1775088000&v=beta&t=nbcilQaLrtFlzbfR78a7mwx8v0cho_Eu7uYraxd34tc",
    },
    {
      name: "Viviana Vélez",
      year: "Junior in Chemical Engineering",
      linkedinUrl: "https://www.linkedin.com/in/viviana-vélez-55547a205/",
      image: "https://media.licdn.com/dms/image/v2/C4E03AQE2hSL6vRVx7g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628280221717?e=1775088000&v=beta&t=fj-6gNGoi1UMSTisQh-6nMDHSS0XPhCKR9R8tRXmTWU",
    },
    {
      name: "Emilio López",
      year: "Junior in Chemical Engineering",
      linkedinUrl: "https://www.linkedin.com/in/emilio-a-lópez-3a6652316/",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQE4HRpNdrS7nA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1730749614723?e=1775088000&v=beta&t=6ief7tAARyxCJSsrKOaXbLDTh0s8v571sXkgdD7l3YI",
    },
    {
      name: "Jean Barreiro",
      year: "Junior in Computer Science & Engineering",
      linkedinUrl: "https://www.linkedin.com/in/jean-barreiro/",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQGKk43g0o_MFw/profile-displayphoto-crop_800_800/B4EZyhr_yqIQAI-/0/1772239192633?e=1775088000&v=beta&t=Ndfrn9gF_18tLA5qovwMMG8_c77nr4W8ggSpKAnqnSo",
    },
  ];

  const graduateAlumni = [
    {
      name: "Alumni Name 1",
      degree: "PhD, 2024",
      current: "Postdoctoral Fellow, Institution Name",
      thesis:
        "Mechanotransduction in engineered tumor microenvironments",
    },
    {
      name: "Alumni Name 2",
      degree: "MS, 2023",
      current: "Research Scientist, Biotech Company",
      thesis: "EV isolation workflow optimization",
    },
  ];

  const undergradAlumni = [
    {
      name: "Alumni Name 3",
      degree: "BS, 2024",
      current: "Graduate Student, University Name",
    },
    {
      name: "Alumni Name 4",
      degree: "BS, 2023",
      current: "Research Technician, Biotech Company",
    },
  ];

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
              <img
                src="https://www.upr.edu/ac/wp-content/uploads/sites/1/2021/11/dra-maribella-domenech-garcia-scaled.jpg"
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
                <img
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
                    {student.methods.map((method, mIdx) => (
                      <span
                        key={mIdx}
                        className="text-xs px-2 py-1 bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-[var(--color-text-muted)]">
                    {student.linkedinUrl ? (
                      <a
                        href={student.linkedinUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                      >
                        <Linkedin size={16} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 text-[var(--color-text-muted)] opacity-60">
                        <Linkedin size={16} />
                      </span>
                    )}
                  </div>
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
              <img
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
                  {person.methods.map((method, mIdx) => (
                    <span
                      key={mIdx}
                      className="text-xs px-2 py-1 bg-[var(--color-surface)] text-[var(--color-text-muted)] border border-[var(--color-border)]"
                    >
                      {method}
                    </span>
                  ))}
                </div>
                <div className="mt-3 text-sm">
                  {person.linkedinUrl ? (
                    <a
                      href={person.linkedinUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                    >
                      <Linkedin size={16} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-[var(--color-text-muted)] opacity-60">
                      <Linkedin size={16} />
                    </span>
                  )}
                </div>
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
                <img
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
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] opacity-60">
                      <Linkedin size={16} />
                      LinkedIn
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alumni */}
        {/* <section>
          <h2 className="mb-8">Alumni</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12"> */}
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
        </section>  */}
      </div>
    </div>
  );
}
