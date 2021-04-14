import React, { useContext } from 'react';
import DissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

import "./CartPreviewBox.css";
import CartItem from '../CartItem';
import { StoreContext } from '../../store';

const Index = (props) => {
	const { store } = useContext(StoreContext);

	function isEmptyBag(){
		return store.bag.length === 0;
	}

	return (
		<div className="CartPreview">
			<div  className="ProductsNavigation__Header">Cart <span>{store.bag.length}</span></div>
			
			<div className="CartPreview__EmptyCart">
				{isEmptyBag()
					? (
						<>
							<h2>It's Empty here!!!</h2>
							<DissatisfiedIcon className="DissatisfiedIcon"/>
							<p>Start shopping to add items to your cart</p>
						</>
					) : store.bag.map((product, index) => (
							<CartItem 
								name={product.name} 
								quantity={product.quantity} 
								price={product.price} 
								imgURL={product.imgURL} 
								key={product.name + index}
							/>
					))
				}
			</div>
			
		</div>
	)
}

export default Index;