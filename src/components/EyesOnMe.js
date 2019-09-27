import React from 'react';

export default class EyesOnMe extends React.Component {
  focusMessage = () => {
    console.log("Good!")
  }

  blurMessage = () => {
    console.log("Hey! Eyes on me!")
  }


  render() {
    return (
      <button onFocus={this.focusMessage} onBlur={this.blurMessage}></button>
    )
  }
}



// 1. In the `components/EyesOnMe.js` file, create a `EyesOnMe` React component.
// 2. In that component, render a `button`.
// 3. On that `button`, add event handlers that listens for the `focus` and `blur` events.
// 4. When the `focus` event fires, use `console.log` to print out the text `'Good!'`.
// 5. When the `blur` event fires, use `console.log` to print out the text `'Hey! Eyes on me!'`.
