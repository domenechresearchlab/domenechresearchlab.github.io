import { Mail, User } from "lucide-react";

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
      name: "Lab Manager Name",
      role: "Lab Manager",
      focus:
        "Facility operations, protocol development, and trainee mentoring",
      methods: ["Cell Culture", "Microfabrication"],
      image: "https://i.pinimg.com/236x/b3/4f/42/b34f425979930d568e97932dd3cb8e5e.jpg",
    },
  ];

  const graduate = [
    {
      name: "Graduate Student 1",
      degree: "PhD Candidate",
      focus:
        "MSC mechanobiology and topography-mediated potency regulation",
      methods: ["Biomaterials", "Imaging", "Proteomics"],
      keyProject: "Substrate topography and YAP/TAZ signaling",
      image: "https://i.pinimg.com/564x/a0/2e/6d/a02e6dd1a33ad4e314db826f33173f3d.jpg",
    },
    {
      name: "Graduate Student 2",
      degree: "PhD Candidate",
      focus:
        "Tumor microenvironment engineering and drug resistance",
      methods: ["Microfluidics", "Imaging"],
      keyProject: "Microfluidic tumor-on-chip platform",
      image: "https://images.steamusercontent.com/ugc/1826783377633780484/012411805A8BFEB211D01A48D853971F8962FDF2/",
    },
    {
      name: "Graduate Student 3",
      degree: "MS Student",
      focus:
        "EV biogenesis modulation and surface ligand profiling",
      methods: ["EV Isolation", "Proteomics"],
      keyProject: "MSC-EV targeting mechanisms",
      image: "https://tiermaker.com/images/chart/chart/lego-star-wars-ll---the-original-trilogy-characters--dlc-15078757/5jpg.png",
    },
  ];

  const undergrad = [
    {
      name: "Undergraduate Researcher 1",
      year: "Senior",
      focus: "Image analysis pipeline development",
      image: "https://i.pinimg.com/474x/1a/35/fa/1a35fa268846dab61c96bae90007bdc5.jpg",
    },
    {
      name: "Undergraduate Researcher 2",
      year: "Junior",
      focus: "Microfabrication and substrate characterization",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ncltS55iWTYbhYpDoZ9Tvwvc3Q1PA7tPuw&s",
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
                    <span className="font-medium">
                      Key work:
                    </span>{" "}
                    {student.keyProject}
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
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {student.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Alumni */}
        <section>
          <h2 className="mb-8">Alumni</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Graduate Alumni */}
            <div>
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
            </div>

            {/* Undergraduate Alumni */}
            <div>
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
        </section>
      </div>
    </div>
  );
}