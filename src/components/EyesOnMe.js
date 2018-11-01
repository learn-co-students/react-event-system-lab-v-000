import React from 'react';
// import Keypad from './Keypad'
class EyesOnMe extends React.Component {

  focusing = () => {console.log("Good!")}

  blurring = () => {console.log('Hey! Eyes on me!')}

  render() {
    return (
      <button onFocus={this.focusing}
      onBlur={this.blurring}></button>
    )
  }

}

export default EyesOnMe
