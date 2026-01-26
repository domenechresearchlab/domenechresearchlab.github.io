import { Newspaper, Award, BookOpen, Users, Rocket, Instagram, ExternalLink } from 'lucide-react';
import { useState } from 'react';

export function NewsPage() {
  const [showAllNews, setShowAllNews] = useState(false);
  
  const newsItems = [
    {
      date: 'January 2025',
      title: 'New Paper in Journal of Extracellular Vesicles',
      category: 'Publication',
      icon: BookOpen,
      content: 'Our latest work on MSC-EV surface ligand profiling and immune cell targeting is now published. This study reveals design rules for engineering targeted nanodelivery systems.',
    },
    {
      date: 'December 2024',
      title: 'Graduate Student Receives Travel Award',
      category: 'Award',
      icon: Award,
      content: 'Congratulations to Graduate Student 1 for receiving the BMES Student Travel Award to present work at the annual meeting.',
    },
    {
      date: 'November 2024',
      title: 'Spaceflight Experiment Selected by NASA',
      category: 'Milestone',
      icon: Rocket,
      content: 'Our proposal to study MSC mechanobiology in microgravity has been selected for inclusion in an upcoming ISS mission. Launch expected Q3 2025.',
    },
    {
      date: 'October 2024',
      title: 'New Collaboration with Industry Partner',
      category: 'Collaboration',
      icon: Users,
      content: 'We are excited to announce a new collaboration with [Biotech Company] to translate our EV engineering platform into scalable manufacturing workflows.',
    },
    {
      date: 'September 2024',
      title: 'Paper Featured in Nature Biomedical Engineering',
      category: 'Publication',
      icon: BookOpen,
      content: 'Our tumor-on-chip work revealing mechanosensitive drug resistance mechanisms is published and featured on the journal cover.',
    },
    {
      date: 'August 2024',
      title: 'Lab Welcomes Three New Undergraduate Researchers',
      category: 'Team',
      icon: Users,
      content: 'We are thrilled to welcome three new undergraduate researchers to the lab for the fall semester.',
    },
    {
      date: 'July 2024',
      title: 'PI Elected to BMES Board of Directors',
      category: 'Recognition',
      icon: Award,
      content: 'Dr. [Name] has been elected to serve on the Biomedical Engineering Society Board of Directors for a three-year term.',
    },
    {
      date: 'June 2024',
      title: 'Outreach Event: Summer STEM Camp',
      category: 'Outreach',
      icon: Users,
      content: 'Lab members led hands-on biomaterials activities for 40 local high school students as part of UPRM Summer STEM Camp.',
    },
  ];

  const displayedNews = showAllNews ? newsItems : newsItems.slice(0, 5);

  return (
    <div className="min-h-screen py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="section-divider" />
          <div className="flex items-center gap-3 mb-6">
            <Newspaper size={28} className="text-[var(--color-secondary)]" />
            <h1>News & Updates</h1>
          </div>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
            Lab milestones, new publications, awards, and outreach activities from the 
            Domenech Research Lab.
          </p>
        </div>

        {/* News Timeline */}
        <div className="space-y-12">
          {displayedNews.map((item, idx) => (
            <article key={idx} className="editorial-grid pb-12 border-b border-[var(--color-border)] last:border-0">
              <div>
                <div className="text-sm font-semibold text-[var(--color-secondary)] uppercase tracking-wider mb-2">
                  {item.date}
                </div>
                <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
                  <item.icon size={14} />
                  {item.category}
                </div>
              </div>
              <div>
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                  {item.content}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* See More Button */}
        {newsItems.length > 5 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAllNews(!showAllNews)}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all font-medium rounded-sm"
            >
              {showAllNews ? 'Show Less' : `See More (${newsItems.length - 5} older updates)`}
            </button>
          </div>
        )}

        {/* Outreach Highlights */}
        <section className="mt-20 pt-16 border-t border-[var(--color-border)]">
          <h2 className="mb-12">Outreach & Education</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl mb-4">K-12 Engagement</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                Lab members regularly participate in STEM outreach events, bringing hands-on biomaterials 
                demonstrations to local schools and summer programs.
              </p>
              <ul className="space-y-3 text-[var(--color-text-muted)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                  UPRM Summer STEM Camp (40 students, 2024)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                  Career Day presentations at 3 local high schools
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                  "Engineering Cells" workshop series (monthly)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl mb-4">Undergraduate Mentoring</h3>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                We are committed to providing authentic research experiences for undergraduate students.
              </p>
              <ul className="space-y-3 text-[var(--color-text-muted)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                  6 undergraduate co-authored publications
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                  Conference presentations at regional and national meetings
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                  Alumni advanced to graduate programs nationwide
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Instagram Feed */}
        <section className="mt-20 pt-16 border-t border-[var(--color-border)]">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Instagram size={28} className="text-[var(--color-secondary)]" />
                <h2 className="mb-0">Follow Us on Instagram</h2>
              </div>
              <p className="text-[var(--color-text-muted)]">
                Stay updated with daily lab life, research highlights, and behind-the-scenes moments
              </p>
            </div>
            <a
              href="https://instagram.com/domenechlab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] transition-colors font-medium rounded-sm"
            >
              <Instagram size={18} />
              @domenechlab
              <ExternalLink size={14} />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}