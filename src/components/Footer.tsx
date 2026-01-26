import { Mail, MapPin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white mt-auto border-t-4 border-[var(--color-secondary)]">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo and About */}
          <div className="md:col-span-2">
            <img
              src="https://ci3.googleusercontent.com/mail-sig/AIorK4x4x_lKEyZBFf0p4Hg3Sy966EatIf6Q24wUjT-2pyAabIjz2aLpEOtZTFw4TAoMg2hsVqpPhNOSgcfm"
              alt="Domenech Research Lab"
              className="h-10 mb-4 brightness-0 invert"
            />
            <p className="text-white/80 text-sm leading-relaxed max-w-xl">
              Advancing mechanobiology research through biomaterials engineering, 
              cell manufacturing, and translational disease modeling at the 
              University of Puerto Rico at Mayagüez.
            </p>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-white font-sans font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>
                  University of Puerto Rico<br />
                  Mayagüez Campus
                </span>
              </div>
              {/* <div className="flex items-center gap-2">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:maribella.domenech@upr.edu" className="hover:text-white transition-colors">
                  maribella.domenech@upr.edu
                </a>
              </div> */}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/60">
          <p>© {new Date().getFullYear()} Domenech Research Lab, UPRM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}