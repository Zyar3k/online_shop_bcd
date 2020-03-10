import React from 'react';
import './Contact.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainTitle from '../../common/MainTitle/MainTitle';
import { faAt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

class Contact extends React.Component {

  render(){

    return(
      <div className='container'>
        <MainTitle>Contact us</MainTitle>
        <div className="contactPage">
          <div className='contactContent'>
            <div>Betty craft design</div>
            <div>House of Lords, London</div>
            <div>SW1A 0PW</div>
            <div><FontAwesomeIcon icon={faAt} /> bettycraftdesigns@bcd.com</div>
            <div><FontAwesomeIcon  icon={faPhoneSquareAlt} /> +44 20 7219 4272</div>
            <div className='socialMedia'>
              <Link to="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookSquare} /></Link>
              <Link to="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></Link>
              <Link to="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Contact;