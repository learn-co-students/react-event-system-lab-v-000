import React from 'react';

export default class Keypad extends React.Component {
  enterPassword = () => {
    console.log('Entering password...')
  };
  render() {
    return (
      <input onKeyUp={this.enterPassword} type="password"></input>
    )};
  };
