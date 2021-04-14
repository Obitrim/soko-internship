import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './ProductCard.css';
import CartButton from '../CartButton';
import { StoreContext } from '../../store';

const Index = ({name, id, imgURL, price,...props}) => {
    const { store, dispatch } = useContext(StoreContext);
    /**
     *
     * attempts to remove item from bag
     * @returns {undefined}
     */
    function addToBag(){
        // make request to save product
        // updating UI on request success
        dispatch({ type: 'ADD_TO_BAG', product: {
            id, imgURL, name, price, quantity: 1
        }});
    }
    /**
     *
     * attempts to add item to bag
     * @returns {undefined}
     */
    function removeFromBag(){
        // make request to remove saved products product
        // updating UI on request success
        dispatch({ type: 'REMOVE_FROM_BAG', id });
    }

    function isInBag(){
        return store.bag.findIndex(product => product.id === id) !== -1;
    }

    return (
        <div className="ProductCard" {...props}>
        	<img className="ProductCard__Img" src={imgURL} alt=""/>
        	<div className="ProductCard__Details">
        		<Link  className="ProductCard__Name" to={`/products/${id}`} ><h2>{name}</h2></Link>
        		<div className="ProductCard__BottomRow">
                    <p className="ProductCard__Price">GH$ <span>{price}</span></p>
                    <CartButton
                        onAddToBag={addToBag}
                        onRemoveFromBag={removeFromBag}
                        isChecked={isInBag()}
                    />     
                </div>
        	</div>
        </div>
    )
}

Index.propTypes = {
    name: PropTypes.string,
    imgURL: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string.isRequired
}

Index.defaultProps = {
    name: 'Product Name',
    imgURL: '',
    price: 0
}

export default Index;