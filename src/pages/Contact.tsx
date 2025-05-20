import React from 'react';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';

const Contact: React.FC = () => {
  return (
    <>
      <div className="pt-20 pb-10 bg-cyan-600">
        <div className="container mx-auto px-4 pt-16">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
        </div>
      </div>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Get in Touch With Us</h2>
            <p className="text-slate-600">
              We're here to answer any questions you have about our dental services. Reach out to us and we'll respond as soon as we can.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;