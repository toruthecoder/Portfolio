import { Link, Outlet, useLocation } from 'react-router-dom'

function Nav() {
  const { pathname } = useLocation()

  return (
    <>
      <nav className='Nav'>
        <h1>Portfolio</h1>
        <ul>
          <li>
            <Link to='/' className={pathname === '/' ? 'active' : ''}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/projects' className={pathname === '/projects' ? 'active' : ''}>
              Projects
            </Link>
          </li>
          <li>
            <Link to='/contributions' className={pathname === '/contributions' ? 'active' : ''}>
              Contributions
            </Link>
          </li>
          <li>
            <Link to='/about' className={pathname === '/about' ? 'active' : ''}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Nav