import React from 'react';
import ClinicStory from '../components/about/ClinicStory';
import MissionStatement from '../components/about/MissionStatement';
import PractitionersInfo from '../components/about/PractitionersInfo';

const About: React.FC = () => {
  return (
    <>
      <div className="pt-20 pb-10 bg-cyan-600">
        <div className="container mx-auto px-4 pt-16">
          <h1 className="text-4xl font-bold text-white">About Us</h1>
        </div>
      </div>
      
      <ClinicStory />
      <MissionStatement />
      <PractitionersInfo />
    </>
  );
};

export default About;