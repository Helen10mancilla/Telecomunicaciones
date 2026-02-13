
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Catalog from './views/Catalog';
import Phones from './views/Phones';
import ProductDetail from './views/ProductDetail';
import Contact from './views/Contact';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage, selectedProductId]);

  const navigate = (page: string, id?: number) => {
    setCurrentPage(page);
    if (id !== undefined) {
      setSelectedProductId(id);
    } else {
      setSelectedProductId(null);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'catalog':
        return <Catalog onNavigate={navigate} />;
      case 'phones':
        return <Phones onNavigate={navigate} />;
      case 'contact':
        return <Contact />;
      case 'detail':
        return selectedProductId ? (
          <ProductDetail productId={selectedProductId} onNavigate={navigate} />
        ) : (
          <Catalog onNavigate={navigate} />
        );
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50">
      <Navbar onNavigate={navigate} currentPage={currentPage} />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {renderPage()}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
