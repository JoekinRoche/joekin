import React, { useState } from "react";
import "./about.css";
import Me from "../../assets/wallpaper.jpg";
import { FaAward, FaCertificate, FaFolder} from "react-icons/fa";
import {motion} from "framer-motion";

const About = () => {

  const [isAnimating,setIsAnimating] = useState(false)

  return (
    <section id="about">
      <h5>Hello I'm</h5>
        <h2 className="flex justify-content-center">Joekin Roche</h2>
        {/* <h5 className="text-light"> Full-stack Developer</h5> */}
      <div className="container about_container">
        <motion.div
        className="about_me"
        animate={{
          y: isAnimating ? "-1rem":"0rem",
        }}
        transition={{
          stiffness: 100,
          damping:1,
          type: "spring"
        }}
        onHoverStart= {() => setIsAnimating(!isAnimating)}
        >
          <div className="about_me-image">
            <img src={Me} alt="About me" />
          </div>
        </motion.div>
        <div className="about_content">
          <motion.div className="about_cards"
          animate={{
            y: "-1rem",
          }}
          transition={{
            stiffness: 100,
            damping:1,
            type: "spring"
          }}
          
          >
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            <article className="about_card">
              <FaCertificate className="about_icon" />
              <h5>Certificates</h5>
              <small>7+</small>
            </article>
            <article className="about_card">
              <FaFolder className="about_icon" />
              <h5>Projects</h5>
              <small>10 projects completed</small>
            </article>
          </motion.div>
          <p>I’m a certified full-stack developer, who enjoys building interactive interfaces with JavaScript, ReactJS and MySQL.
            <br />
            <br />
            I'm open to Full-stack(remote/onsite) opportunities with a passion of Front-end development.
            If you like what you see and have a project you need coded, 
            don’t hestiate to contact me.
          </p>
          <a href="#project" className="btn btn-primary"> See my projects</a>
        </div>
      </div>
    </section>
  );
};

export default About;
