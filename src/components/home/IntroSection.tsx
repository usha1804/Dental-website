import React from 'react';
import { CheckCircle } from 'lucide-react';
import CTAButton from '../common/CTAButton';

const IntroSection: React.FC = () => {
  const benefits = [
    'State-of-the-art facilities and equipment',
    'Experienced and friendly dental professionals',
    'Comprehensive range of dental services',
    'Comfortable and relaxing environment'
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Dental clinic interior" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Welcome to Today's Dental Services</h2>
            <p className="text-slate-600 mb-6">
              Our mission is to provide exceptional dental care in a comfortable and welcoming environment. We combine the latest in dental technology with a personalized approach to ensure your dental health and beautiful smile.
            </p>
            
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={20} className="text-cyan-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>
            
            <CTAButton text="Learn More About Us" to="/about" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;