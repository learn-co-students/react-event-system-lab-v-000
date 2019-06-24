import React, { Component } from 'react';

export default class KeyPad extends Component {

  password = () => {
     console.log('Entering password...');
   }

   render() {
     return (
       <input type="password" onKeyUp={this.password}/>
     );
   }
 }
