import React from 'react';
import { withRouter } from 'react-router-dom';
import './ButtonBack.scss';

class ButtonBack extends React.Component {
  render() {

    return(
      <span className='buttonBack' onClick={this.props.history.goBack}>
        back
      </span>
    );
  };
};

export default withRouter(ButtonBack);