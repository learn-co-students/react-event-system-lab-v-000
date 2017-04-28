import React from 'react'

class Keypad extends React.Component {
  constructor(props) {
    super(props)

    this.output = this.output.bind(this)
  }

  output(event) {
    console.log('Entering password...')
  }

  render () {
    return (
      <input onKeyUp={this.output} type="password" />
    )
  }
}

export default Keypad
