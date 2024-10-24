import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      {/* <img src={images.G} alt="G_overlay" /> */}
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At Cafe Unnati, we believe that every cup tells a story. We serve coffee and tea with a personal touch, designed to uplift your spirits and warm your heart. Whether you're here to relax, connect, or reflect, we offer more than just a drink—we offer an experience filled with feelings.</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        {/* <img src={images.knife} alt="about_knife" /> */}
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">Founded with the idea that a good cup of coffee or tea can spark meaningful moments, We started as a simple dream to create a space where people can connect over shared feelings. With a passion for quality and warmth, we have grown into a beloved spot where each sip resonates with comfort and care.</p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
