import React from 'react';
import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import ServicesOverview from '../components/home/ServicesOverview';
import FAQ from '../components/common/FAQ';
import CTAButton from '../components/common/CTAButton';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <IntroSection />
      <ServicesOverview />
      
      {/* Appointment CTA Section */}
      <section className="py-20 bg-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Schedule Your Visit?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Book your appointment today and take the first step toward a healthier, brighter smile.
          </p>
          <CTAButton 
            text="Book Appointment Now" 
            to="/contact" 
            className="text-lg px-8 py-4 bg-white text-cyan-700 hover:bg-cyan-50 border-none"
            primary={false}
          />
        </div>
      </section>
      
      <FAQ />
    </>
  );
};

export default Home;