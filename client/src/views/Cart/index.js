import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert';
import HelpOutlined from '@material-ui/icons/HelpOutlined';

import './Cart.css';
import CartItem from '../../components/CartItem';
import Container from '../../components/Container';
import LoginForm from '../../components/Forms/Login.js';
import CollapsibleCard from '../../components/CollapsibleCard';
import CheckoutTimeline from '../../components/CheckoutTimeline';
import DeliveryAddressForm from '../../components/Forms/DeliveryAddress.js';

const Index = (props) => {
	const [currentStep, setCurrentStep] = useState(1);

	function getLoginData(data){
		console.log(data);
		Swal('Login Success', 'You have successfully logged in', 'success');
		setCurrentStep(2);
	}

	function getDeliveryAddress(data){
		console.log(data);
		setCurrentStep(3);
	}

	let stepTemplate = null;
	switch(currentStep){
		case 1: stepTemplate = <LoginForm onSubmit={getLoginData}/>;break;
		case 2: stepTemplate = <DeliveryAddressForm onSubmit={getDeliveryAddress}/>;break;
		case 3: stepTemplate = <h1>Payment Details</h1>;break;
	}

	return (
		<div className="CartView">
			<Container className="Container">
		    	<div className="CartView__CartSummary">
		    		<strong>Cart Summary</strong>
		    		<CartItem/>
		    		<CartItem/>
		    		<CollapsibleCard title="More" style={{ marginTop: '1.5rem '}}>
		    			<CartItem/>
		    			<CartItem/>
		    			<CartItem/>
		    			<CartItem/>
		    		</CollapsibleCard>
		    		<hr className="CartView__Divider"/>
		    		<p className="CartView__HelpInfo">
		    			<HelpOutlined className="Icon"/>
		    			<span>Need <a href="#">help</a> shipping your product? Contact our <a href="#">hotline</a></span>
		    		</p>
		    	</div>
		    	<div className="CartView__Steps">
		    		<CheckoutTimeline 
		    			stepsCount={3} 
		    			currentStep={currentStep}
		    		/>
	    			{stepTemplate}
		    	</div>
		    </Container>
		</div>
	)
}
export default Index;