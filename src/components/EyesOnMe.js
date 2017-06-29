import React from 'react'


export default class EyesOnMe extends React.Component {

  constructor() {
    super()

    this.onBlur = this.onBlur.bind(this)
    this.onFocus = this.onFocus.bind(this)
  }
    onBlur = () => {
      console.log('Good!');
    }

    onFocus =() => {
    console.log('Hey! Eyes on me!');
  }

  render(){
    return(
      <div>
      <button onFocus={this.onFocus} onBlur={this.onBlur}>Hello </button>
      </div>
    )

  }
}
