import React from 'react';
import Navbar from '@/components/Navbar';

const About = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto p-6 text-center bg-white text-black flex flex-col justify-center items-center flex-grow">
          <h1 className="text-4xl font-bold mb-4">About Pobe Poxo</h1>
          <p className="text-lg mb-4">
            Welcome to Pobe Poxo! We are a passionate team based in Tegucigalpa, Honduras, with diverse experience across various artistic mediums. Our mission is to create immersive and artistic games that captivate players of all ages.
          </p>
          <p className="text-lg mb-4">Meet the team:</p>
          <p className="text-lg">
            <strong>Gisele Castillo</strong>: Production
          </p>
          <p className="text-lg">
            <strong>Daniel Macías</strong>: Development
          </p>
          <p className="text-lg mb-4">
            <strong>Mario Cárcamo</strong>: Art
          </p>
          <p className="text-lg">
            Together, we are dedicated to bringing unique and unforgettable interactive experiences to life.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
