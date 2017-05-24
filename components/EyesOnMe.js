import React from 'react'

export default class EyesOnMe extends React.Component {
  constructor() {
    super()
    this.focusBro = this.focusBro.bind(this)
    this.blurBro = this.blurBro.bind(this)
  }

  focusBro() {
    console.log('Good!')
  }

  blurBro() {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <div>
        <button onFocus={this.focusBro} onBlur={this.blurBro}>Click me</button>
      </div>
    )
  }
}
