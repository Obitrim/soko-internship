import React from 'react';
import LocalMallIcon from '@material-ui/icons/LocalMall';

import './Header.css';
import Navbar from '../Navbar';
import Container from '../Container';
import ProfileBox from '../ProfileBox';

const Index = (props) => {

  return (
    <header className="Header">
      <Container className="Header__Container">
        <span className="Header__SokoText">Store made with s<LocalMallIcon className="Header__BagIcon"/>ko</span>
        <Navbar/>
        <ProfileBox/>
      </Container>
    </header>
  )
}

export default Index;