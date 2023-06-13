import React from 'react'
import '../Css/Navbar.css'
import Search from './Search'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <header className='navMain'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand mt-3" href="#">BEST Wed</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <Search />
          <ul className="navbar-nav justify-content-end pe-3 mt-3">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link active" aria-current="page">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/service" className="nav-link active" aria-current="page" href="#">Service</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/about" className="nav-link active" aria-current="page" href="#">About</Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/contact" className="nav-link active" aria-current="page" href="#">Contact</Link>
            </li>
            
          </ul>
          
        </div>
      </div>
    </div>
</nav>
    </header>
    </>
    
  )
}

export default Navbar