import React from 'react';
import Head from 'next/head';

const Hero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-lime-100 to-fuchsia-100 flex items-center justify-center px-4">
      <Head>
        <title>Parshav - </title>
        <meta name="description" content="Web Developer specializing in cybersecurity and Blockchain development" />
      </Head>
      
      <main className="text-center">
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
            <span className="w-2 h-2 mr-2 bg-green-400 rounded-full"></span>
            Currently Available
          </span>
        </div>
        
        <h1 className=" text-black text-opacity-75 text-4xl md:text-6xl font-bold mb-4 font-[family-name:var(--font-geist-mono)]">
          I&apos;m Parshav, Web Developer<br />and CS major based in 
          <span className='bg-black opacity-40 rounded-2xl mx-8 px-4'>
            <span className=" bg-black opacity-40 rounded-2xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-pink/80 to-rose/20">Mumbai</ span>
          </span>
        </h1>
        
        <p className="text-black text-opacity-75 text-lg mb-8 max-w-2xl mx-auto">
          A dedicated Web Developer specializing in cybersecurity and Blockchain
          development, creating impactful and interactive user experiences
        </p>
        
        <div className="space-x-4">
          <button className="bg-black text-white px-6 py-3 rounded-lg font-medium">
            Contact
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium">
            Resume
          </button>
        </div>
        
        <div className="mt-12 rounded-lg p-6 max-w-md mx-auto shadow-lg">
          <div className="flex items-center mb-4 text-black opacity-55">
            <div className="w-10 h-10 bg-black rounded-full mr-4"></div>
            <div>
              <p className="font-semibold ">Parshav</p>
              <p className="text-sm ">Student at DJS</p>
            </div>
          </div>
          <p className="text-sm italic text-black opacity-55">
            &quot;Alex&apos;s Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo sint placeat dolore labore quaerat ex aut, eveniet, quis aliquid in repellendus ut itaque eum aliquam voluptates, aspernatur harum ;
          </p>
        </div>
      </main>
    </div>
  );
};

export default Hero;