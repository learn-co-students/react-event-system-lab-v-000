import React from 'react'

function keysPressed() {
  console.log("Entering password...")
}

export default class Keypad extends React.Component {



  render() {
    return (<div>
      <input type='password' onKeyUp={keysPressed} />
      </div>
    )
  }
}
