import React from 'react';
import PropTypes from 'prop-types';

const DeliveryAddress = ({ onSubmit, ...props}) => {
	function handleSubmit(evt){
		evt.preventDefault();
		onSubmit({ location: 'Nkwanta' });
	}

	return (
		<form action="#" onSubmit={handleSubmit}>
			Delivery Address
			<button type="submit">Next</button>
		</form>
	)
}

DeliveryAddress.propTypes = {
	onSubmit: PropTypes.func
}

DeliveryAddress.defaultProps = {
	onSubmit: (data) => {
		alert('Provide onSubmit prop to handle form submition')
	}
}

export default DeliveryAddress;