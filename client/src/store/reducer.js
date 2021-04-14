const reducer =  (state, action) => {
	switch (action.type) {
		case 'TOGGLE_NAVIGATION': 
			return {
				...state,
				navOpen: action.show
			}
		case 'ADD_TO_BAG':
			return {
				...state,
				bag: [...state.bag, action.product]
			}
		case 'REMOVE_FROM_BAG':
			let productIndex = state.bag.findIndex(product => product.id === action.id);
			let bag = productIndex === -1 ? state.bag : state.bag.splice(productIndex, 1);
			return {
				...state,
				bag
			}

		default: return { ...state }
	}
};

export default reducer;