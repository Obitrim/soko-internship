import React from 'react';
import './App.css';
import Header from '../../components/Header';
import RouterView from '../../components/RouterView';

const Index = (props) => {
  return (
  	<div className="App">
  		<Header/>
	  	<RouterView/>
  	</div>
  )
}

export default Index;