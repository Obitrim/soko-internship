const reducer =  (state, action) => {
	switch (action.type) {
		case 'TOGGLE_NAVBAR': 
			return {
				...state,
				navOpen: action.show
			}
			break;

		default: return { ...state }
	}
};

export default reducer;