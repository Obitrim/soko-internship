import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

const Login = ({ onSubmit, ...props }) => {
	function handleLogin(evt){
		evt.preventDefault();
		// retrieve all data
		// call onSubmit with extracted data
		onSubmit({ phoneNo: '0544 000 000'});
	}
  return (
    <form action="#" className="LoginForm" onSubmit={handleLogin}>
		<h2>Account Details</h2>
		<p>To place an order, login in width your 10 digit number</p>
		<div className="LoginForm__Row">
			<div className="FormGroup">
				<label htmlFor="phoneNo">Mobile Number</label>
				<input type="text" placeholder="0544 *** ***"/>
			</div>
			<button type="submit" >Login</button>
		</div>
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