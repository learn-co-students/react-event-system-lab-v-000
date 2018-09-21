// Code EyesOnMe Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class EyesOnMe extends React.Component {
  focusing = () => {
    console.log("Good!")
  }
  blurring = () => {
    console.log('Hey! Eyes on me!')
  }
  render(){
    return (
      <button onFocus={this.focusing} onBlur={this.blurring}/>
    )
  }
}
