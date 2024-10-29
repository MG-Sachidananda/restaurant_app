import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter, SubHeading } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="login">
    {/* <FooterOverlay /> */}
    {/* <Newsletter /> */}

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">35, Basavanapura Rd, RMS Colony, Bhattarahalli, Hosabasavanapura, Krishnarajapuram, Bengaluru, Karnataka 560049</p>
        <p className="p__opensans">cafeunnati1005@gmail.com</p>
        <p className="p__opensans">+91 9380072047</p>
        <p className="p__opensans">+91 9380703201</p>
      </div>

      <div className="app__footer-links_logo">
        {/* <img src={images.unnati} alt="footer_logo" /> */}
        <h1 className="app__footer-headtext">Cafe  Unnati</h1>
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          {/* <FiFacebook /> */}
          {/* <FiTwitter /> */}
         <a href='https://www.instagram.com/_cafe_unnati/' target='_blank'>  <FiInstagram /></a>
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">08:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 am - 11:00 pm</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">2024 Unnati. All Rights reserved.</p>
    </div>

  </div>
);

export default Footer;
