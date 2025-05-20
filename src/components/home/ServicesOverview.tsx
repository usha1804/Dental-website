import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brush as Toothbrush, Bluetooth as Tooth, Stethoscope, Aperture } from 'lucide-react';

const ServicesOverview: React.FC = () => {
  const featuredServices = [
    {
      id: 1,
      title: 'General Cleaning',
      description: 'Professional dental cleaning to remove plaque and tartar buildup.',
      icon: <Toothbrush size={32} className="text-cyan-600" />,
    },
    {
      id: 2,
      title: 'Teeth Whitening',
      description: 'Advanced whitening techniques for a brighter, more confident smile.',
      icon: <Tooth size={32} className="text-cyan-600" />,
    },
    {
      id: 3,
      title: 'Root Canal',
      description: 'Pain-free root canal treatments using the latest technology.',
      icon: <Stethoscope size={32} className="text-cyan-600" />,
    },
    {
      id: 4,
      title: 'Dental Implants',
      description: 'Long-lasting tooth replacement options for a natural look and feel.',
      icon: <Aperture size={32} className="text-cyan-600" />,
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We offer a comprehensive range of dental services to meet all your oral health needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredServices.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
              <p className="text-slate-600 mb-4">{service.description}</p>
              <Link 
                to="/services" 
                className="inline-flex items-center text-cyan-600 hover:text-cyan-700"
              >
                Learn more <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/services" 
            className="inline-block px-6 py-3 rounded-md font-medium bg-cyan-600 text-white hover:bg-cyan-700 transition-colors duration-200 shadow-md"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;