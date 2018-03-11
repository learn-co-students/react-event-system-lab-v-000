import React from 'react'

class Keypad extends React.Component {

  entering = () => {
    console.log("Entering password...")
  }

  render() {
    return (
      <input type="password" onKeyUp={this.entering}/>
    )
  }
}

export default Keypad;
