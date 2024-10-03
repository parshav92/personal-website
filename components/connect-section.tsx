import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const ConnectSection = () => {
  return (
    <div className="relative py-16 bg-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center"></div>

      <div className="relative mx-auto p-10 rounded-xl shadow-2xl bg-transparent">
        <h1 className="text-8xl font-bold mb-6 text-center">
             <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">Let&apos;s Talk</span>
        </h1>
        <p className="text-gray-400 text-lg text-center mb-8">
        Got a question, proposal, project, or want to work together on something?
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-700 transition-colors">
            Book a Call
          </button>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors">
            Email Me
          </button>
        </div>
        <div className="text-center space-x-4">
          <Link href="#">
            <FontAwesomeIcon icon={faLinkedin} className="w-10 h-10" />
          </Link>
          {/* <span>dedhiaparshav@gmail.com</span> */}
        </div>
      </div>

      <div className="relative text-center mt-12 text-gray-500 text-sm">
        <span>&copy; 2024 | Made with ❤️ by parshav</span>
      </div>
    </div>
  );
};

export default ConnectSection;
