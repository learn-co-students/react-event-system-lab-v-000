import React from 'react';

class EyesOnMe extends React.Component {
  focusOnMe = () => (
    console.log('Good!')
  )
  
  blurOnMe = () => (
    console.log('Hey! Eyes on me!')
  )
  
  render() {
    return (
      <button onFocus={this.focusOnMe} onBlur={this.blurOnMe}></button>
    );
  }
}

export default EyesOnMe;
