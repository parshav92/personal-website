import AnimatedBody from "../animations/animated-body";
import AnimatedTitle from "../animations/animated-title";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb - 36 md:pt-20 md:pb - 44 lg:pt-20 lg:pb - 56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "BUILDING FUNCTIONAL SOFTWARE AND CREATING INNOVATIVE SOLUTIONS."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
                text={
                    "Hello! I'm Parshav Dedhia"
                }
                className={"underline underline-offset-4 hover:no-underline"}
            />
            <AnimatedBody
                text={
                    "A software developer based in Mumbai, India. I'm B.Tech student at D.J. Sanghvi College of Engineering, pursuing Computer Engineering."
            }
            />
            <AnimatedBody
              text={
                "As a full-stack developer, I specialize in building scalable web applications for various domains like SaaS, AI, and blockchain. With a passion for creating seamless user experiences, I aim to craft impactful software that solves real-world problems."
              }
            />
            <AnimatedBody
              text={
                "From developing real-time, collaborative tools to enhancing web performance, I enjoy working with modern tech stacks like Next.js, Node, Flask, MongoDB, and React, always striving for innovation."
              }
            />
            <AnimatedBody
              text={
                "When I'm not working on development projects, I love watching new anime, spending time with friends, and listening to music. Music fuels my creativity, with a playlist filled with chill rap, phonk and edm."
              }
            />
            <AnimatedBody
              text={
                "I’m always excited to explore new opportunities and collaborate on projects that push boundaries. Let's create something amazing together!"
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript (ES6+), React, Next.js, Tailwind CSS, TypeScript, Redux, Git/GitHub, NextAuth."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Backend Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Node.js, Flask, Bun.js, FastAPI, Convex, MongoDB, Express, REST APIs."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Web3 Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Solidity, Web3.js, Ethers.js, Solana, Metamask."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
