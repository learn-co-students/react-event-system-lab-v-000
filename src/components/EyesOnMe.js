// Code EyesOnMe Component Here
import React, { Component } from 'react';

class EyesOnMe extends React.Component {

  _timeoutID;

constructor(props) {
  super(props)
  
}

  render() {
    return (
      <div>

      <button
        onBlur={this._onBlur}
        onFocus={this._onFocus}>hi</button>
      </div>
    )
  }
  _onBlur = () =>  console.log('Hey! Eyes on me!')


 _onFocus = () => console.log('Good!')

}



export default EyesOnMe;
