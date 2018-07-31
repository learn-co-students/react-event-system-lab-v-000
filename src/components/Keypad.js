import React from 'react';

export default class Keypad extends React.Component {

  padClick = () => {
    console.log('Entering password...')
  }

  render() {
    return(
      <div><input onKeyUp={this.padClick} type="password"></input></div>
    )
  }
}
