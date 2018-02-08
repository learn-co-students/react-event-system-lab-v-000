import React from 'react';

export default class Keypad extends React.Component {

  pwdFn = (e) => {
    console.log('Entering password...')
  }

  render() {
    return(
      <div>
        <input type="password" onKeyUp={this.pwdFn} />
      </div>
    )
  }
}
