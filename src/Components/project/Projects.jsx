import React, { useState } from "react";
import {AnimatePresence, motion} from 'framer-motion'
import "./project.css";
import IMG1 from "../../assets/IMG1.jpeg";
import IMG2 from "../../assets/Switcher.jpg";
import IMG3 from "../../assets/Gesture Based.jpeg";
import IMG4 from "../../assets/farm2hand.jpg";
import IMG5 from "../../assets/Space Travel.PNG";
import IMG6 from "../../assets/demandest.png";

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "Bothub",
    github: "https://github.com/TeamCheems/bothub-react-fe",
    demo: "https://somarven.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Switcher - Home Automation",
    github: "https://github.com/Somdotta07/js-capstone",
    demo: "https://mwanawabangona.github.io/js-capstone/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Gesture Based Cursor Control",
    github: "https://github.com/JoekinRoche/gesture-based-cursor-control",
    demo: "https://determined-aryabhata-b6bc71.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Farm2Hand",
    github: "https://github.com/Somdotta07/recipe-blog-1",
    demo: "https://gentle-hollows-44027.herokuapp.com/users/sign_in",
  },
  {
    id: 5,
    image: IMG5,
    title: "Zue Technologies",
    github: "https://github.com/Somdotta07/space-travelers-hub",
    demo: "https://cranky-cray-0feacf.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "DemandEst Food Service",
    github: "https://github.com/Somdotta07/Awesome_Books",
    demo: "https://somdotta07.github.io/Awesome_Books/",
  },
];
const Projects = () => {
  return (
    <section id="project">
      <div className="container project_container">
      {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
          <div className="project_item-image">
          <img src={image} alt={title} />
          </div>
              <h3>{title}</h3>
          <div className="project-item-cta">
                     <a
            href={github}
            className="btn"
          >
            Github
          </a>
          <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">
            Live Demo
          </a>
          </div> 
        </article>
          )
        })}               
      </div>
    </section>
  );
};

export default Projects;


{/* <div className="container project_container"> */}

      {/* {projects.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="project_item">
          <div className="project_item-image">
          <img src={image} alt={title} />
          </div>
              <h3>{title}</h3>
          <div className="project-item-cta">
                     <a
            href={github}
            className="btn"
          >
            Github
          </a>
          <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">
            Live Demo
          </a>
          </div> 
        </article>
          )
        })}               
      </div> */}
