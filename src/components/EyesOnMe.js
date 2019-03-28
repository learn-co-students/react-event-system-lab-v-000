import React from 'react'

export default class EyesOnMe extends React.Component {

  blurHandler = () => { console.log('Hey! Eyes on me!')}
  focusHandler = () => { console.log('Good!')}

  render() {
    return(
      <button onBlur={this.blurHandler} onFocus={this.focusHandler}>Press Me</button>
    )
  }
}
