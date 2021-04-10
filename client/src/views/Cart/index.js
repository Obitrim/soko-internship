import React from 'react';
import HelpOutlined from '@material-ui/icons/HelpOutlined';

import './Cart.css';
import CartItem from '../../components/CartItem';
import Container from '../../components/Container';
import CheckoutTimeline from '../../components/CheckoutTimeline';

const Index = (props) => {
  return (
    <div className="CartView">
    	<Container className="Container">
	    	<div className="CartView__CartSummary">
	    		<strong>Cart Summary</strong>
	    		<CartItem/>
	    		<CartItem/>
	    		<CartItem/>
	    		<CartItem/>
	    		<CartItem/>
	    		<hr className="CartView__Divider"/>
	    		<p className="CartView__HelpInfo">
	    			<HelpOutlined className="Icon"/>
	    			<span>Need <a href="#">help</a> shipping your product? Contact our <a href="#">hotline</a></span>
	    		</p>
	    	</div>
	    	<div className="CartView__Steps">
	    		<CheckoutTimeline/>
	    		{/*Step1: Account Details*/}
	    		{/*Step2: Delivery Address*/}
	    		{/*Step3: payment*/}
	    	</div>
	    </Container>
    </div>
  )
}
export default Index;