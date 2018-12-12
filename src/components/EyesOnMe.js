import React, { Component } from 'react';


export default class EyesOnMe extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  focus = () => {
    console.log('Good!')
  }

  blur = () => {
    console.log('Hey! Eyes on me!')
  }


  render() {
    return (
      <button
      onFocus={this.focus}
      onBlur={this.blur}>
      </button>
    )
  }
}
