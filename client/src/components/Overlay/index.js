import React, { useContext, useEffect } from 'react';
import {StoreContext} from '../../store';

const styles = {
	position: 'fixed',
	top: '0',
	left: '0',
	bottom: '0',
	right: '0',
	backdropFilter: 'blur(5px)',
	backgroundColor: 'rgba(0, 0, 0, 0.4)',
	zIndex: '9999'
}

const Index = (props) => {
	const { store, dispatch } = useContext(StoreContext);

	function closeOverlay(){
		dispatch({ type: 'TOGGLE_NAVIGATION', show: false });
	}

	function handleWindowResize(evt){
		if (store.navOpen){
			closeOverlay();
		}
	}

	useEffect(() => {
		window.addEventListener('resize', handleWindowResize);
		return () => window.removeEventListener('resize', handleWindowResize);
	},[window.offsetWidth]);

	return store.navOpen && <div style={styles} onClick={closeOverlay}></div>
}

export default Index;