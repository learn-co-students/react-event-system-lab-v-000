import React from 'react';

class Keypad extends React.Component {
  keyPress = () => {console.log('Entering password...')}

  render() {
    return <input onKeyUp={this.keyPress} type="password" />
  }
}

export default Keypad;