import React from 'react';
import TimerIcon from '@material-ui/icons/Timer';
import SecurityIcon from '@material-ui/icons/Security';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';

import './StoreServices.css';
import Container from '../Container';

const Index = (props) => {
  return (
    <section className="Store__Services">
		<Container className="Container">
			<div className="Store__Service">
				<LocalShippingIcon className="Icon"/>
				<span>Fast Delivery</span>
			</div>
			<div className="Store__Service">
				<SecurityIcon className="Icon"/>
				<span>Buyer Protection</span>
			</div>
			<div className="Store__Service">
				<TimerIcon className="Icon"/>
				<span>Customer Support</span>
			</div>
		</Container>
	</section>
  )
}

export default Index;