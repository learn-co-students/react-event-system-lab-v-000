// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  onFocus = () => console.log('Good!')

  onBlur = () => console.log('Hey! Eyes on me!')


  render(){
    return (
      <div><button onFocus={this.onFocus} onBlur={this.onBlur}></button></div>
    )
  }

}

export default EyesOnMe;
