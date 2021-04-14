import React from 'react';
import PropTypes from 'prop-types';

import './CartItem.css';


const Index = ({quantity, name, imgURL, price,...props}) => {
  return (
    <div className="CartItem" {...props}>
		<div className="CartItem__ImgBox">
			<span className="CartItem__Quantity">{quantity}</span>
			<img src={imgURL} alt="product"/>
		</div>
		<div className="CartItem__Details">
			<strong>{name}</strong>
			<p className="CartItem__Details__Price">GH$ {price}</p>
		</div>
	</div>
  )
}

Index.propTypes = {
	quantity: PropTypes.number,
	name: PropTypes.string,
	imgURL: PropTypes.string,
	price: PropTypes.number
}

Index.defaultProps = {
	quantity: 2,
	name: 'Item name',
	imgURL: '',
	price: 24.45
}

export default Index;