// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component {
  gotAttention = () => {
    console.log('Good!')
  }

  lostAttention = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.gotAttention} onBlur={this.lostAttention}>Right here!</button>
    )
  }
}

export default EyesOnMe