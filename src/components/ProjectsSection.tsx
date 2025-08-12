import React from 'react';
import { useNavigate } from 'react-router-dom';

import p1 from '../assets/project_images/health.png';
import p2 from '../assets/project_images/violence.png';
import p3 from '../assets/project_images/s.png';


interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  placeholder?: string;
  tags: string[];
  githubUrl: string;
}

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();

  const handleViewAllProjects = () => {
    // Navigate to the /projects path you created
    navigate('/projects');
  };

  const projects: Project[] = [
    {
      id: 1,
      title: "Web HealthCare",
      description: "Deep learning–powered platform for skin disease image classification and symptom-based disease prediction using a conversational LLM chatbot. Combines computer vision (MobileNetV2, EfficientNet) with natural language processing for interactive, user-friendly medical guidance.",
      image: p1,
      tags: ["PyTorch", "OpenCV", "TensorFlow", "+2"],
      githubUrl: "https://github.com/harmeshgv/SmartHealth-LLM.git"
    },
    {
      id: 2,
      title: "Video Classification",
      description: "Real-time violence detection system with 30+ FPS pose extraction using YOLOv8 optimization and GNN-based temporal analysis.",
      image: p2,
      tags: ["PyTorch", "YOLOv8", "LSTM", "+1"],
      githubUrl: "https://github.com/harmeshgv/YoloV8-LSTM-video-Classification.git"
    },
    {
      id: 3,
      title: "Text to SQL",
      description: "Natural language to SQL query converter that simplifies database interactions for non-technical users.",
      image: p3,
      tags: ["Python", "NLP", "React", "+1"],
      githubUrl: "https://github.com/your-username/text-to-sql"
    }
  ];

  return (
    <section className="section section--project" id="projects">
      <div className="section__inner">
        <div className="block">
          <a className="pre" href="#project">Projects</a>
          <h2>Building solutions to real-world problems, one idea at a time.</h2>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-image">
                {project.image ? (
                  <img src={project.image} alt={`${project.title} Project`} loading="lazy" />
                ) : (
                  <div className="placeholder-image">
                    <span>{project.placeholder}</span>
                  </div>
                )}
              </div>
              <div className="project-card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
                
                <div className="project-buttons">
                  <button className="project-btn">
                    <span>Details</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="github-btn">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.755-1.333-1.755-1.089-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.333-5.466-5.933 0-1.31.465-2.38 1.236-3.22-.124-.304-.535-1.528.117-3.176 0 0 1.008-.322 3.301 1.23a11.484 11.484 0 013.003-.404c1.02.004 2.047.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.648.242 2.872.118 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.805 5.625-5.475 5.922.43.372.823 1.104.823 2.226 0 1.606-.015 2.896-.015 3.286 0 .322.218.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" fill="currentColor" />
                    </svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="btn-wrapper" onClick={handleViewAllProjects}>
          <a href="/projects" className="view-all-projects-btn">
            View All Projects
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>

            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
