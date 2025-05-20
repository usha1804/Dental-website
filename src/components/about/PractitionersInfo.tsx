import React from 'react';
import { practitioners } from '../../data/practitioners';

const PractitionersInfo: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Dental Team</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Meet our team of experienced dental professionals dedicated to providing you with the best care possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practitioners.map((practitioner) => (
            <div 
              key={practitioner.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <img 
                src={practitioner.image} 
                alt={practitioner.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-1">{practitioner.name}</h3>
                <p className="text-cyan-600 font-medium mb-4">{practitioner.designation}</p>
                <p className="text-slate-600">{practitioner.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PractitionersInfo;