// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
  triggerFocus = () => {
    console.log('Good!')
  }
  triggerBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  render () {
    return (
      <button onFocus={this.triggerFocus} onBlur={this.triggerBlur}>Click</button>
    )
  }
}

export default EyesOnMe;
