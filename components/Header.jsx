import { useState, useEffect } from 'react';
import { Menu, X, Plus } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Doctors', path: '/doctors' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path ? 'text-teal-700 font-semibold' : 'text-gray-600 hover:text-teal-700';
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/90 backdrop-blur-sm py-4 md:bg-transparent md:py-5'}`}>
      <div className="container mx-auto px-20 md:px-6 lg:px-20 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="bg-teal-700 p-1.5 rounded-lg text-white">
            <Plus size={20} strokeWidth={3} />
          </div>
          <span className="text-xl font-serif font-bold text-gray-900">Serenity</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`font-medium text-sm transition-colors ${isActive(item.path)}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-teal-700 hover:bg-teal-800 text-white px-5 py-2.5 rounded-full font-medium text-sm transition-colors shadow-lg shadow-teal-700/20">
              Book Appointment
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 shadow-xl border-t border-gray-100 p-4 flex flex-col gap-4">
           {navLinks.map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className="text-gray-800 font-medium py-2 border-b border-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
           <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
             <button className="bg-teal-700 text-white px-5 py-3 rounded-lg w-full mt-2">
              Book Appointment
            </button>
           </Link>
        </div>
      )}
    </header>
  );
};

export default Header;