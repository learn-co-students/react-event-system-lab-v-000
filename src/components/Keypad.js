import React from 'react';

export default class Keypad extends React.Component {
  // constructor() {
  //   super();
  //
  //   this.onTyping = this.onTyping.bind(this);
  // }
  // onTyping() {
  //   console.log('Entering password...')
  // };

  onTyping = () => {
    console.log('Entering password...');
  }

  render() {
    return (
      <input type="password" onKeyUp={this.onTyping} />
    );
  }
}
