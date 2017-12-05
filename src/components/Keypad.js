import React from 'react';

class Keypad extends React.Component {

  displayMessage = () => {
    console.log('Entering password...')
  };

  render() {
    return (
    <input type="password" onKeyUp={this.displayMessage}/>
    )
  };
};

export default Keypad;
