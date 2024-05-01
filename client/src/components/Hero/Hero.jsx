import React from "react";
import "./Hero.css";
import {HiLocationMarker} from "react-icons/hi";
import CountUp from "react-countup";
import {motion} from 'framer-motion'
export const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left section */}

        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
            initial={{y:"2rem",opacity:0}}
            animate={{y:0,opacity:1}}
            transition={{
              duration:2,
              type:"spring"
            }}
            >
              Discover <br /> Your Dream Home <br />
              with Us
            </motion.h1>
          </div>
          <div className="flexColStart hero-des wrap-it">
            <span className="secondaryText">Finding your dream home becomes effortless</span>
            <span className="secondaryText">
              with expert guidance, and a seamless browsing experience
            </span>
          </div>
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text"></input>
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1200} end={1400} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Productos</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={600} end={700} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={27} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>
        {/* right section */}
        <div className="flexCenter hero-right">
          <motion.div 
          initial={{x:"7rem",opacity:0}}
          animate={{x:0,opacity:1}}
          transition={{
            duration:2,
            type:"spring"
          }}
          className="image-container">
            <img src="./hero-image.jpg" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
