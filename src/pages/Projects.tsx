import React from 'react';
import '../styles/Projects.css';
import Navbar from "../components/Navbar"

const Projects: React.FC = () => {
  const projects = [
{
  "id": 1,
  "title": "Smart Health LLM",
  "subtitle": "AI-Based Symptom & Skin Diagnosis",
  "description": [
    "Combines skin image classification using EfficientNet-B0 deep learning with symptom-based disease prediction using an LLM and FAISS vector similarity search.",
    "Allows users to upload skin images for instant disease classification or chat naturally by describing symptoms to get possible disease predictions.",
    "Features an interactive frontend built with Streamlit and a FastAPI backend serving AI models.",
    "Optimized with CUDA for GPU-accelerated inference and uses RAG (Retrieval-Augmented Generation) to combine LLM reasoning with medical context."
  ],
  "technologies": [
    "Python",
    "EfficientNet-B0",
    "Streamlit",
    "FastAPI",
    "MiniLM",
    "RAG"
  ],
  "icon": "🏥",
  "githubUrl": "https://github.com/harmeshgv/SmartHealth-LLM.git"
}
,
    {
      id: 2,
      title: "Violence Detection System",
      subtitle: "YOLO-Based Real-Time Video Surveillance",
      description: [
        "Real-time violence detection using YOLO object detection model",
        "Processes live video streams to identify violent activities",
        "Custom-trained YOLO model for enhanced detection accuracy",
        "Alerts system for automated safety responses"
      ],
      technologies: ["Python", "YOLO", "OpenCV", "Deep Learning", "Computer Vision"],
      icon: "📹",
      githubUrl: "https://github.com/harmeshgv/YoloV8-LSTM-video-Classification.git"
    },
    {
      id: 3,
      title: "RAG Enhanced NLP Query Engine",
      subtitle: "AI-Powered CSV and Document QA System",
      description: [
        "Retrieval-Augmented Generation engine for advanced NLP querying",
        "Reads structured CSV files and answers complex questions",
        "Uses embeddings and FAISS for fast similarity search",
        "Enhanced with context-aware LLM for precise responses"
      ],
      technologies: ["Python", "LangChain", "FAISS", "RAG", "LLM", "Embeddings"],
      icon: "🔍",
      githubUrl: "https://github.com/harmeshgv/RAG-Enhanced-NLP-QueryEngine.git"
    },
    {
      id: 4,
      title: "BERT GPU Fine-Tuning",
      subtitle: "Optimized Deep Learning Model Training",
      description: [
        "Fine-tuned BERT model for NLP classification tasks",
        "GPU-accelerated training for faster convergence",
        "Implemented hyperparameter tuning and regularization",
        "Deployed optimized model for real-time inference"
      ],
      technologies: ["Python", "BERT", "PyTorch", "CUDA", "Transformers"],
      icon: "🧠",
      githubUrl: "https://github.com/harmeshgv/gpu-powered-bert-finetuning.git"
    },
    {
      id: 5,
      title: "SSB Builders Website",
      subtitle: "Modern Real Estate Web Platform",
      description: [
        "Developed a responsive website for SSB Builders",
        "Showcases projects, properties, and construction services",
        "Integrated inquiry forms and contact automation",
        "SEO-optimized for better visibility and performance"
      ],
      technologies: ["React", "Node.js", "Express", "HTML", "CSS", "JavaScript"],
      icon: "🏗️",
      githubUrl: "https://github.com/six-square-builders/sixsquarebuilders-website.git"
    },
    {
      id: 6,
      title: "Idea to Tasks",
      subtitle: "AI-Powered Project Task Generator",
      description: [
        "Transforms user-provided ideas into structured tasks automatically",
        "Uses LLMs to further break down tasks into micro-tasks",
        "Supports add, remove, and improve task functionalities via AI",
        "Designed to enhance productivity and project planning"
      ],
      technologies: ["Python", "LLM", "LangChain", "AI Automation"],
      icon: "💡",
      githubUrl: "https://github.com/harmeshgv/idea2tasks-ai-assistant.git"
    },
    {
      id: 7,
      title: "Story Blender",
      subtitle: "AI-Powered Story Generation Engine",
      description: [
        "Backend ML system that extracts structured movie data",
        "Combines themes, settings, characters, and tones to create new stories",
        "Uses advanced LLMs for blending and generating narratives",
        "Future-ready integration for automated creative writing tools"
      ],
      technologies: ["Python", "LangChain", "LLM", "Data Extraction", "Story Generation"],
      icon: "📚",
      githubUrl: "https://github.com/harmeshgv/story_blender.git"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="projects-page-container">
        <main className="projects-page-main">
          <div className="projects-page-intro">
            <h1>Projects</h1>
            <p>A collection of my work in AI and data engineering, showcasing solutions that leverage cutting-edge technology to solve real-world problems.</p>
          </div>

          <div className="projects-page-grid">
            {projects.map((project) => (
              <div key={project.id} className="projects-page-card">
                {/* LEFT SIDE - Project Icon */}
                <div className="projects-page-icon-display">
                  <span className="projects-page-icon">{project.icon}</span>
                </div>

                {/* RIGHT SIDE - Project Details */}
                <div className="projects-page-content">
                  <div className="projects-page-header">
                    <h2 className="projects-page-title">{project.title}</h2>
                  </div>
                  <h3 className="projects-page-subtitle">{project.subtitle}</h3>
                  <ul className="projects-page-features">
                    {project.description.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div className="projects-page-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="projects-page-tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  {/* Updated Buttons Section */}
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
        </main>
      </div>
    </>
  );
};

export default Projects;
