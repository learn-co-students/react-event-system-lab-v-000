import React, { Component } from 'react';

export default class EyesOnMe extends Component {
  
  focusing = () => {
    console.log('Good!')
  }

  blurring = () => {
    console.log('Hey! Eyes on me!')
  }

  render(){
    return (
      <div class="EyesOnMe">
        <button onFocus={ () => this.focusing() } onBlur={ () => this.blurring() }></button>
      </div>
    )
  }

}
