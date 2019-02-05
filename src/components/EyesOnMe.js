import React, { Component } from 'react'

export default class EyesOnMe extends React.Component {
  constructor() {
    super()
  }

  blurListener = event => {
    console.log('Hey! Eyes on me!')
  }

  focusListener = event => {
    console.log('Good!')
  }

  render() {
    return <button onBlur={this.blurListener} onFocus={this.focusListener} />
  }
}
