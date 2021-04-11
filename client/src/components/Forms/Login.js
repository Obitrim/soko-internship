import React from 'react';
import PropTypes from 'prop-types';

const Login = ({ onSubmit, ...props }) => {
	function handleLogin(evt){
		evt.preventDefault();
		// retrieve all data
		// call onSubmit with extracted data
		onSubmit({ phoneNo: '0544 000 000'});
	}
  return (
    <form action="#" className="FromGroup" onSubmit={handleLogin}>
		<h2>Account Details</h2>
		<p>To place an order, login in width your 10 digit number</p>
		<label htmlFor="phoneNo">Mobile Number</label>
		<input type="text"/>
		<button type="submit" >Login</button>
	</form>
  )
}

Login.propTypes = {
	onSubmit: PropTypes.func
}

Login.defaultProps = {
	onSubmit: (data) => {
		alert('Provide onSubmit prop to handle form submition')
	}
}

export default Login;