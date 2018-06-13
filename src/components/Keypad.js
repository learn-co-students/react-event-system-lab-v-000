// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

  key = () => console.log('Entering password...');


  render (){
    return (
      <div>
        <input onKeyUp={this.key} type="password"/>
      </div>
    );
  }
}
export default Keypad;
