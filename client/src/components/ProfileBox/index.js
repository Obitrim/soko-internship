import React from 'react';
import { Link } from 'react-router-dom';
import UserAccount from '@material-ui/icons/AccountCircle';

const styles = {
	textDecoration: 'none',
	color: 'var(--light)'
}

const Index = (props) => {
  return (
    <Link style={styles} to="/profile">
    	<UserAccount/>
    </Link>
  )
}

export default Index;