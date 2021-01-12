import React from 'react';
import './CustomButton.scss';

class CustomedButton extends React.Component {

  render() {
    return (
      <button className="custom-button">
        {this.props.text}
      </button>
    );
  }
}

export default CustomedButton;
