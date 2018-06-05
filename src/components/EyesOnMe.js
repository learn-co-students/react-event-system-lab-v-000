// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  focusOnMe = () => console.log('Good!')
  blurAwayFromMe = () => console.log('Hey! Eyes on me!')
  render() {
    return (
      <button onFocus={this.focusOnMe} onBlur={this.blurAwayFromMe}>
        Eyes on me, please!
      </button>
    )
  }
}

export default EyesOnMe;
