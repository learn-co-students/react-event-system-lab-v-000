import React from 'react';

class EyesOnMe extends React.Component {

  timeToFocus = () => {
    console.log('Good!')
  }

  needToFocus = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return(
    <button onFocus={this.timeToFocus} onBlur={this.needToFocus}>
    	Look at me! 
    </button>
    )
  }
}

export default EyesOnMe;