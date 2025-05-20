import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Bluetooth as Tooth, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center mb-4">
              <Tooth size={24} className="text-cyan-400 mr-2" />
              <h3 className="text-xl font-semibold">Today's Dental Services</h3>
            </div>
            <p className="text-slate-300 mb-4">
              Providing quality dental care for the whole family in a comfortable and friendly environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-cyan-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-cyan-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-cyan-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">
                <Link to="/services">General Cleaning</Link>
              </li>
              <li className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">
                <Link to="/services">Teeth Whitening</Link>
              </li>
              <li className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">
                <Link to="/services">Root Canal</Link>
              </li>
              <li className="text-slate-300 hover:text-cyan-400 transition-colors duration-200">
                <Link to="/services">Dental Implants</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-slate-700 pb-2">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={16} className="text-cyan-400 mr-2 mt-1" />
                <span className="text-slate-300">(555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={16} className="text-cyan-400 mr-2 mt-1" />
                <span className="text-slate-300">info@todaysdental.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="text-cyan-400 mr-2 mt-1" />
                <span className="text-slate-300">
                  123 Smile Avenue, Dental District
                  <br />New York, NY 10001
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} Today's Dental Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;