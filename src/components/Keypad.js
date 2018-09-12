import React from 'react'

class Keypad extends React.Component {

  handleKeyUp = (e) => {
    console.log("Entering password...")
  }

  render() {
    return (
      <div>
        <input type="password" onKeyUp={this.handleKeyUp} />
      </div>
      
    )
  }
}

export default Keypad