// Code EyesOnMe Component Here
import React, { Component } from 'react';


export default class EyesOnMe extends Component {



  render() {
    return (
      <div id="app">
        <button onFocus={() => {return console.log('Good!')}} onBlur={() => {return console.log('Hey! Eyes on me!')}}/>
      </div>
    )
  }

}
