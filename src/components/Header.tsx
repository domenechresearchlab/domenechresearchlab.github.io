import { Menu, X, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

interface DropdownItem {
  id: string;
  label: string;
}

interface NavGroup {
  label: string;
  items: DropdownItem[];
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  const handleMouseEnter = (groupLabel: string) => {
    // Clear any pending close timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(groupLabel);
  };

  const handleMouseLeave = () => {
    // Add a delay before closing the dropdown
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 300); // 300ms delay
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const navGroups: NavGroup[] = [
    {
      label: 'Research',
      items: [
        { id: 'research', label: 'Research Pillars' },
        // { id: 'platforms', label: 'Platforms & Methods' },
        { id: 'publications', label: 'Publications' },
      ],
    },
    {
      label: 'People',
      items: [
        { id: 'people', label: 'Team' },
        { id: 'join', label: 'Join the Lab' },
      ],
    },
    {
      label: 'Resources',
      items: [
        { id: 'data', label: 'Data & Protocols' },
        { id: 'news', label: 'News & Updates' },
      ],
    },
    {
      label: 'About',
      items: [
        // { id: 'about', label: 'Principal Investigator' },
        { id: 'contact', label: 'Contact' },
      ],
    },
  ];

  return (
    <header className="bg-white border-b border-[var(--color-border)] sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-4 group"
          >
            <img
              src="https://ci3.googleusercontent.com/mail-sig/AIorK4x4x_lKEyZBFf0p4Hg3Sy966EatIf6Q24wUjT-2pyAabIjz2aLpEOtZTFw4TAoMg2hsVqpPhNOSgcfm"
              alt="Domenech Research Lab"
              className="h-12"
            />
            <img
              src="https://images.squarespace-cdn.com/content/v1/603694a3db22ea06eeeadf2b/56abe34f-92aa-4dbf-8c4f-e30370467b71/stemcell.jpg"
              alt="Domenech Research Lab"
              className="h-12"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors py-2 font-medium text-sm tracking-wide ${
                currentPage === 'home' ? 'text-[var(--color-primary)]' : ''
              }`}
            >
              Home
            </button>
            {navGroups.map((group) => (
              <div
                key={group.label}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(group.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className="flex items-center gap-1 text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors py-2 font-medium text-sm tracking-wide"
                >
                  {group.label}
                  <ChevronDown size={16} className="opacity-50" />
                </button>

                {/* Dropdown */}
                {activeDropdown === group.label && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-[var(--color-border)] shadow-xl min-w-[240px] rounded-sm z-50 overflow-hidden">
                    {group.items.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => {
                          onNavigate(item.id);
                          setActiveDropdown(null);
                        }}
                        className={`block w-full text-left px-5 py-3 text-sm transition-all border-l-4 ${
                          currentPage === item.id
                            ? 'bg-[var(--color-surface)] text-[var(--color-primary)] font-semibold border-[var(--color-primary)]'
                            : 'text-[var(--color-text)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] border-transparent'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--color-text)]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-[var(--color-border)]">
            <div className="mb-4">
              <button
                onClick={() => {
                  onNavigate('home');
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-2 py-2 text-sm transition-colors ${
                  currentPage === 'home'
                    ? 'text-[var(--color-primary)] font-medium'
                    : 'text-[var(--color-text)] hover:text-[var(--color-primary)]'
                }`}
              >
                Home
              </button>
            </div>
            {navGroups.map((group) => (
              <div key={group.label} className="mb-4">
                <div className="text-xs font-semibold text-[var(--color-text-muted)] uppercase tracking-wider mb-2 px-2">
                  {group.label}
                </div>
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-2 py-2 text-sm transition-colors ${
                      currentPage === item.id
                        ? 'text-[var(--color-primary)] font-medium'
                        : 'text-[var(--color-text)] hover:text-[var(--color-primary)]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}