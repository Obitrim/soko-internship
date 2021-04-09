import React from 'react';
import { Switch, Route } from 'react-router-dom';

// App Views
import Cart from '../../views/Cart';
import Orders from '../../views/Orders';
import Profile from '../../views/Profile';
import Products from '../../views/Products';
import Categories from '../../views/Categories';
import ProductDetails from '../../views/ProductDetails';

// Inline router view styles
const routerViewStyles = {
	marginTop: 'calc(var(--header-h) * 0.5)',
	paddingBottom: 'calc(var(--header-h) * 0.5)'
}

const Index = (props) => {
    return (
        <main className="RouterView" style={routerViewStyles}>
        	<Switch>
        		<Route path="/" exact component={Products}/>
        		<Route path="/cart" component={Cart}/>
                <Route path="/orders" component={Orders}/>
        		<Route path="/profile" component={Profile}/>
        		<Route path="/categories" component={Categories}/>
        		<Route path="/products/:id" component={ProductDetails}/>
        	</Switch>
        </main>
    )
}

export default Index;