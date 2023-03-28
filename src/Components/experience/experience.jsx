import React from "react";
import "./experience.css";
import { FaJava,FaPython,FaHtml5,FaCss3,FaReact,FaBootstrap } from "react-icons/fa";
import { DiMysql,DiNodejs,DiJavascript1 } from "react-icons/di";
import { TbBrandTailwind } from "react-icons/tb";


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <FaHtml5 className="experience_details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaCss3 className="experience_details-icon"/>
              <div>
               
                <h4>CSS3</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <DiJavascript1 className="experience_details-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaReact className="experience_details-icon"/>
              <div>                
                <h4>ReactJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaBootstrap className="experience_details-icon"/>
              <div>           
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <TbBrandTailwind className="experience_details-icon"/>
              <div>
               
                <h4>TailwindCSS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <DiMysql className="experience_details-icon"/>
              <div>
        
                <h4>MySQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaJava className="experience_details-icon"/>
              <div>
                <h4>Java</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience_details">
              <DiNodejs className="experience_details-icon" />
              <div>
             
                <h4>NodeJS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_details">
              <FaPython className="experience_details-icon"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
