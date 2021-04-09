import React from 'react';
import { useParams } from 'react-router-dom';

const Index = (props) => {
	const { id } = useParams();
	// const product = 

	return (
		<div>Product Details {id}</div>
	)
}
export default Index;