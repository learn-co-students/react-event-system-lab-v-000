import React, { Component } from 'react';

export default class KeyPad extends React.Component{

  keyUp = () => {
   console.log('Entering password...');
 }

  render (){
    return (
      <input type="password" onKeyUp={this.keyUp} />
    );
  }
}
