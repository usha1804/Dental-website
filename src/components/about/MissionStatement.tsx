import React from 'react';

const MissionStatement: React.FC = () => {
  return (
    <section className="py-16 bg-cyan-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
        <blockquote className="max-w-4xl mx-auto text-2xl italic font-light leading-relaxed">
          "To provide exceptional dental care that enhances the quality of life of our patients through improved oral health, increased confidence, and beautiful smiles. We are committed to creating a comfortable, welcoming environment where patients of all ages feel valued and respected."
        </blockquote>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
            <p className="text-cyan-50">
              We are committed to maintaining the highest standards in dental care through continuous education and investment in advanced technology.
            </p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3">Compassion</h3>
            <p className="text-cyan-50">
              We understand dental anxiety and strive to create a gentle, supportive experience for every patient, especially those who fear dental visits.
            </p>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-3">Community</h3>
            <p className="text-cyan-50">
              We believe in giving back to our community through education programs and providing dental care to underserved populations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;