import React, { useState } from "react";
import {AnimatePresence, motion} from 'framer-motion'
import "./project.css";
import IMG1 from "../../assets/IMG1.jpeg";
import IMG2 from "../../assets/Switcher.jpg";
import IMG3 from "../../assets/Gesture Based.jpeg";
import IMG4 from "../../assets/Banking.png";
import IMG5 from "../../assets/Space Travel.PNG";
import IMG6 from "../../assets/demandest.png";

const projects = [
  {
    id: 1,
    image: IMG1,
    title: "Bothub",
    subtitle : "A Ecommerce application for selling robotic products",
    github: "https://github.com/TeamCheems/bothub-react-fe",
    demo: "https://github.com/TeamCheems/bothub-react-fe",
  },
  {
    id: 2,
    image: IMG2,
    title: "Switcher",
    subtitle : "Its a home automation application for controlling home appliances.",
    github: "https://github.com/JoekinRoche/switcher-flutter",
    demo: "https://github.com/JoekinRoche/switcher-flutter",
  },
  {
    id: 3,
    image: IMG3,
    title: "Gesture Based Cursor Control",
    subtitle : "A application for disabled people to control the cursor trough a gesture",
    github: "https://github.com/JoekinRoche/gesture-based-cursor-control",
    demo: "https://github.com/JoekinRoche/gesture-based-cursor-control",
  },
  {
    id: 4,
    image: IMG4,
    title: "DR Bank",
    subtitle : "Its a bank application made for Sparks Foundation internship",
    github: "https://github.com/JoekinRoche/Banking_Website",
    demo: "https://github.com/JoekinRoche/Banking_Website",
  },
  {
    id: 5,
    image: IMG5,
    title: "Zue Technologies",
    subtitle : "Its a professional portfolio website made for an organization",
    github: "https://github.com/JoekinRoche/zue-technologies",
    demo: "https://github.com/JoekinRoche/zue-technologies",
  },
  {
    id: 6,
    image: IMG6,
    title: "DemandEst Food Service",
    subtitle : "Its a application for estimating the food sales service on particular day",
    github: "https://github.com/IBM-EPBL/IBM-Project-38233-1660375482",
    demo: "https://github.com/IBM-EPBL/IBM-Project-38233-1660375482",
  },
];
const Projects = () => {
  return (
    <section id="project">
      <div className="container project_container">
      {projects.map(({ id, image, title, github, demo,subtitle }) => {
          return (
            <article key={id} className="project_item">
          <div>
          <img className="project_item-image" src={image} alt={title} />
          </div>
              <p className="project_title">{title}</p>
              <h4 className="project_subtitle" >{subtitle}</h4>
          <div className="project-item-cta">
                     <a
            href={github}
            className="btn"
          >
            Github
          </a>
          <a href={demo} className="project-item-cta btn btn-primary" target='_blank' rel="noreferrer">
            SnapShots
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

