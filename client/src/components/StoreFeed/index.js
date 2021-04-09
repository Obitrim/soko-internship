import React from 'react';
import PropTypes from 'prop-types';
import AppsIcon from '@material-ui/icons/Apps';

import './StoreFeed.css';
import ProductCard from '../../components/ProductCard';

const Index = ({ products, heading, ...props }) => {
  return (
  	<div className="StoreFeed" { ...props }>
	  	<h1 className="StoreFeed__Heading">
	  		<AppsIcon style={{ marginRight: '1rem' }}/>
	  		{heading}
	  	</h1>
    	<ul className="StoreFeed__ProductList">
    		{
    			products.map((product, index) => (
    				<ProductCard 
              id={product.id}
              key={index + product?.name}
    					imgURL={product?.imgURL}
    					name={product?.name}
    					price={product?.price}
    					/>
    			))
    		}
	    </ul>
    </div>
  )
}

Index.propTypes = {
	heading: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
    const product = propValue[key];
    const propertiesExist = product.hasOwnProperty('imgURL') &&
                            product.hasOwnProperty('name') &&
                            product.hasOwnProperty('price') &&
                            product.hasOwnProperty('category');
                            
    if (!propertiesExist){
      return new Error(
        'Invalid prop ' + propFullName + ' supplied to ' + componentName + '. Missing fields'
      );
    }
  })
}

export default Index;