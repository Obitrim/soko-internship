import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/HomeRounded';
import BagIcon from '@material-ui/icons/LocalMallRounded';
import CategoriesIcon from '@material-ui/icons/AppsRounded';
import OrdersIcon from '@material-ui/icons/ListAltRounded';

import './Navbar.css';

const Index = (props) => {

  return (
    <nav className="Navbar">
    	<NavLink to="/" className="Navbar__Item" activeClassName="Active" exact>
    		<HomeIcon/>
    		Home
    	</NavLink>
    	<NavLink to="/cart" className="Navbar__Item" activeClassName="Active">
    		<BagIcon className="Icon"/>
    		Bag
    	</NavLink>
    	<NavLink to="/categories" className="Navbar__Item" activeClassName="Active">
    		<CategoriesIcon className="Icon"/>
    		Categories
    	</NavLink>
      <NavLink to="/orders" className="Navbar__Item" activeClassName="Active">
      	<OrdersIcon className="Icon"/>
      	Orders
      </NavLink>
    </nav>
  )
}

export default Index;