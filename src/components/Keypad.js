import React from 'react';

class Keypad extends React.Component {
  constructor() {
    super();
  }

  act = function() {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.act}>Blah</input>
    )
  }
}

export default Keypad;
