import React from 'react';
import './CartItem.css';


const Index = (props) => {
  return (
    <div className="CartItem">
		<div className="CartItem__ImgBox">
			<span className="CartItem__Quantity">2</span>
			<img src="/images/electronics_headphone.jpg" alt="product"/>
		</div>
		<div className="CartItem__Details">
			<strong>Product Name</strong>
			<p className="CartItem__Details__Price">GH$ 45.50</p>
		</div>
	</div>
  )
}

export default Index;