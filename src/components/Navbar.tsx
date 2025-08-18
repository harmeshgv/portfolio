import React from 'react';
import {useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleHomeNavigation = () => {
    if (location.pathname !== '/') {
      navigate('/', { replace: true });
      setTimeout(() => {
        const heroElement = document.getElementById('hero');
        if (heroElement) {
          heroElement.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const heroElement = document.getElementById('hero');
      if (heroElement) {
        heroElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span onClick={handleHomeNavigation} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
          HG
        </span>
      </div>
      
      <div className="nav-links">
        {/* Main navigation in logical order */}
        <a onClick={handleHomeNavigation} style={{ cursor: 'pointer' }}>
          Home
        </a>
        <a onClick={() => handleSectionNavigation('about')} style={{ cursor: 'pointer' }}>
          About
        </a>
        <a onClick={() => handleSectionNavigation('skills')} style={{ cursor: 'pointer' }}>
          Skills
        </a>
        <a onClick={() => handleSectionNavigation('experience')} style={{ cursor: 'pointer' }}>
          Experience
        </a>
        <a onClick={() => navigate('/projects')} style={{ cursor: 'pointer' }}>
          Projects
        </a>
        <a onClick={() => handleSectionNavigation('education')} style={{ cursor: 'pointer' }}>
          Education
        </a>
        <a onClick={() => handleSectionNavigation('certifications')} style={{ cursor: 'pointer' }}>
          Certifications
        </a>
        <a onClick={() => handleSectionNavigation('achievements')} style={{ cursor: 'pointer' }}>
          Achievements
        </a>
      </div>
      
   <div className="btn-group">
        <a onClick={() => handleSectionNavigation('contact')} style={{ cursor: 'pointer' }}>
          <button className="hire-btn">Hire Me</button>
        </a>
           {/*
        <button className="dark-mode-btn">🌙</button>
 */}
       </div> 
    </nav>
  );
};

export default Navbar;
