export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: string[];
    github: string;
    demo: string;
    image: string;
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
      image: "/test.png",
      available: true,
    },
    {
      id: 1,
      name: "EventEase",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["ReactJS", "UI Design", "NodeJS"],
      github: "",
      demo: "",
      image: "/test.png",
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
        "/test.png",
      available: true,
    },
    {
      id: 3,
      name: "Insightify",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["ReactJS", "UI Design", "Webscraping"],
      github: "",
      demo: "",
      image: "/test.png",
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
      image: "/test.png",
      available: true,
    }
  ];