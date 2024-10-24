import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {

  function navigate(){
     
    const latitude = 13.016321738850673;  
    const longitude = 77.70962204607397;
    const mapsUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
    window.open(mapsUrl, '_blank');
  }
  
  return(
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">35, Basavanapura Rd, RMS Colony, Bhattarahalli, Hosabasavanapura, Krishnarajapuram, Bengaluru, Karnataka 560049</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 4:30 am - 11:30 pm</p>
        <p className="p__opensans">Sat - Sun: 4:30 am - 12:00 pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }} onClick={navigate}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
)
};

export default FindUs;
