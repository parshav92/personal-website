import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import AnimatedBody from '../app/animations/animated-body';
import AnimatedWords from '../app/animations/animated-words';

const ConnectSection = () => {
  return (
    <motion.section
      className="relative z-10 flex h-screen w-full items-center justify-center overflow-hidden bg-cover bg-center py-16"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center relative w-full sm:items-center lg:max-w-[1440px]">
          <AnimatedWords
            title="Connect &"
            style="flex max-w-[500px] flex-col items-start text-left text-6xl font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-7xl md:text-8xl lg:text-center lg:text-9xl"
          />
          <AnimatedWords
            title="Create"
            style="flex max-w-[500px] flex-col items-end text-right text-6xl font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center sm:text-7xl md:text-8xl lg:text-center lg:text-9xl mt-2 sm:mt-4"
          />
        </div>

        <div className="mt-10 flex w-full flex-col items-center justify-center gap-10 sm:mt-20 sm:gap-12 md:mt-24 md:flex-row md:items-start md:justify-between lg:mt-12 lg:max-w-[1440px]">
          <div className="flex w-[350px] max-w-[90%] flex-col items-center text-center text-[14px] font-semibold uppercase text-gray-300 sm:w-[350px] sm:text-[14px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody
              text="Ready to bring ideas to life? Let's collaborate on your next big project or simply exchange thoughts on the latest in tech."
              className="-mb-1 inline-block overflow-hidden pt-1 sm:-mb-2 md:-mb-3 lg:-mb-4 font-medium"
            />
            <div className="mt-5 flex items-center">
              <Link
                href="mailto:dedhiaparshav@gmail.com?subject=Lets%20work%20together!&amp;body=Hello%2C%20I%20think%20we%20need%20you%20to%20work%20on%2Fcollaborate%20this%20particular%20product...%20Reach%20out%20as%20soon%20as%20you%20can."
                target="_blank"
                aria-label="Send me an email"
                className="mt-1 w-full flex-1 underline underline-offset-2 hover:no-underline sm:mt-2 md:mt-3 lg:mt-4"
              >
                <AnimatedBody
                  text="Send me an email"
                  className="w-full pr-0"
                />
              </Link>
            </div>
          </div>

          <div className="flex gap-10 text-[16px] font-bold text-gray-300 sm:gap-14 sm:text-[20px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
            <SocialLink href="https://github.com/parshav92" icon={faGithub} label="GitHub" />
            <SocialLink href="https://linkedin.com/in/parshav-dedhia" icon={faLinkedin} label="LinkedIn" />
            <SocialLink href="https://twitter.com/parshavdedhia" icon={faTwitter} label="Twitter" />
            <SocialLink href="https://instagram.com/parshav._" icon={faInstagram} label="Instagram" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

interface SocialLinkProps {
  href: string;
  icon: IconDefinition;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <Link href={href} target="_blank" aria-label={label}>
      <FontAwesomeIcon icon={icon} className="w-8 h-8 sm:w-10 sm:h-10 md:w-8 md:h-8 lg:w-12 lg:h-12 text-gray-300 hover:text-purple-400 transition-colors duration-300" />
  </Link>
);

export default ConnectSection;