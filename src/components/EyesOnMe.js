// Code EyesOnMe Component Here
import React from 'react'
import ReactDOM from 'react-dom'

class EyesOnMe extends React.Component {

  focusEvent = () => {
    console.log('Good!')
  }

  blurEvent = () => {
    console.log('Hey! Eyes on me!')
  }

  render () {
    return (
      <button onFocus={this.focusEvent} onBlur={this.blurEvent}>KEANU!!!</button>
    )
  }
}

export default EyesOnMe;