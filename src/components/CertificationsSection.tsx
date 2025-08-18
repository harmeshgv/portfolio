import React, { useEffect, useRef } from "react";

import devops from "../assets/certification_images/Devops.jpeg"
import ml from "../assets/certification_images/ml.jpg"
import ai from "../assets/certification_images/AI.png"

interface CertificationItem {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

const certificationItems: CertificationItem[] = [
  {
    imgSrc: devops,
    imgAlt: "Devops and Software Development",
    title: "Devops and Software Development",
    description: "Docker • Jenkins • Cloud • CI/CD",
  },
  {
    imgSrc: ml,
    imgAlt: "Machine Learning and Data Science",
    title: "Machine Learning and Data Science",
    description: "Python • EDA • Deep Learning",
  },
  {
    imgSrc: ai,
    imgAlt: "Artificial Intelligence",
    title: "Artificial Intelligence",
    description: "Machine Learning • Generative AI",
  },
];

const CertificationsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const certCards = container.querySelectorAll<HTMLDivElement>(".certification-card");
    if (certCards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            certCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("certification-card--active");
              }, index * 250); // stagger animation
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="section section--certification" id="certifications">
      <div className="section__inner" ref={containerRef}>
        <div className="block">
          <a className="pre" href="#project">Certifications</a>
          <h2>Building solutions to real-world problems, one idea at a time.</h2>
          <p className="lead"></p>
        </div>
        <section id="certification-section">
          <div className="certification-section-content">
            {certificationItems.map(({ imgSrc, imgAlt, title, description }, index) => (
              <div className="certification-card" key={index}>
                <img
                  src={process.env.PUBLIC_URL + imgSrc}
                  className="certification-image"
                  alt={imgAlt}
                />
                <div className="certification-card-content">
                  <div className="certification-card-content-items">
                    <h3 className="certification-card-title">{title}</h3>
                    <p className="certification-card-desc">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default CertificationsSection;
