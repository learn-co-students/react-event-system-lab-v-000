// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.
import React from 'react';

export default class EyesOnMe extends React.Component {
  constructor() {
    super()

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }
  onFocus() {
    console.log('Good!');
  }
  onBlur() {
    console.log('Hey! Eyes on me!');
  }
  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}>
      Eyes on me, please!
      </button>
    );
  }
}
