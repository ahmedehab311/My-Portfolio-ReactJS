import React from 'react'
import html from "./img/info-html.svg"
import css from "./img/info-css.svg"
import javascript from "./img/info-javascript.svg"
import react from "./img/info-react.svg"
import figma from "./img/info-figma.svg"
import git from "./img/info-git.svg"
import github from "./img/info-github.svg"
import bootstrap from "./img/bootstrap-5-1.svg"
import sass from "./img/info-sass.svg"
import "./skills.css";
function Skills() {
  return (
    <section id="skills" className="skills">
    <h1 className="title">
      skills
    </h1>

<div className="skills-content">
  <div className="skill-box">
    <img src={html} alt="" />
  <span>HTML</span>
  </div>
  <div className="skill-box">
    <img src={css} alt="" />
  <span>CSS</span>
  </div>
  <div className="skill-box">
    <img src={javascript} alt="" />
  <span>JavaScript</span>
  </div>
  <div className="skill-box">
    <img src={react} alt="" />
  <span>React</span>
  </div>
  <div className="skill-box">
    <img src={sass} alt="" />
  <span>SASS</span>
  </div>
  <div className="skill-box">
    <img src={bootstrap} alt="" />
  <span>Bootstrap</span>
  </div>
  <div className="skill-box">
    <img src={figma} alt="" />
  <span>Figma</span>
  </div>
  <div className="skill-box">
    <img src={git} alt="" />
  <span>Git</span>
  </div>
  <div className="skill-box">
    <img src={github} alt="" />
  <span>Github</span>
  </div>

</div>




</section>
  )
}

export default Skills