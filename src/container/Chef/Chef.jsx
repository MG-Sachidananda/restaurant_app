import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    {/* <div className="app__wrapper_img app__wrapper_img-reverse"> */}
      {/* <img src={images.chef} alt="chef_image" /> */}
    {/* </div> */}
    <div className="app__wrapper_info">
      <SubHeading title="Chef's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">At Cafe Unnati, we believe that food and drinks are more than just nourishment.</p></div>
        <p className="p__opensans"> —they're a way to connect, celebrate, and comfort. From our carefully brewed coffee and refreshing mojitos to flavorful snacks, Chinese cuisine, and indulgent desserts, we create a space where every bite and sip is filled with joy. We are committed to offering a diverse menu that caters to all your cravings, whether you're here to relax with friends, grab a quick snack, or indulge in something sweet. Our focus is on bringing people together through flavors that evoke feelings of happiness and warmth, all served with a dash of love.</p>
        
      </div>

      <div className="app__chef-sign">
        {/* <p>Kevin Luo</p> */}
        <p className="p__opensans"> - Chef & Founder</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
