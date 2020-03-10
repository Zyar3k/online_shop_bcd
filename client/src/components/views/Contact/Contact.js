import React from 'react';
import './Contact.scss';
import MainTitle from '../../common/MainTitle/MainTitle';



class Contact extends React.Component {

  render(){

    return(
      <div className='container'>
        <div className="contactPage">
          <MainTitle>Contact us</MainTitle>
        </div>
      </div>
    );
  };
};

export default Contact;