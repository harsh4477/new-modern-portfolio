import { motion } from "framer-motion";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <>
      <div className="bg-primary/100 h-full">
        {/* text */}
        <div className="w-full h-full">
          <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
            {/* title */}
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h1 z-50"
            >
              Transforming Ideas <br /> Into{" "}
              <span className="text-accent">Digital Reality</span>
            </motion.h1>

            {/* subtitle */}
            <motion.p
              variants={fadeIn("down", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 z-50"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptate, exercitationem harum, quia nulla temporibus deleniti
              libero veniam vero beatae numquam ducimus illum ab similique ipsam
              tempore fugit quod laudantium debitis.
            </motion.p>

            {/* btn */}
            <div className="flex justify-center xl:hidden relative">
              <ProjectsBtn />
            </div>
            <motion.div
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden xl:flex z-50"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
        {/* image */}
        <div className="w-[1280px] h-full absolute right-0 bottom-0">
          {/* bg img */}
          {/* <div className="absolute top-0 right-0 w-full h-full bg-primary/100"></div> */}
          <div
            role="img"
            className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full mix-blend-hard-light translate-z-0 opacity-30"
            aria-hidden
          />

          {/* avatar */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full max-w-[605px] max-h-[555px] absolute -bottom-32 lg:bottom-12 lg:right-[10%]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
      {/* particles */}
      <ParticlesContainer />
    </>
  );
};

export default Home;
