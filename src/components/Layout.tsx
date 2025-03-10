import { Link, useLocation } from 'react-router-dom';
import logo from '/images/lha logo.png';
import { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [mobileMenuOpen]);

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500';
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-start">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Light House Assembly Logo" className="h-12 w-16 sm:h-14 sm:w-20" />
              <span className="text-lg sm:text-xl font-bold text-black">Lighthouse</span>
              <span className="text-lg sm:text-xl font-bold text-orange-500">Assembly</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex gap-8">
            <Link to="/" className={`text-gray-600 hover:text-gray-900 ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/about" className={`text-gray-600 hover:text-gray-900 ${isActive('/about')}`}>
              About
            </Link>
            <Link to="/messages" className={`text-gray-600 hover:text-gray-900 ${isActive('/messages')}`}>
              Messages
            </Link>
            <Link to="/contact" className={`text-gray-600 hover:text-gray-900 ${isActive('/contact')}`}>
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link 
                to="/" 
                className={`block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 ${isActive('/')}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 ${isActive('/about')}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/messages" 
                className={`block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 ${isActive('/messages')}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Messages
              </Link>
              <Link 
                to="/contact" 
                className={`block px-3 py-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 ${isActive('/contact')}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-orange-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Light House Assembly</h3>
              <p className="text-black">….a light unto my path. Ps 119: 105.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Service Times</h3>
              <p className="text-black">Sunday: 9:00 AM - 11:00 AM</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-black">65 Olatilewa Street</p>
              <p className="text-black mb-4">Surulere, Lagos.</p>
              <a 
                href="tel:+2348055601715" 
                className="text-black hover:text-white transition-colors cursor-pointer"
              >
                Click to Message Us
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-black">
            © {new Date().getFullYear()} Light House Assembly. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}