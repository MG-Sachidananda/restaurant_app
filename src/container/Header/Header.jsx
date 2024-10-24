import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="ಚಹಾ - ಭರವಸೆಗಳ ದಾರಿಯಲ್ಲಿ ಒಂದು ಸಣ್ಣ ವಿರಾಮ" />
      <h1 className="app__header-h1">CAFE UNNATI</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Welcome to Cafe Unnati, where every sip is brewed with love, and every moment feels like home. Your happiness is our favorite flavor!</p>
      <a href='#menu'><button type="button" className="custom__button" href="#menu">Explore Menu</button></a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.coffee} alt="header_img" />
    </div>
  </div>  
);

export default Header;
