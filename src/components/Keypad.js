// Code Keypad Component Here
import React from 'react'

//create commponent
class Keypad extends React.Component {

  //event handler to print the msg
  handleInput = () => console.log('Entering password...')

  //return input w/correct type
  render () {
    return (
      <div>
        <input 
          type="password"
          onKeyUp={this.handleInput}   //add listener & send to handler
        />
       </div>
    )
  }

}

export default Keypad