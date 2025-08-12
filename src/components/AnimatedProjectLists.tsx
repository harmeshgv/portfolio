import React, { useRef, useState } from 'react';
import '../styles/AnimatedList.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tools: string[];
  image: string;
  github: string;
  details: string;
}

interface ProjectItemProps {
  children: React.ReactNode;
  index: number;
  onMouseEnter?: () => void;
  onClick?: () => void;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  children, index, onMouseEnter, onClick
}) => {
  return (
    <div
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      className="project-item"
    >
      {children}
    </div>
  );
};

interface ProjectListProps {
  projects: Project[];
  onProjectSelect?: (project: Project, index: number) => void;
  displayScrollbar?: boolean;
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  onProjectSelect,
  displayScrollbar = true,
}) => {
  const listRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  return (
    <div className="scroll-list-container">
      <div
        ref={listRef}
        className={`scroll-list ${!displayScrollbar ? 'no-scrollbar' : ''}`}
      >
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            index={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => {
              setSelectedIndex(index);
              onProjectSelect?.(project, index);
            }}
          >
            <div className={`project-card ${selectedIndex === index ? 'selected' : ''}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <div className="project-header">
                  <h2>{project.title}</h2>
                  <p className="project-description">{project.description}</p>
                </div>
                <div className="tools">
                  {project.tools.map((tool, i) => (
                    <span key={i} className="tool-tag">{tool}</span>
                  ))}
                </div>
                <div className="project-buttons">
                  <a href={project.details} className="details-btn">View Details</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-btn">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </ProjectItem>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
