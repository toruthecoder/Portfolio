import { useProjectData } from '../Context/context.jsx'

function Htmlcss() {
  const { projectData, loading, error } = useProjectData();

  if (loading) {
    return (
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <div className="loader">Loading projects...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  if (!projectData) {
    return (
      <div className="projects-container">
        <h1 className="projects-title">My Projects</h1>
        <div className="error">No projects data available</div>
      </div>
    );
  }

  return (
    <div className="projects-container">
      <h1 className="projects-title">My Projects</h1>
      <div className="project-grid">
        {projectData.htmlCss.map((project) => (
          <a
            href={project.link}
            key={project.id}
            className="project-card"
            target="_blank"
            rel="noopener noreferrer"
          >
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
  );
}

export default Htmlcss;
