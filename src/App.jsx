import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import HomePage from './Components/HomePage'
import Projects from './Components/Projects'
import Contributions from './Components/Contributions'
import About from './Components/About'
import ReactPage from './Pages/React.jsx'
import InternshipPage from './Pages/Intership.jsx'
import JavascriptPage from './Pages/Javascript'
import HtmlCssPage from './Pages/Htmlcss.jsx'
import { ProjectDataProvider } from './Context/context.jsx'
import './App.css'

function App() {

  return (
    <ProjectDataProvider>
      <Router>
        <Routes>
         <Route path='/' element={<Nav/>}>
            <Route index element={<HomePage/>} />
            <Route path='projects' element={<Projects/>} />
            <Route path='projects/react' element={<ReactPage/>} />
            <Route path='projects/internship' element={<InternshipPage/>} />
            <Route path='projects/javascript' element={<JavascriptPage/>} />
            <Route path='projects/html-css' element={<HtmlCssPage/>} />
            <Route path='contributions' element={<Contributions/>} />
            <Route path='about' element={<About/>} />
          </Route>
        </Routes>
      </Router>
    </ProjectDataProvider>
  )
}

export default App
