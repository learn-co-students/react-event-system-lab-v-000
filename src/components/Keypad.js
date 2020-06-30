// Use an <input type="password" /> field to capture input. Here's how to complete the exercise:
// In the components/Keypad.js file, create a Keypad React component.
// In that component, render an input with the right type.
// On that input, add an event handler that listens for the keyUp event.
// When that event fires, use console.log to print out the text 'Entering password...'.
// Tests passed:
// <Keypad />
// ✓ should have one input
// ✓ should have the right input type
    // Entering password...
// ✓ should trigger console output when typing

import React from 'react';

class Keypad extends React.Component {

  handleInputPassword = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input 
          type="password"
          onKeyUp={this.handleInputPassword} 
        />
      </div>
    )
  }
}

export default Keypad;

