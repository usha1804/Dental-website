import React from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/services/ServiceCard';

const Services: React.FC = () => {
  return (
    <>
      <div className="pt-20 pb-10 bg-cyan-600">
        <div className="container mx-auto px-4 pt-16">
          <h1 className="text-4xl font-bold text-white">Our Services</h1>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Comprehensive Dental Services</h2>
            <p className="text-slate-600">
              We offer a wide range of dental services to meet all your oral health needs. From routine cleanings to advanced cosmetic procedures, our team is dedicated to providing exceptional care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="mt-16 bg-slate-50 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold text-slate-800 mb-4">Insurance & Payment Options</h3>
            <p className="text-slate-600 mb-4">
              We accept most major dental insurance plans and offer various payment options to make dental care accessible to all. Our team will help you understand your benefits and maximize your coverage.
            </p>
            <p className="text-slate-600">
              For patients without insurance, we offer affordable payment plans to ensure you receive the care you need without financial stress. Contact our office for more information about our payment options.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;