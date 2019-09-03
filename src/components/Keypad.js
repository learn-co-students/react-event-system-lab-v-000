
import React from 'react';

class Keypad extends React.Component {

  handleInputPassword = () => console.log('Entering password...')

  render() {
    return (
      <div>
        <input 
          type="password"
          onKeyUp={this.handleInputPassword} 
        />
      </div>
    )
  }
}

export default Keypad;


/*


--

import React from 'react'

class Keypad extends React.Component {
    passwordUp = () => console.log('Entering password...')

    render() {
        return(
            <div>
                <input type="password" onKeyUp={this.passwordUp} />
            </div>
        )
    }
}

export default Keypad;

*/