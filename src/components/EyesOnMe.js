import React from 'react';

class EyesOnMe extends React.Component {
  eyesOn = () => {
    console.log("Good!")
  }
  eyesOff = () =>{
    console.log("Hey! Eyes on me!")
  }
  render(){
    return (
      <button onFocus={this.eyesOn} onBlur={this.eyesOff} />
    )
  }
}

export default EyesOnMe;
