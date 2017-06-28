import React from 'react';

export default class Keypad extends React.Component {

  pass = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input onKeyUp={this.pass} type="password" />
    );
  }
}
