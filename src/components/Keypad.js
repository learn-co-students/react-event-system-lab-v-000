import React from 'react'

class Keypad extends React.Component {

  keyUp = () => {
    console.log('Entering password...')
  }

    render() {
      return(
        <form>
          <input type='password' onKeyUp={this.keyUp}/>
        </form>
      )
    }
}

export default Keypad
