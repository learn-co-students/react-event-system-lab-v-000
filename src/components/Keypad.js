import React from 'react'

class Keypad extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  handleKeyUp = () => {
    console.log('Entering password...')
  }

  render() {
    return (
      <input
        type="password"
        onKeyUp={this.handleKeyUp}
      />
    )
  }
}

export default Keypad
