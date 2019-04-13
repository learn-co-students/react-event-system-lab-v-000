// Code EyesOnMe Component Here
import React from 'react'

//create component
class EyesOnMe extends React.Component {

  //make handler for focus to print correct msg
  handleOnFocus = () => console.log('Good!')

  //make handler for blur to print correct msg
  handleOnBlur = () => console.log('Hey! Eyes on me!')

  render () {
      //render 1 button listening for 2 separate events
    return (
        <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}>Focus on Me</button>
    )
  }
}

export default EyesOnMe