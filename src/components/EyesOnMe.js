import React from 'react'

export default class EyesOnMe extends React.Component {
  focused = () => {
    console.log('Good!')
  }
  blurred = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.focused} onBlur={this.blurred}>Click me!</button>
    )
  }
}
