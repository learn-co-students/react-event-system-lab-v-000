import React from 'react';

function startTyping() {
  console.log('Entering password...')
}

export default class Keypad extends React.Component {

  render() {
    return (
      <input type="password" onKeyUp={startTyping} />
    );
  }
}
