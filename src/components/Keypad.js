// Code Keypad Component Here
import React from 'react';
 
 class Keypad extends React.Component {
   msg = () => {
     console.log('Entering password...')
   }
 
   render () {
     return (
       <input type='password' onKeyUp={this.msg}></input>
     );
   }
 }
 
 export default Keypad;