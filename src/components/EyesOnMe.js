// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  focused = () => {
    console.log('Good!');
  }

  blurry = () => {
    console.log('Hey! Eyes on me!');
  }

  render(){
    return(
      <button onFocus={this.focused} onBlur={this.blurry}/>
    )
  }
}

export default EyesOnMe
