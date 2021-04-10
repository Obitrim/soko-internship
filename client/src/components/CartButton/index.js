import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

import './CartButton.css';

const Index = ({className, onAddToBag, isChecked, onRemoveFromBag, ...props}) => {
	const [checked, setChecked] = useState(isChecked);

	function handleClick(evt){
		setChecked(!checked);
		// if bag is now checked, it means product was added to bag
		// so call onAddToBag prop from parent
		if (!checked) return onAddToBag();
		onRemoveFromBag(); 
	}

  return (
    <button 
    	type="button" 
    	className={`AddToBagButton ${checked && 'AddToBagButton--Checked'} ${className}`} 
    	onClick={handleClick}
    	{...props}
    	>
    	{checked ? <RemoveShoppingCartIcon/> : <AddShoppingCart/>}
    	<span className="AddToBagButton__Text">
    		{checked ? 'Remove from ' : 'Add to '} bag
    	</span>
    </button>
  )
}

Index.propTypes = {
	className: PropTypes.string,
	onAddToBag: PropTypes.func,
	isChecked: PropTypes.bool,
	onRemoveFromBag: PropTypes.func,
}

Index.defaultProps = {
	className: '',
	isChecked: false,
	onAddToBag: () => alert('onAddToBag prop not provided'),
	onRemoveFromBag: () => alert('onRemoveToBag prop not provided'),
}

export default Index;