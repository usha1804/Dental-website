import React from 'react';

const ClinicStory: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Our Story</h2>
            <p className="text-slate-600 mb-4">
              Founded in 2010, Today's Dental Services began with a simple mission: to provide exceptional dental care in a comfortable and welcoming environment. Dr. Sarah Johnson established the practice with a commitment to combining the latest in dental technology with personalized, patient-centered care.
            </p>
            <p className="text-slate-600 mb-4">
              Over the years, our practice has grown from a small clinic to a comprehensive dental care center offering a wide range of services. We've expanded our team with specialists in various fields of dentistry, allowing us to provide everything from routine cleanings to complex dental surgeries under one roof.
            </p>
            <p className="text-slate-600">
              Despite our growth, we've maintained our founding principle of treating each patient as an individual with unique needs and concerns. We pride ourselves on creating lasting relationships with our patients, many of whom have been with us since we first opened our doors.
            </p>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img 
              src="https://images.pexels.com/photos/3845724/pexels-photo-3845724.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Dental office" 
              className="rounded-lg shadow-md"
            />
            <img 
              src="https://images.pexels.com/photos/4270370/pexels-photo-4270370.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Dental equipment" 
              className="rounded-lg shadow-md"
            />
            <img 
              src="https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Reception area" 
              className="rounded-lg shadow-md"
            />
            <img 
              src="https://images.pexels.com/photos/3945673/pexels-photo-3945673.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Patient consultation" 
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicStory;