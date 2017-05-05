import React from 'react'

export default class EyesOnMe extends React.Component {
  constructor() {
    super()

    this.onBlur = this.onBlur.bind(this)
    this.onFocus = this.onFocus.bind(this)
  }

  onBlur() {
    console.log("Hey! Eyes on me!")
  }

  onFocus() {
    console.log("Good!")
  }

  render() {
    return (
      <button onFocus={this.onFocus} onBlur={this.onBlur}>Press me</button>
    )
  }
}
