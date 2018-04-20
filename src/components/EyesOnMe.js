// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {

  onFocus = function () {
    console.log ('Good!')
  }

  onBlur = function () {
    console.log ('Hey! Eyes on me!')
  }

  render () {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}> </button>
    )
  }

}

export default EyesOnMe
