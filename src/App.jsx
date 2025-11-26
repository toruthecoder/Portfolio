import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav'
import HomePage from './Components/HomePage'
import Projects from './Components/Projects'
import Contributions from './Components/Contributions'
import About from './Components/About'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Nav/>}>
            <Route index element={<HomePage/>} />
            <Route path='projects' element={<Projects/>} />
            <Route path='contributions' element={<Contributions/>} />
            <Route path='about' element={<About/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
