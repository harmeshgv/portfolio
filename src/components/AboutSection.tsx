import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section className="section section--about" id="about">
      <div className="section__inner">
        <div className="block">
          <a className="pre" href="#about">About Me</a>
        </div>

        <h2>
          Machine Learning Engineer & Full-Stack Developer passionate about building intelligent systems that bridge the gap between cutting-edge AI research and real-world applications. Currently pursuing Computer Science Engineering at Lovely Professional University (Class of '26).
        </h2>
        <br /><br />
        <h3 className="pre">What I Do</h3>

        <h2>
          Currently freelancing on innovative ML projects and always exploring new frontiers in artificial intelligence. 
          <a href="https://github.com/harmeshgv" className="link">Explore my code</a>, 
          <a href="https://www.linkedin.com/in/harmeshgv" className="link">connect professionally</a>, 
          or <a href="https://twitter.com/hellovolker" className="link">follow my journey</a>.
        </h2>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src="https://i.postimg.cc/4389jZkP/icon-design.png" width="40" alt="AI & Machine Learning" />
            </div>
            <div className="service-content-box">
              <h4>AI & Machine Learning</h4>
              <p>Architecting intelligent systems using deep learning frameworks and neural networks. Specializing in computer vision, NLP, and predictive analytics with hands-on experience in violence detection algorithms and AI-powered medical diagnostic tools.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="https://i.postimg.cc/ZqgqrqzG/icon-dev.png" width="40" alt="Computer Vision" />
            </div>
            <div className="service-content-box">
              <h4>Computer Vision & Analytics</h4>
              <p>Building real-time video analysis systems with YOLO object detection and advanced image classification. Expert in LSTM-based temporal modeling, CUDA optimization, and deploying vision models for production environments.</p>
            </div>
          </li>
          <li className="service-item">
            <div className="service-icon-box">
              <img src="https://i.postimg.cc/xjLdzYxZ/icon-app.png" width="40" alt="Full-Stack Development" />
            </div>
            <div className="service-content-box">
              <h4>Full-Stack AI Applications</h4>
              <p>Developing comprehensive AI-powered web applications with seamless user experiences. Creating intelligent interfaces for complex ML models, implementing RAG systems for document analysis, and building scalable cloud-native solutions.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;
