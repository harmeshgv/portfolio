import React, { useEffect, useRef, useState } from "react";

import cloud from "../assets/eperience-logo/cloudit.png"
import ssb from "../assets/eperience-logo/ssb.jpg"

interface ExperienceItem {
  dataText: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: React.ReactNode;
}

const experienceItems: ExperienceItem[] = [
  {
    dataText: "Python, PyTorch, TensorFlow, GANs",
    imgSrc: cloud,
    imgAlt: "Cloud It Solutions Logo",
    title: "Software Development Intern",
    description: (
      <>
        Cloud It Solutions
        <br />
        Jun’ 22 – Jul’ 22
        <br />
        Built a Generative Adversarial Network (GAN) to generate realistic 28x28 images using adversarial training
      </>
    ),
  },
  {
    dataText: "JavaScript, React.js, Web Hosting",
    imgSrc: ssb,
    imgAlt: "Six Square Builders Logo",
    title: "Freelance Frontend Developer",
    description: (
      <>
        Six Square Builders
        <br />
        Nov’ 24 - Feb’ 25
        <br />
        Designed and developed a full-scale business website from scratch using JavaScript and React.js, enhancing brand presence.
      </>
    ),
  },
];

const Experience: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const timelineItems = container.querySelectorAll<HTMLDivElement>(".timeline-item");
    if (timelineItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add staggered animation by applying class with delays
            timelineItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("timeline-item--active");
              }, index * 250);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="section section--experience" id="experience">
      <div className="section__inner">
        <div className="block">
          <a className="pre" href="#education">
            Experience
          </a>
          <h2>Real-world challenges taught me what code alone couldn’t.</h2>
        </div>
      </div>
      <div className="timeline-1 timeline-container" ref={containerRef}>
        <div className="timeline">
          {experienceItems.map(({ dataText, imgSrc, imgAlt, title, description }, index) => (
            <div className="timeline-item" data-text={dataText} key={index}>
              <div className="timeline-icon">
                <img src={process.env.PUBLIC_URL + imgSrc} alt={imgAlt} />
              </div>
              <div className="timeline__content">
                <h2 className="timeline__content-title">{title}</h2>
                <p className="timeline__content-desc">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
