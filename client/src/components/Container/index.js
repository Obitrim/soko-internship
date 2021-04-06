import React from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Index = ({children, className, ...props}) => {
  return (
    <div className={`Container ${className}`} {...props}>
    	{children}
    </div>
  )
}

Index.propTypes = {
	children: PropTypes.node
}

export default Index;