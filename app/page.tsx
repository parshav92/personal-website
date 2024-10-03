"use client"
import Hero from "@/components/hero";
import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from "./utils/blobityConfig";
import { useEffect } from "react";
import SkillsSection from "@/components/skills-section";
import Project from "./project-section/project";

const Page = () => {
  const blobityInstance = useBlobity(initialBlobityOptions);

  useEffect(() => {
    if (blobityInstance.current) {
      // @ts-expect-error for debugging purposes or playing around
      window.blobity = blobityInstance.current;
    }
  }, [blobityInstance]);
  return (
    <div >
      <Hero />
      <h1 className="text-3xl font-bold text-center mb-6">My Skills</h1>
      <SkillsSection />
      <Project />
    </div>
  );
};

export default Page;