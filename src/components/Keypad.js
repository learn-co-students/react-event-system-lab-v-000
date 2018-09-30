// Code Keypad Component Here
import React, {component} from 'react';

export default class Keypad extends Component {

  handleInputPassword = () => console.log('Entering password...')

  render(){
    return (
      type="password"
      onKeyUp={this.handleInputPassword}
    )
  }
}
export default Keypad;
