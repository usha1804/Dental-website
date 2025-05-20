import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Bluetooth as Tooth } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <Tooth size={32} className="text-cyan-600 mr-2" />
          <span className="text-xl font-semibold text-slate-800">Today's Dental Services</span>
        </NavLink>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `font-medium transition-colors duration-200 ${
                isActive 
                  ? 'text-cyan-600 border-b-2 border-cyan-600' 
                  : `${isScrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-slate-700 hover:text-cyan-600'}`
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              `font-medium transition-colors duration-200 ${
                isActive 
                  ? 'text-cyan-600 border-b-2 border-cyan-600' 
                  : `${isScrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-slate-700 hover:text-cyan-600'}`
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink 
            to="/services" 
            className={({isActive}) => 
              `font-medium transition-colors duration-200 ${
                isActive 
                  ? 'text-cyan-600 border-b-2 border-cyan-600' 
                  : `${isScrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-slate-700 hover:text-cyan-600'}`
              }`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `font-medium transition-colors duration-200 ${
                isActive 
                  ? 'text-cyan-600 border-b-2 border-cyan-600' 
                  : `${isScrolled ? 'text-slate-700 hover:text-cyan-600' : 'text-slate-700 hover:text-cyan-600'}`
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-800" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({isActive}) => 
                `font-medium transition-colors duration-200 ${
                  isActive ? 'text-cyan-600' : 'text-slate-700 hover:text-cyan-600'
                }`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({isActive}) => 
                `font-medium transition-colors duration-200 ${
                  isActive ? 'text-cyan-600' : 'text-slate-700 hover:text-cyan-600'
                }`
              }
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
            <NavLink 
              to="/services" 
              className={({isActive}) => 
                `font-medium transition-colors duration-200 ${
                  isActive ? 'text-cyan-600' : 'text-slate-700 hover:text-cyan-600'
                }`
              }
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({isActive}) => 
                `font-medium transition-colors duration-200 ${
                  isActive ? 'text-cyan-600' : 'text-slate-700 hover:text-cyan-600'
                }`
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;