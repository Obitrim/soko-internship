import React from 'react';
import { Link } from 'react-router-dom';
import UserAccount from '@material-ui/icons/AccountCircle';

import './ProfileBox.css';

const Index = (props) => {
  return (
    <Link className="ProfileBox" to="/profile">
    	<UserAccount/>
    	<span>Account</span>
    </Link>
  )
}

export default Index;