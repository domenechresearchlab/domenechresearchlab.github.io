import { Mail, MapPin, Phone, Send, Building } from 'lucide-react';
import { useState } from 'react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <div className="section-divider" />
          <h1 className="mb-6">Contact</h1>
          <p className="text-xl text-[var(--color-text-muted)] leading-relaxed max-w-3xl">
            Interested in collaboration, have questions about our research, or want to join the lab? 
            Get in touch using the information below.
          </p>
        </div>

        <div className="editorial-grid gap-16 mb-20">
          {/* Contact Information */}
          <div>
            <h2 className="mb-8 text-2xl">Contact Information</h2>
            
            <div className="space-y-8">
              {/* <div className="flex items-start gap-4">
                <Mail size={24} className="text-[var(--color-secondary)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2">Email</h4>
                  <a 
                    href="mailto:maribella.domenech@upr.edu" 
                    className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors"
                  >
                    maribella.domenech@upr.edu
                  </a>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1">
                    Primary contact for all inquiries
                  </p>
                </div>
              </div> */}

              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-[var(--color-secondary)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2">Office Location</h4>
                  <div className="text-[var(--color-text-muted)]">
                    <p>Department of Chemical Engineering</p>
                    <p>University of Puerto Rico</p>
                    <p>Mayagüez, PR 00681</p>
                    {/* <p className="mt-2 text-sm">Building Name, Room XXX</p> */}
                  </div>
                </div>
              </div>

              {/* <div className="flex items-start gap-4">
                <Phone size={24} className="text-[var(--color-secondary)] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="mb-2">Phone</h4>
                  <p className="text-[var(--color-text-muted)]">
                    +1 (787) XXX-XXXX
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)] mt-1">
                    Mon–Fri, 9:00 AM – 5:00 PM AST
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="mb-8 text-2xl">Send a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className="block text-sm font-semibold text-[var(--color-text)] mb-2 uppercase tracking-wider"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[var(--color-border)] bg-white text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-semibold text-[var(--color-text)] mb-2 uppercase tracking-wider"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[var(--color-border)] bg-white text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-semibold text-[var(--color-text)] mb-2 uppercase tracking-wider"
                >
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[var(--color-border)] bg-white text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)]"
                >
                  <option value="">Select a subject</option>
                  <option value="collaboration">Research Collaboration</option>
                  <option value="position">Position Inquiry</option>
                  <option value="general">General Question</option>
                  <option value="media">Media / Press</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-semibold text-[var(--color-text)] mb-2 uppercase tracking-wider"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-[var(--color-border)] bg-white text-[var(--color-text)] focus:outline-none focus:border-[var(--color-primary)] resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white hover:bg-[var(--color-secondary)] transition-colors font-medium w-full justify-center"
              >
                <Send size={18} />
                Send Message
              </button>

              <p className="text-xs text-[var(--color-text-muted)] text-center">
                We typically respond within 7-10 business days.
              </p>
            </form>
          </div>
        </div>

        {/* For Collaborators */}
        <section className="pt-16 border-t border-[var(--color-border)]">
          <div className="editorial-grid">
            <div className="flex items-center gap-3">
              <Building size={24} className="text-[var(--color-secondary)]" />
              <h2 className="text-2xl">For Prospective Collaborators</h2>
            </div>
            <div>
              <p className="text-[var(--color-text-muted)] leading-relaxed mb-6">
                We welcome collaborations with academic, industry, and clinical partners. When reaching out, 
                it is helpful to include:
              </p>
              <ul className="space-y-3 text-[var(--color-text-muted)]">
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                  <span>Brief description of your research program or project goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                  <span>Areas of overlapping interest (cite specific publications if relevant)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                  <span>Proposed collaboration structure (e.g., data sharing, joint experiments, co-mentoring)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[var(--color-secondary)] font-serif text-xl flex-shrink-0">•</span>
                  <span>Timeframe and any relevant funding opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
