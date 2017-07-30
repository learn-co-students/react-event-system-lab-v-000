// Code EyesOnMe Component Here
import React from 'react'

export default class EyesOnMe extends React.Component{
  getFocus = () => {
    console.log('Good!')
  }

  getBlur = () => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
      <div>
        <button onFocus={this.getFocus} onBlur={this.getBlur}>Button</button>
      </div>
    )
  }
}
