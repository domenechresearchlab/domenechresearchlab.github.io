import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ResearchPage } from './pages/ResearchPage';
import { PlatformsPage } from './pages/PlatformsPage';
import { DataPage } from './pages/DataPage';
import { PublicationsPage } from './pages/PublicationsPage';
import { PeoplePage } from './pages/PeoplePage';
import { NewsPage } from './pages/NewsPage';
import { JoinPage } from './pages/JoinPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'research':
        return <ResearchPage onNavigate={setCurrentPage} />;
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
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}
