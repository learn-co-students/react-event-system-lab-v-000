// Create an EyesOnMe React component.
    // -render a button: add event handlers that listens for the focus and blur events.
// When the focus event fires, use console.log to print out the text 'Good!'.
// When the blur event fires, use console.log to print out the text 'Hey! Eyes on me!'.
// Tests passed:
// <EyesOnMe />
// ✓ should have one button
// Good!
// ✓ should trigger console output when focusing

import React from 'react';

class EyesOnMe extends React.Component {

  onFocus = () => console.log('Good!')

  onBlur = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}>
        Eyes on me, please!
      </button>
    )
  }
}

export default EyesOnMe;
