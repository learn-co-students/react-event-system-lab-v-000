// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {
  gooddd = () => { console.log('Good!') }
  hey = () => { console.log('Hey! Eyes on me!') }
  render() {
    return (
      <button onBlur = {this.hey} onFocus = {this.gooddd}>Button</button>
    )
  }
}
