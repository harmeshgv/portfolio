import React from "react";
import python from "../assets/skill_images/python-5.svg"
import numpy from "../assets/skill_images/numpy.svg"
import pandas from "../assets/skill_images/pandas.svg"
import mysql from "../assets/skill_images/mysql.svg"
import oracle from "../assets/skill_images/oracle.svg"
import matplotlib from "../assets/skill_images/matplotlib.svg"
import tableau from "../assets/skill_images/tableau.svg"

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Machine Learning",
    skills: [
      { name: "Python", icon: python },
      { name: "Pandas", icon: pandas },
      { name: "Numpy", icon: numpy },
      { name: "MySQL", icon: mysql},
      { name: "Oracle", icon: oracle },
      { name: "Matplotlib", icon:matplotlib },
      { name: "Tableau", icon:tableau },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML", icon: "/skill_images/html.svg" },
      { name: "CSS", icon: "/skill_images/css.svg" },
      { name: "React", icon: "/skill_images/react.svg" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Java", icon: "/skill_images/java.svg" },
      { name: "FastAPI", icon: "/skill_images/fastapi-1.svg" },
      { name: "Flask", icon: "/skill_images/Flask.svg" },
    ],
  },
  {
    category: "DevOps and Tools",
    skills: [
      { name: "Docker", icon: "/skill_images/docker.svg" },
      { name: "Git", icon: "/skill_images/git.svg" },
      { name: "GitHub", icon: "/skill_images/github.svg" },
      { name: "Jenkins", icon: "/skill_images/jenkins.png" },
      { name: "Linux (Ubuntu)", icon: "/skill_images/linux.png" },
    ],
  },
];

interface SkillItemProps {
  name: string;
  icon: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon }) => (
  <div className="skill-item">
    <span className="skill-icon">
      <img src={process.env.PUBLIC_URL + icon} alt={name} />
    </span>
    <span className="skill-text">{name}</span>
    <div className="skill-marquee" aria-hidden="true">
      <span>{name}</span>
      <span>{name}</span>
      <span>{name}</span>
    </div>
  </div>
);

const SkillsSection: React.FC = () => {
  return (
    <section className="section section--skill" id="skills">
      <div className="section__inner">
        <div className="block">
          <a className="pre" href="#skill">
            Skills
          </a>
          <h2>Turning ideas into reality with code and creativity</h2>
          <p className="lead"></p>
        </div>
        <div className="skills-grid-container">
          {skillsData.map(({ category, skills }) => (
            <div className="skill-category" key={category}>
              <h5 className="skill-heading">{category}</h5>
              <div className="skills-flex-container">
                {skills.map(({ name, icon }) => (
                  <SkillItem key={name} name={name} icon={icon} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="button-d">
          <button className="download-button" id="resume-download">
            <span className="download-text">Download CV</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
