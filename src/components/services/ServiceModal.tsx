import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Service } from '../../types';

interface ServiceModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/75 p-4">
      <div 
        ref={modalRef}
        className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto animate-fade-in"
      >
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-semibold text-slate-800">{service.title}</h3>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-slate-700 whitespace-pre-line">{service.details}</p>
          
          <div className="mt-8">
            <h4 className="font-medium text-slate-800 mb-2">Benefits</h4>
            <ul className="list-disc list-inside space-y-1 text-slate-600">
              <li>Improved oral health</li>
              <li>Prevention of future dental issues</li>
              <li>Enhanced smile aesthetics</li>
              <li>Greater comfort and confidence</li>
            </ul>
          </div>
        </div>
        
        <div className="p-6 bg-slate-50 border-t rounded-b-lg">
          <button
            onClick={onClose}
            className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;