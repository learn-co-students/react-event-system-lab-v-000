// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {

  onBlur = () => {console.log('Hey! Eyes on me!')}
  onFocus = () => {console.log('Good!')}

  render() {
    return(
      <button onFocus={this.onFocus} onBlur={this.onBlur}></button>
    )
  }
}
