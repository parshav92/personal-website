"use client"
import Hero from "@/components/hero";
import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from "./utils/blobityConfig";
import { useEffect } from "react";
import SkillsSection from "@/components/skills-section";
import Project from "./project-section/project";
import ConnectSection from "@/components/connect-section";
import Footer from "@/components/footer";
import About from "./about-section/about";

const Page = () => {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-expect-error for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);
  return (
    <>
      <div >
        <Hero />
        <SkillsSection />
        <About />
        <Project />
        <ConnectSection />
        <Footer />
      </div>
    </>
  );
};

export default Page;