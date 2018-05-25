import React from 'react'

class Keypad extends React.Component{
  entering = () => {console.log('Entering password...')}
  render(){
    return(
      <div>
        <input onKeyUp={this.entering}  type="password"/>
      </div>
    )
  }
}

export default Keypad
