import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PlatformsPage } from './pages/PlatformsPage';
import { DataPage } from './pages/DataPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { PeoplePage } from './pages/PeoplePage';
import { NewsPage } from './pages/NewsPage';
import { JoinPage } from './pages/JoinPage';
import { ContactPage } from './pages/ContactPage';

const TRANSITION_MS = 450;

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [transition, setTransition] = useState<'idle' | 'cover' | 'reveal'>('idle');
  const [nextTransitionColor, setNextTransitionColor] = useState<'blue' | 'orange'>('blue');
  const [activeTransitionColor, setActiveTransitionColor] = useState<'blue' | 'orange'>('blue');

  const handleNavigate = (page: string) => {
    if (page === currentPage || transition !== 'idle') return;

    setActiveTransitionColor(nextTransitionColor);
    setNextTransitionColor((color) => (color === 'blue' ? 'orange' : 'blue'));

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransition('cover');

        window.setTimeout(() => {
          setCurrentPage(page);
          window.scrollTo(0, 0);
          setTransition('reveal');

          window.setTimeout(() => {
            setTransition('idle');
          }, TRANSITION_MS);
        }, TRANSITION_MS);
      });
    });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage />;
      case 'platforms':
        return <PlatformsPage />;
      case 'data':
        return <DataPage />;
      case 'publications':
        return <PublicationsPage />;
      case 'people':
        return <PeoplePage />;
      case 'news':
        return <NewsPage />;
      case 'join':
        return <JoinPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div
        className={`page-transition-overlay ${
          activeTransitionColor === 'orange' ? 'page-transition-orange' : ''
        } ${transition === 'idle' ? 'page-transition-reset' : ''} ${
          transition === 'cover' ? 'page-transition-cover' : ''
        } ${transition === 'reveal' ? 'page-transition-reveal' : ''}`}
        aria-hidden="true"
      />
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
