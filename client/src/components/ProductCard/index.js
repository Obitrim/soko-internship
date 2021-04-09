import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";

import './ProductCard.css';

const Index = ({name, id, imgURL, price,...props}) => {
  return (
    <div className="ProductCard" {...props}>
    	<img className="ProductCard__Img" src={imgURL} alt=""/>
    	<div className="ProductCard__Details">
    		<Link  className="ProductCard__Name" to={`/products/${id}`} ><h2>{name}</h2></Link>
    		<div className="ProductCard__BottomRow">
                <p className="ProductCard__Price">GH$ <span>{price}</span></p>
                <button className="AddToCart" type="button">
                    <AddShoppingCart/>
                </button>      
            </div>
    	</div>
    </div>
  )
}

Index.propTypes = {
    name: PropTypes.string,
    imgURL: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string
}

Index.defaultProps = {
    name: 'Product Name',
    imgURL: '',
    price: 0
}

export default Index;