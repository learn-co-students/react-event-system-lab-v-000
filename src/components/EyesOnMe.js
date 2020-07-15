// Code EyesOnMe Component Here

// import React from 'react';
import React, { Component } from 'react';

// import index.js from './index.js'


export default class EyesOnMe extends React.Component {

  render() {
    return(
      <button onFocus={ () => {console.log('Good!')}} onBlur={ () => { console.log('Hey! Eyes on me!')} } > </button> 
    )
  }

}
