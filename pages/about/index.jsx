import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  SiAdobephotoshop,
  SiAntdesign,
  SiBootstrap,
  SiCss3,
  SiFigma,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMui,
  SiReact,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import { fadeIn } from "../../variants";

export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Designing",
        icons: [
          SiHtml5,
          SiCss3,
          SiSass,
          SiBootstrap,
          SiTailwindcss,
          SiMui,
          SiAntdesign,
        ],
      },
      {
        title: "Web Devloping",
        icons: [SiGithub, SiJavascript, SiReact],
      },
      {
        title: "UI/UX Design",
        icons: [SiFigma, SiAdobephotoshop],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Web designer - La Net Team",
        stage: "Apr 2021 - Present",
      },
      {
        title: "Web designer - Eastern Techno Solutions",
        stage: "Jan 2020 - Apr 2021",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/100 py-4 lg:py-0">
      {/* <Circles /> */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 right-0"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col lg:items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-3"
          >
            Where words fail <span className="text-accent">Your design</span>{" "}
            Outshines
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="xl:max-w-[500px] mb-3 xl:mb-12 px-2 xl:px-0"
          >
            Design is the creative edge that speaks volumes for your brand. A
            decade ago, when I started this journey, all I had was vision and a
            dedication to building brands that not only appear but also reflect
            your core values, unique selling point, and experience. Throughout
            this journey, I have worked end-to-end, from shaping a brand to
            nurturing it.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={4} duration={3} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience.
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-4 xl:gap-y-4">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 text-white/60"
              >
                <div className="text-base font-light mb-1 md:mb-0 ">
                  {item.title}
                </div>
                <div className="hidden md:flex">-</div>
                <div className="text-left">{item.stage}</div>

                <div className="flex gap-x-3">
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-xl lg:text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
