import React, { useContext } from 'react';
import DissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import "./CartPreviewBox.css";
import { StoreContext } from '../../store';

const Index = (props) => {
	const { store } = useContext(StoreContext);

	function isEmptyCart(){
		return store.cart.length === 0;
	}

	return (
		<div className="CartPreview">
			<div  className="ProductsNavigation__Header">Cart <span>{store.cart.length}</span></div>
			{isEmptyCart()
				? (
					<div className="CartPreview__EmptyCart">
						<h2>It's Empty here!!!</h2>
						<DissatisfiedIcon className="DissatisfiedIcon"/>
						<p>Start shopping to add items to your cart</p>
					</div>
				) : (
					<ul>
						<li>Item</li>
						<li>Item</li>
						<li>Item</li>
						<li>Item</li>
					</ul>
				)}
			
			
		</div>
	)
}

export default Index;