import React, {Component} from 'react';

export default class Keypad extends Component{


handleKeys = (event) =>{
  console.log('Entering password...')
}

  render(){
    return(
      <div>
      <input type='password' onKeyUp={this.handleKeys}/>
      </div>
    )
  }
}
