import React from 'react';

export default class Keypad extends React.Component {
  message = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <input type="password" onKeyUp={this.message} />
    )
  }
}






//
// 1. In the `components/Keypad.js` file, create a `Keypad` React component.
// 2. In that component, render an `input` with the right type.
// 3. On that `input`, add an event handler that listens for the `keyUp` event.
// 4. When that event fires, use `console.log` to print out the text `'Entering password...'`.
