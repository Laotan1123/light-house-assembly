import { Link, useLocation } from 'react-router-dom';
import logo from '/images/lha logo.png';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center justify-start pl-0">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Light House Assembly Logo" className="h-14 w-20" />
            
              <span className="text-xl font-bold text-black">Lighthouse</span>
              <span className="text-xl font-bold text-orange-500"> Assembly</span>
            </Link>
            </div>
          
          <div className="flex gap-8">
            <Link to="/" className={`${isActive('/')} transition-colors`}>
              Home
            </Link>
            <Link to="/about" className={`${isActive('/about')} transition-colors`}>
              About
            </Link>
            <Link to="/messages" className={`${isActive('/messages')} transition-colors`}>
              Messages
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} transition-colors`}>
              Contact
            </Link>
          </div>
        </nav>
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
              <p className="text-black">Surulere, Lagos.</p>
                <a 
                  href="tel:+2348055601715" 
                  className="text-black hover:text-white transition-colors cursor-pointer"
                  >
                  (+234) 805 560 1715
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