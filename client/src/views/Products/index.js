import React, { useState, useContext } from 'react';
import { StoreContext } from '../../store';
import MenuIcon from '@material-ui/icons/Menu';
import './Products.css';

// components
import StoreFeed from '../../components/StoreFeed';
import Container from '../../components/Container';
import StoreServices from '../../components/Services';
import CartPreviewBox from '../../components/CartPreviewBox';
import ProductsNavigation from '../../components/ProductsNavigation';

const Index = (props) => {
	const [categoryFilter, setFilter] = useState("all");
	const { store, dispatch } = useContext(StoreContext);
	/**
	 *
	 * get number of products in a given category
	 *
	 * @param {String} category - category of items
	 * @returns {Number} - number of items in specified category
	 */
	function getItemsCount(category){
		return store.products.filter(product => product.category === category).length;
	}
	/**
	 *
	 * Gets categories of items and number of items 
	 * a given category
	 *
	 * @returns {Array} - array of categories of items and their item count
	 */
	function getCategories(){
		let categories = store.products.map(product => product.category);
		categories = [...new Set(categories).values()]/* remove duplicate categories*/;
		categories = categories.map(category => ({
			title: category, count: getItemsCount(category)
		}));
		
		return categories;
	}
	/**
	 *
	 * filters products in a given category
	 *
	 * @returns {Array} - items in selected category
	 */
	function filteredProducts(){
		/*Return all items if 'all' cateogory was selected*/
		if (categoryFilter.toUpperCase() === 'ALL'){
			return store.products;
		}

		return store.products.filter(product => product.category.toUpperCase() === categoryFilter.toUpperCase());
	}

	function toggleCategoriesNavigationBar(){
		dispatch({ type: 'TOGGLE_NAVIGATION', show: !store.navOpen })
	}

	return (
		<>
		  	<div className="Store__Header">
		  		<Container>
		  			<button className="MenuToggler" type="button" onClick={toggleCategoriesNavigationBar}>
		  				<MenuIcon/>
		  			</button>
		  			<div className="ShopDetails">
		  				<p className="ShopDetails__Name">Shop Name</p>
		  				<a href="tel:+2330501654301" className="ShopDetails__PhoneNo">+233 50 165 4301</a>
		  			</div>
		  		</Container>
		  	</div>
		    <div className="Store__Main">
		    	<Container>
			    	<ProductsNavigation 
			    		activeFilter={categoryFilter}
			    		categories={getCategories()}
			    		onCategoryChanged={filter => setFilter(filter)}
			    	/>
			    	<StoreFeed 
			    		products={filteredProducts()} 
			    		heading={categoryFilter}
			    	/>
			    	<CartPreviewBox/>
		    	</Container>
		    </div>
		    <StoreServices/>
		</>
	)
}

export default Index;