import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-gradient-to-r 
    from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] "
    >
      <div
        className="container mx-auto px-6 flex flex-col md:flex-row
    items-center justify-between "
      >
        {/* left side div */}
        <div className="md:w-1/2 mb-10 md:mb-0 gap-2 ">
          <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight z-10 relative">
            Hi, I'm{" "}
            <span className="text-purple relative inline-block">
              Jit Mondal
            </span>
          </h1>
          <h2 className="text-2xl  font-semibold typewriter mb-6">
            Full Stack Web Developer
          </h2>
          <p className="text-lg text-gray-300 mb-8 ">
            Building modern, scalable web applications using React, Spring Boot
            & PostgreSQL.
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-purple rounded-lg 
             font-medium hover:bg-purple-700 transition duration-300"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-purple rounded-lg
            font-medium hover:bg-purple/20 transition duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right side div */}
     <div className="flex md:w-1/2 justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r 
            from-purple to-pink opacity-70"
            >
              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                className="relative rounded-full w-64 h-64 md:w-80
             md:h-80 object-cover object-top z-10 "
                src={assets.profileImg}
                alt="profile"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
