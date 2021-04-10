import React, { useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Favorite } from '@material-ui/icons';

import './ProductDetails.css';
import { StoreContext } from '../../store';
import Container from '../../components/Container';
import CartButton from '../../components/CartButton';
import StoreServices from '../../components/Services';
import ProductCounter from '../../components/ProductCounter';

const Index = (props) => {
	const { id } = useParams();
	const history = useHistory();
	const { store } = useContext(StoreContext);
	const product = store.products.find(product => product.id === id);

	return (
		<>
			<div className="ProductDetails__Header">
				<Container className="Container">
					<button className="BackBtn" onClick={() => history.go(-1)}>
						<ArrowBackIcon/>
					</button>
					<span className="ProductDetails__CategoryName">{product.category}</span>
				</Container>
			</div>
			<div className="ProductDetails__Content">
				<Container className="Container">
					<section className="ProductDetails__Row">
						<div className="ProductDetails__ImgBox">
							<img src="" alt=""/>
						</div>
						<div className="ProductDetails__Details">
							<h1>{product.name}</h1>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi beatae placeat animi aperiam earum tempora delectus eum porro, corrupti.</p>
							<p>
								<strong className="ProductDetails__Heading">Price</strong>
								<span className="ProductDetails__Price">GH$ {product.price}</span>
							</p>
							<p>
								<strong className="ProductDetails__Heading">Quantity</strong>
								<ProductCounter/>
							</p>
							<div className="BtnBar">
								<CartButton className="BtnBar__Btn"/>
								<button type="button" className="BtnBar__Btn">
									<Favorite/>
									Add to Wishlist
								</button>
							</div>
						</div>
					</section>
					<StoreServices/>
				</Container>
			</div>
		</>
	)
}
export default Index;