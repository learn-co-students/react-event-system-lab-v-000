import React from 'react'

class Keypad extends React.Component {
  message = () => console.log('Entering password...')

  render() {
    return (
      <input type="password" onKeyUp={this.message} />
    )
  }
}

export default Keypad