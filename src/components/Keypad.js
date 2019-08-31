import React from 'react';
import PropTypes from 'prop-types';

class Keypad extends React.Component {
  pin = () => {
    console.log('Entering password...')
  }
  render() {
    return(
      <input type="password" onKeyUp={this.pin}>{this.props.keypad}</input>

    )
  }
}

Keypad.propTypes = {
  keypad: PropTypes.string
}

export default Keypad;
