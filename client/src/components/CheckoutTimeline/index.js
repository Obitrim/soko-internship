import React from 'react';
import PropTypes from 'prop-types';
import CheckCircle from '@material-ui/icons/CheckCircle';

import './CheckoutTimeline.css';

const Index = ({ stepsCount, currentStep, ...props }) => {
	let steps = Array(stepsCount).fill(null); 
	return (
		<div className="CheckoutTimeline">
			{steps.map((step, index) => (
				<div className="CheckoutTimeline__Step" key={index}>
					{ index + 1 < currentStep 
						? <CheckCircle className="Icon"/> 
						: <span>{ index + 1 }</span> }	
				</div>
			))}
			<div className="CheckoutTimeline__Indicator" 
				style={{
					width: `${100 / (stepsCount - 1) * (currentStep - 2)}%`
				}}>
			</div>
		</div>
	)
}

Index.propTypes = {
	stepsCount: PropTypes.number,
	currentStep: PropTypes.number
}

Index.defaultProps = {
	stepsCount: 1,
	currentStep: 1
}

export default Index;