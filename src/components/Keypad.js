import React from 'react';

export default class Keypad extends React.Component{

  entering = () => {
    console.log('Entering password...')
  }

  render() {
    return(
      <form>
        <input type='password' onKeyUp={this.entering}></input>
      </form>
    )
  }
}
