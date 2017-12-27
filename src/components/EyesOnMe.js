// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  focusMsg = () => { console.log('Good!') };

  blurMsg = () => { console.log('Hey! Eyes on me!') };

  render() {
    return (
      <div>
        <button onFocus={this.focusMsg} onBlur={this.blurMsg}>Are you focused!?!</button>
      </div>
    )
  }
}

export default EyesOnMe;
