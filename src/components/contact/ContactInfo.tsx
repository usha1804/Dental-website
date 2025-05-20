import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo: React.FC = () => {
  return (
    <div>
      <h3 className="text-2xl font-semibold text-slate-800 mb-6">Contact Information</h3>
      
      <div className="space-y-6">
        <div className="flex items-start">
          <Phone size={20} className="text-cyan-600 mr-3 mt-1" />
          <div>
            <p className="font-medium text-slate-800">Phone</p>
            <p className="text-slate-600">(555) 123-4567</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Mail size={20} className="text-cyan-600 mr-3 mt-1" />
          <div>
            <p className="font-medium text-slate-800">Email</p>
            <p className="text-slate-600">info@todaysdental.com</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <MapPin size={20} className="text-cyan-600 mr-3 mt-1" />
          <div>
            <p className="font-medium text-slate-800">Address</p>
            <p className="text-slate-600">
              123 Smile Avenue<br />
              Dental District<br />
              New York, NY 10001
            </p>
          </div>
        </div>
        
        <div className="flex items-start">
          <Clock size={20} className="text-cyan-600 mr-3 mt-1" />
          <div>
            <p className="font-medium text-slate-800">Office Hours</p>
            <div className="text-slate-600">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8">
        <h4 className="font-medium text-slate-800 mb-3">Location</h4>
        <div className="h-64 rounded-lg overflow-hidden shadow-md">
          <iframe 
            title="Dental Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96706.50013548559!2d-74.05953969644877!3d40.75466700887959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2588f046ee661%3A0xa0b3281fcecc08c!2sManhattan%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1653095247729!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;