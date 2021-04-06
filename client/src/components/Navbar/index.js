import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Index = (props) => {

  return (
    <nav className="Navbar">
    	<NavLink to="/" className="Navbar__Item" activeClassName="Active" exact>Products</NavLink>
    	<NavLink to="/categories" className="Navbar__Item" activeClassName="Active">Categories</NavLink>
    	<NavLink to="/cart" className="Navbar__Item" activeClassName="Active">Cart</NavLink>
      <NavLink to="/orders" className="Navbar__Item" activeClassName="Active">Orders</NavLink>
    </nav>
  )
}

export default Index;