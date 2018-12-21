import React from 'react'

class Keypad extends React.Component {
  keypad = () => {console.log('Entering password...')}
  //this is a function that will be triggered via onKeyUp
  render() {
    return (
      <div>
        <input type='password' onKeyUp={this.keypad}/>
      </div>
    )
  }
}

export default Keypad
