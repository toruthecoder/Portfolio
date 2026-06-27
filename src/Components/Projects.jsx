import { useNavigate } from 'react-router-dom';
import { useProjectData } from '../Context/context.jsx'

function Project() {
  const navigate = useNavigate();
  const { projectData, loading, error } = useProjectData();

  if (loading) {
    return (
      <div className="projects-container">
        <h1 className='projects-title'>My Projects</h1>
        <div className="loader">Loading projects...</div>
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

      <div className='reactBox'>
          <img src={projectData.techtribedev[0].image} alt="react portfolio image" />
        <div className='reactcl'>
          <h1>Internship</h1>
          <h4>Company: Tech-Tribe Dev</h4>
          <h4>Duration: 3 Months</h4>
          <p>This coloumn holds my projects that I have made in Mern and some responsive projects that I made in tailwind in my <b> Three months of Internship in Tech Tribe Dev </b>.You will see fully responsive projects made in mern.</p>
          <button onClick={() => navigate('/projects/internship')}>See More</button>
        </div>
      </div>

      <div className='reactBox'>
          <img src={projectData.react[0].image} alt="react portfolio image" />
        <div className='reactcl'>
          <h1>React</h1>
          <p>This coloumn holds my projects that I have made in react. You will see simple project like stopwatch, todolist and more a little bit complex and feature rich projects such as Ecommerce App made purely in react called Frozen.</p>
          <button onClick={() => navigate('/projects/react')}>See More</button>
        </div>
      </div>

      <div className='reactBox'>
          <img src={projectData.javascript[0].image} alt="react portfolio image" />
        <div className='reactcl'>
          <h1>JavaScript</h1>
          <p>This coloumn holds my projects that I have made in Javascript. You will see only two projects in this and both are Ecommerce app. One is Beans App and the other is Shoe APP Ecommerce App. Both are Feature rich and holds CURD operations.</p>
          <button onClick={() => navigate('/projects/javascript')}>See More</button>
        </div>
      </div>

      <div className='reactBox last'>
          <img src={projectData.htmlCss[0].image} alt="react portfolio image" />
        <div className='reactcl'>
          <h1>Html Css</h1>
          <p>This coloumn holds my projects that I have made in HTML and CSS. You will see random projects like cookbook website and login/signup page and in these website only the cookbook website is fully responsive and is made in bootstrap.</p>
          <button onClick={() => navigate('/projects/html-css')}>See More</button>
        </div>
      </div>
    </div>
  )
}

export default Project