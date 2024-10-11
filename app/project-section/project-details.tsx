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
      github: "https://github.com/parshav92/hiro",
      demo: "https://hiro-beta.vercel.app/",
      image: "/test.png",
      available: true,
    },
    {
      id: 1,
      name: "EventEase",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["ReactJS", "UI Design", "NodeJS"],
      github: "https://github.com/parshav92/EventEase",
      demo: "https://eventease18.netlify.app/",
      image: "/test.png",
      available: true,
    },
    {
      id: 2,
      name: "Blockride",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["NextJS", "Solidity", "Web3"],
      github: "https://github.com/parshav92/BlockRide",
      demo: "https://block-ride2.vercel.app/",
      image:
        "/test.png",
      available: true,
    },
    {
      id: 3,
      name: "Insightify",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      technologies: ["ReactJS", "UI Design", "Webscraping"],
      github: "https://github.com/parshav92/insightify",
      demo: "https://youtu.be/EHL6AA6t-Ko",
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
      github: "https://www.figma.com/design/GZOdWo00aMCi4lea8I1TZP/uts?node-id=0-1&t=ZDymVslui6i6pvwc-1",
      demo: "",
      bgColor: "#F9F9F9",
      image: "/test.png",
      available: true,
    }
  ];