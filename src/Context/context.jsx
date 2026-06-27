import { createContext, useContext, useEffect, useState } from 'react';

const ProjectDataContext = createContext(null);

export function ProjectDataProvider({ children }) {
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectsData = async () => {
      try {
        const res = await fetch('/Data/project-data.json');
        if (!res.ok) {
          throw new Error('failed to fetch data');
        }
        const data = await res.json();
        setProjectData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjectsData();
  }, []);

  return (
    <ProjectDataContext.Provider value={{ projectData, loading, error }}>
      {children}
    </ProjectDataContext.Provider>
  );
}

export function useProjectData() {
  const context = useContext(ProjectDataContext);
  if (!context) {
    throw new Error('useProjectData must be used within a ProjectDataProvider');
  }
  return context;
}