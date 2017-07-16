import React from 'react';

class EyesOnMe extends React.Component { 
 
  f = () => {
    console.log('Good!');
  }

  b = () => {
    console.log('Hey! Eyes on me!');
  }

  render() {
    return (
      <button onBlur={this.b} onFocus={this.f}/>
    )
  }
}

export default EyesOnMe;