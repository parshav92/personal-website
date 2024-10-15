import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import BackgroundAnimation from '@/components/bg-animation';

const Hero: React.FC = () => {
  return (
    <div className='min-h-svh grid p-4 md:p-8 lg:p-8'>
    <div className="h-full rounded-3xl hero-bg">
      {/* items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover  bg-center */}
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
        </div>blobity

        <h1 className=" text-white text-opacity-75 text-4xl md:text-9xl font-bold mb-4 !leading-snug tracking-tight line">
          PARSHAV
          {/* <span className='bg-black bg-opacity-40 rounded-2xl mx-8 px-4'>
              <span className="text-white text-opacity-75 bg-clip-text drop-shadow-2xl">Mumbai</span>
            </span> */}
        </h1>

        <p className="text-white text-opacity-75 text-lg mb-8 max-w-2xl mx-auto">
          A dedicated Web Developer specializing in cybersecurity and Blockchain
          development, creating impactful and interactive user experiences
        </p>

        <div className="space-x-4">
          <Link href="#contact" className="bg-black text-white px-6 py-3 rounded-full font-medium">
            Contact
          </Link>
          <Link
            href="https://drive.google.com/file/d/1-bgnBDhIEA31mn00TGf8R4X2C65nQYv7/view" aria-label='Open my Resume'
            target="_blank"
            data-blobity-magnetic="false"
            className="bg-white text-black px-6 py-3 rounded-full font-medium">
            Resume
          </Link>
        </div>

        {/* <div className="mt-12 bg-white border-t-2 border-indigo-200 rounded-lg p-6 max-w-md mx-auto shadow-lg">
            <div className="flex items-center mb-4 text-black opacity-55">
              <div className="w-10 h-10 bg-black rounded-full mr-4"></div>
              <div>
                <p className="font-semibold">Parshav</p>
                <p className="text-sm ">Student at DJS</p>
              </div>
            </div>
            <p className="text-sm italic text-black opacity-55">
              &quot;Alex&apos;s Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo sint placeat dolore labore quaerat ex aut, eveniet, quis aliquid in repellendus ut itaque eum aliquam voluptates, aspernatur harum ;
            </p>
          </div> */}
        {/* <BackgroundAnimation /> */}
      </main>
    </div>
    </div>
  );
};

export default Hero;