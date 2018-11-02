import React, {Component} from 'react';


export default class Keypad extends Component {
  typing = () => {console.log('Entering password...')};
  render () {
    return(
  <input onKeyUp={this.typing} type="password" />)
  }
}
