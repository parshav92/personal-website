export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
    image?: string;
    available: boolean;
    bgColor?: string;
  };
  
  export const devProjects = [
    {
      id: 0,
      name: "Hiro",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["NextJS", "Convex", "Liveblocks"],
      github: "",
      demo: "",
      image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
      available: true,
    },
    {
      id: 1,
      name: "EventEase",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["ReactJS", "UI Design", "NodeJS"],
      github: "",
      demo: "",
      image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
      available: true,
    },
    {
      id: 2,
      name: "Blockride",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["NextJS", "Solidity", "Web3"],
      github: "",
      demo: "",
      image:
        "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
      available: true,
    },
    {
      id: 3,
      name: "Insightify",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["ReactJS", "UI Design", "Webscraping"],
      github: "",
      demo: "",
      image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
      available: true,
    },
  ];
  
  
  export const designProjects = [
    {
      id: 0,
      name: "UTS",
      description:
        "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["Figma", "UI Design", "UI Experience"],
      github: "",
      demo: "",
      bgColor: "#F9F9F9",
      // image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
      available: true,
    }
  ];