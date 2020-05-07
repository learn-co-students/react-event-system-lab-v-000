import React, { Component } from 'react'; 

export default class EyesOnMe extends React.Component {

  render() {
    return(
      <button onFocus={this.handleFocus} onBlur={this.handleBlur}>Eyes on me, please!</button>
    )
  }

  handleFocus = () => console.log('Good!')

  handleBlur = () => console.log('Hey! Eyes on me!')

} 