import React, { useContext} from 'react';
import PropTypes from 'prop-types';
import { StoreContext } from '../../store';

import './ProductsNavigation.css';

const Index = ({onCategoryChanged, categories, activeFilter, ...props}) => {
	const { store, dispatch } = useContext(StoreContext);

	function changeFilter(filter){
		return evt => {
			evt.preventDefault();
			dispatch({ type: 'TOGGLE_NAVIGATION', show: false })
			onCategoryChanged(filter);
		}
	}
	
	function isActiveFilter(category){
		return activeFilter.toUpperCase() === category.toUpperCase();
	}

	return (
		<div className={`ProductsNavigation ${store.navOpen && 'ProductsNavigation--Show'}`} {...props}>
			<div className="ProductsNavigation__Header">Categories</div>
			<a href="#" className={`CategoryLink ${isActiveFilter('ALL') && 'CategoryLink--Active'}`} 
				onClick={changeFilter('all')} 
				> All
			</a>
			{categories.map((category, index) => (
				<a className={`CategoryLink ${isActiveFilter(category.title) && 'CategoryLink--Active'}`}
					href="#" 
					key={index + category}
					onClick={changeFilter(category.title)} 
					>
					{category.title}
					<span>{category.count}</span>
				</a>
				))}
		</div>
	)
}

Index.propTypes = {
	onCategoryChanged: PropTypes.func.isRequired,
	activeFilter: PropTypes.string,
	categories: PropTypes.arrayOf((propValue, key, componentName, location, propFullName) => {
		let category = propValue[key];
		let propertiesExist = category.hasOwnProperty('title') && category.hasOwnProperty('count');

		if (!propertiesExist){
			return new Error(
				'Invalid prop supplied to ' + componentName 
			);
		}
	})
}

Index.defaultProps = {
	activeFilter: 'ALL'
}

export default Index;