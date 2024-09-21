import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Navbar from '@/components/Navbar';

const Contact = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto p-6 text-center bg-white text-black flex flex-col justify-center items-center flex-grow">
          <h1 className="text-4xl font-bold mb-4 font-playwrite">Contact</h1>
          <p className="text-lg mb-8">Follow us on social media!</p>
          <div className="flex flex-col items-center space-y-4 mb-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                <a href="mailto:pobepoxo@gmail.com" className="text-lg text-black hover:underline">pobepoxo@gmail.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
                <a href="https://twitter.com/pobepoxo" className="text-lg text-black hover:underline">@pobepoxo</a>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faTiktok} className="w-6 h-6" />
                <a href="https://tiktok.com/@pobepoxo" className="text-lg text-black hover:underline">@pobepoxo</a>
              </div>
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
                <a href="https://instagram.com/pobepoxo" className="text-lg text-black hover:underline">@pobepoxo</a>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg">For any inquiries and more information, visit:</p>
            <a href="https://maciasreynaud.com" className="text-lg text-blue-500 hover:underline">maciasreynaud.com</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
