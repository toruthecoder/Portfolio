import { useEffect, useState } from 'react';

function Project() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const res = await fetch('./Data/project-data.json');
        if (!res.ok) {
          throw new Error(`failed to fetch data`);
        }

        const data = await res.json();
        setProjectData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProjectsData();
  }, [])

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  }

  if (loading) {
    return (
      <div className="projects-container">
        <h1 className='projects-title'>My Projects</h1>
        <div className="loading">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-container">
        <h1 className='projects-title'>My Projects</h1>
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  if (!projectData) {
    return (
      <div className="projects-container">
        <h1 className='projects-title'>My Projects</h1>
        <div className="error">No projects data available</div>
      </div>
    );
  }

  return (
    <div className="projects-container">
      <h1 className='projects-title'>My Projects</h1>
      <div className="dropdown-container">
        {/* React */}
        <div className={`dropdown batch  ${activeDropdown === 0 ? 'active' : ''}`}>
          <div className="dropdown-header" onClick={() => toggleDropdown(0)}>
            <h1>React</h1>
            <span className='dropdown-icon'>{activeDropdown === 0 ? '-' : '+'}</span>
          </div>

          <div className="dropdown-content">
            <div className="projects-grid">
              {projectData.react.map(project => (
                <a href={project.link} key={project.id} className='project-card' target='_blank'>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span className="project-link">View Project →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* JavaScript */}
        <div className={`dropdown batch  ${activeDropdown === 1 ? 'active' : ''}`}>
          <div className="dropdown-header" onClick={() => toggleDropdown(1)}>
            <h1>JavaScript</h1>
            <span className='dropdown-icon'>{activeDropdown === 1 ? '-' : '+'}</span>
          </div>

          <div className="dropdown-content">
            <div className="projects-grid">
              {projectData.javascript.map(project => (
                <a href={project.link} key={project.id} className='project-card' target='_blank'>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span className="project-link">View Project →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* HTML , CSS */}
        <div className={`dropdown batch  ${activeDropdown === 2 ? 'active' : ''}`}>
          <div className="dropdown-header" onClick={() => toggleDropdown(2)}>
            <h1>HTML & CSS</h1>
            <span className='dropdown-icon'>{activeDropdown === 2 ? '-' : '+'}</span>
          </div>

          <div className="dropdown-content">
            <div className="projects-grid">
              {projectData.htmlCss.map(project => (
                <a href={project.link} key={project.id} className='project-card' target='_blank'>
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                  </div>
                  <div className="project-info">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span className="project-link">View Project →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project