import React from 'react';
import { Link } from 'react-router-dom';

import './Categories.css';
import Container from '../../components/Container';

const Index = (props) => {
  return (
  	<div className="Categories">
  		<Container className="Categories__Container">
	    	<Link to="/category/:title" className="Categories__Category">
	    		<span>Home</span>
	    	</Link>
	    	<Link to="/category/:title" className="Categories__Category">
	    		<span>About</span>
	    	</Link>
	    	<Link to="/category/:title" className="Categories__Category">
	    		<span>Content</span>
	    	</Link>
	    </Container>
  	</div>
  )
}
export default Index;