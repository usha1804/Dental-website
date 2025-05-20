import React from 'react';
import CTAButton from '../common/CTAButton';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3845975/pexels-photo-3845975.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Dental clinic" 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/80 to-slate-900/50"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Your Smile Deserves The Best Care
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-cyan-50">
            Experience personalized dental care with our expert team using the latest technology.
          </p>
          <div className="flex flex-wrap gap-4">
            <CTAButton 
              text="Book Appointment" 
              to="/contact" 
              className="text-lg px-8 py-4"
            />
            <CTAButton 
              text="Our Services" 
              to="/services" 
              primary={false}
              className="text-lg px-8 py-4 text-white border-white hover:bg-white/10"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;