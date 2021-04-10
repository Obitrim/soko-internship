import React from 'react';
import './App.css';
import Header from '../../components/Header';
import Overlay from '../../components/Overlay';
import RouterView from '../../components/RouterView';

const Index = (props) => {
  return (
  	<div className="App">
  		<Header/>
	  	<RouterView/>
	  	<Overlay/>
  	</div>
  )
}

export default Index;