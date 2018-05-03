// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

  handleBlur = () => {console.log('Good!');}
  handleFocus = () => {console.log('Hey! Eyes on me!');}

  render() {
    return(
      <button onFocus={this.handleBlur} onBlur={this.handleFocus}>
       Eyes on me, please!
      </button>
    )
  }
}

export default EyesOnMe
