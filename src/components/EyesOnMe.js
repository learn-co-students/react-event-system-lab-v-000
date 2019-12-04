import React, { Component } from 'react'

export default class EyesOnMe extends Component {
  focus = () => console.log('Good!')
  hey = () => console.log('Hey! Eyes on me!')

  render() {
    return (
      <button onFocus={this.focus} onBlur={this.hey}/>
    )
  }
}
