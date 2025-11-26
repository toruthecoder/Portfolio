import { Link, Outlet } from 'react-router-dom'

function Nav() {
    return (
        <>
            <nav className='Nav'>
                    <h1>Portfolio</h1>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to='/projects'>Projects</Link>
                    </li>

                    <li>
                        <Link to='/contributions'>Contributions</Link>
                    </li>

                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default Nav
