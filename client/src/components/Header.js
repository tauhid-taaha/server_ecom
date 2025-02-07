import React from 'react'
import {NavLink,Link} from 'react-router-dom'
import { FaShopify } from "react-icons/fa";
function Header() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to='/' className="navbar-brand" href="#"><FaShopify />Shopcart</Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to='/' className="nav-link active" aria-current="page" href="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to='/register'className="nav-link" href="#">Register</NavLink>
         
        </li>

      <li className='nav-item'> <NavLink to='/login'className="nav-link" href="#">login</NavLink></li> 
      <li className='nav-item'> <NavLink to='/category'className="nav-link" href="#">Category</NavLink></li> 
      <li className='nav-item'> <NavLink to='/login'className="nav-link" href="#">Cart(0)</NavLink></li> 
        
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Header
