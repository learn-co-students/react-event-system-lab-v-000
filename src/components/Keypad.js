// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  listener = () => console.log('Entering password...')

  render() {
    return (
      <div>
      <input
      type="password"
      onKeyUp={this.listener}
      />
      </div>
    )
  }

}
export default Keypad;
