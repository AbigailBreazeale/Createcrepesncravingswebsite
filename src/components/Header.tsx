import { Phone, MapPin, Clock } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="bg-[#5D4037] text-white sticky top-0 z-50 shadow-lg">
      {/* Top bar with contact info */}
      <div className="bg-[#4A2C24] px-4 py-2">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-center md:justify-between items-center">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <a href="tel:9512891580" className="hover:text-[#FFB6C1] transition-colors">
              (951) 289-1580
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>1675 N Perris Blvd A16, Perris, CA 92571</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Open Daily · Closes at 8 PM</span>
          </div>
        </div>
      </div>
      
      {/* Main navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link to="/" className="flex flex-col items-center md:items-start">
            <h1 className="text-[#FFB6C1]">Crepes N Cravings</h1>
            <p className="text-sm italic text-[#B0E0E6]">Sweet moments made fresh.</p>
          </Link>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <Link 
              to="/" 
              className={`hover:text-[#FFB6C1] transition-colors ${isActive('/') ? 'text-[#FFB6C1]' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`hover:text-[#FFB6C1] transition-colors ${isActive('/menu') ? 'text-[#FFB6C1]' : ''}`}
            >
              Menu
            </Link>
            <Link 
              to="/about" 
              className={`hover:text-[#FFB6C1] transition-colors ${isActive('/about') ? 'text-[#FFB6C1]' : ''}`}
            >
              About
            </Link>
            <Link 
              to="/reviews" 
              className={`hover:text-[#FFB6C1] transition-colors ${isActive('/reviews') ? 'text-[#FFB6C1]' : ''}`}
            >
              Reviews
            </Link>
            <Link 
              to="/gallery" 
              className={`hover:text-[#FFB6C1] transition-colors ${isActive('/gallery') ? 'text-[#FFB6C1]' : ''}`}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className={`hover:text-[#FFB6C1] transition-colors ${isActive('/contact') ? 'text-[#FFB6C1]' : ''}`}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
