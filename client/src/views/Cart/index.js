import React, { useState, useContext } from 'react';
import Swal from 'sweetalert';
import HelpOutlined from '@material-ui/icons/HelpOutlined';
import DissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import './Cart.css';
import { StoreContext } from '../../store';
import CartItem from '../../components/CartItem';
import Container from '../../components/Container';
import LoginForm from '../../components/Forms/Login.js';
import CollapsibleCard from '../../components/CollapsibleCard';
import CheckoutTimeline from '../../components/CheckoutTimeline';
import DeliveryAddressForm from '../../components/Forms/DeliveryAddress.js';

const Index = (props) => {
	const [currentStep, setCurrentStep] = useState(1);
	const { store } = useContext(StoreContext);

	function getLoginData(data){
		console.log(data);
		Swal('Login Success', 'You have successfully logged in', 'success');
		setCurrentStep(2);
	}

	function getDeliveryAddress(data){
		console.log(data);
		setCurrentStep(3);
	}

	function isEmptyBag(){
		return store.bag.length === 0;
	}

	function generateBagItemsTemplate(items){
		if (!Array.isArray(items)) return null;

		return items.map((product, index) => (
			<CartItem 
				name={product.name} 
				quantity={product.quantity} 
				price={product.price} 
				imgURL={product.imgURL} 
				key={product.name + index}
			/>
		))
	}

	let stepTemplate = null;
	switch(currentStep){
		case 1: stepTemplate = <LoginForm onSubmit={getLoginData}/>;break;
		case 2: stepTemplate = <DeliveryAddressForm onSubmit={getDeliveryAddress}/>;break;
		default: stepTemplate = <h1>Payment Details</h1>;break;
	}

	let bagItemsTemplate = null;
	if (store.bag.length > 2) {
		bagItemsTemplate = <>
			{generateBagItemsTemplate(store.bag.slice(0, 2))}
			<CollapsibleCard title="See All" style={{ marginTop: '1.5rem '}}>
				{generateBagItemsTemplate(store.bag.slice(2))}
			</CollapsibleCard>
		</>
	} else {
		bagItemsTemplate = generateBagItemsTemplate(store.bag.slice(0, 2));
	}

	return (
		<div className="CartView">
			<Container className="Container">
		    	<div className="CartView__CartSummary">
		    		<strong>Cart Summary</strong>
		    		{isEmptyBag()
						? (
							<div className="CartPreview__EmptyCart">
								<h2>It's Empty here!!!</h2>
								<DissatisfiedIcon className="DissatisfiedIcon"/>
								<p>Start shopping to add items to your cart</p>
							</div>
						) : bagItemsTemplate
					}
		    		
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