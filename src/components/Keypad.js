import React from 'react';

export default class Keypad extends React.Component {
  render() {
    return (
      <div>
        <input onKeyUp={() => console.log('Entering password...')} type="password"/>
      </div>
    )
  }
}
