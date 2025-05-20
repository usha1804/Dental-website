import React, { useState } from 'react';
import { Service } from '../../types';
import { ChevronRight, Brush as Toothbrush, Bluetooth as Tooth, Stethoscope, Pill, Aperture, Syringe } from 'lucide-react';
import ServiceModal from './ServiceModal';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getIcon = () => {
    switch (service.icon) {
      case 'Toothbrush':
        return <Toothbrush size={32} className="text-cyan-600" />;
      case 'Tooth':
        return <Tooth size={32} className="text-cyan-600" />;
      case 'Stethoscope':
        return <Stethoscope size={32} className="text-cyan-600" />;
      case 'Pill':
        return <Pill size={32} className="text-cyan-600" />;
      case 'Aperture':
        return <Aperture size={32} className="text-cyan-600" />;
      case 'Syringe':
        return <Syringe size={32} className="text-cyan-600" />;
      default:
        return <Tooth size={32} className="text-cyan-600" />;
    }
  };

  return (
    <>
      <div 
        className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="mb-4">{getIcon()}</div>
        <h3 className="text-xl font-semibold text-slate-800 mb-2">{service.title}</h3>
        <p className="text-slate-600 mb-4">{service.description}</p>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center text-cyan-600 hover:text-cyan-700"
        >
          Learn more <ChevronRight size={16} className="ml-1" />
        </button>
      </div>

      <ServiceModal 
        service={service}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default ServiceCard;