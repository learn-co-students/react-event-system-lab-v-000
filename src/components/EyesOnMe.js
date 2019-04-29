import React from 'react';

class EyesOnMe extends React.Component {

  remind = () => {
    console.log("Hey! Eyes on me!")
  }

  compliment = () => {
    console.log("Good!")
  }

  render() {
    return (
      <button onFocus={this.compliment} onBlur={this.remind}>button</button>
    )
  }
}

export default EyesOnMe
