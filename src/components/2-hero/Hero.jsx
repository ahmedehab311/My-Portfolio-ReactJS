import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section id="hero" className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          {/* <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            // src="./me.jpg"
            className="avatar"
            alt=""
          /> */}
          {/* <div className="icon-verified"></div> */}
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          Frontend Developer
        </motion.h1>

        <p className="sub-title">
          Welcome to my corner of the web! I'm Ahmed Ehab, a passionate
          front-end developer with a talent for transforming ideas into
          captivating experiences. With a blend of creativity and technical
          expertise, I strive to design and build user-friendly interfaces that
          make a lasting impact.
        </p>

        <div className="all-icons flex">
          <a
            href="https://www.linkedin.com/in/ahmed-ehab-137381268/"
            target="_blank"
          >
            <i class=" icon fa-brands fa-linkedin "></i>
          </a>
          <a href="https://github.com/ahmedehab311" target="_blank">
            <i class=" icon fa-brands fa-github"></i>
          </a>
          <a
            href="https://web.facebook.com/yosef.yosef.528316/"
            target="_blank"
          >
            <i class=" icon fa-brands fa-facebook"></i>
          </a>

          <a
          
            href="https://drive.google.com/file/d/1qGtBALx9ToiSWOyDYhQMpI7HEDG-i-11/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="view-cv"
          >
            View CV
          </a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
