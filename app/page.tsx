"use client"
import Hero from "@/components/Hero";
import useBlobity from "blobity/lib/react/useBlobity";
import { initialBlobityOptions } from "./utils/blobityConfig";
import { useEffect } from "react";

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
    </div>
  );
};

export default Page;