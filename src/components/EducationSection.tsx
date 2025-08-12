import React, { useRef, useEffect } from "react";
import lpu from "../assets/education-logo/lpu.png"
interface EducationItem {
  dataText: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: React.ReactNode;
}

const educationItems: EducationItem[] = [
  {
    dataText: "B.Tech CSE (ML & DS Specialization) | Lovely Professional University",
    imgSrc: lpu,
    imgAlt: "Lovely Professional University Logo",
    title: "B.Tech Computer Science",
    description: (
      <>
        Aug 2022 - Aug 2026 (Expected)
        <br />
        Specialization: Machine Learning & Data Science
        <br />
        Lovely Professional University, Punjab
      </>
    ),
  },
  {
    dataText: "Sri Chiatanya Techno School (PCM)",
    imgSrc:
      "https://cdn.brandfetch.io/idR_u2U7F_/w/690/h/690/theme/dark/icon.png?c=1dxbfHSJFAPEGdCLU4o5B",
    imgAlt: "Sri Chiatanya Logo",
    title: "Higher Secondary",
    description: (
      <>
        April 2021 - March 2022
        <br />
        Sri Chiatanya, Chennai.
      </>
    ),
  },
  // Add more education entries here if desired
];

const Education: React.FC = () => {
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
            timelineItems.forEach((item, index) =>
              setTimeout(() => {
                item.classList.add("timeline-item--active");
              }, index * 250)
            );
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
    <section className="section section--education" id="education">
      <div className="section__inner">
        <div className="block">
          <a className="pre" href="#contact">
            Education
          </a>
          <h2>
            Rooted in strong fundamentals, growing through real-world application.
          </h2>
        </div>
      </div>
      <div className="timeline-1 timeline-container" ref={containerRef}>
        <div className="timeline">
          {educationItems.map(
            ({ dataText, imgSrc, imgAlt, title, description }, index
          ) => (
            <div className="timeline-item" data-text={dataText} key={index}>
              <div className="timeline-icon">
                {imgSrc.startsWith("http") ? (
                  <img src={imgSrc} alt={imgAlt} />
                ) : (
                  <img src={process.env.PUBLIC_URL + imgSrc} alt={imgAlt} />
                )}
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

export default Education;
