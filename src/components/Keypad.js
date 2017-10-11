import React from 'react';

class Keypad extends React.Component {

  keyUpEvent = () => console.log('Entering password...')

  render() {
    return (
        <input
          type="password"
          onKeyUp={this.keyUpEvent}
        />
    )
  }
}

export default Keypad;
