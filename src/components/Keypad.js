import React from 'react'

class Keypad extends React.Component{
  pwEnter = ()=>{
    console.log("Entering password...");
  }

  render(){
    return(
      <div>
        <input type="password" onKeyUp={this.pwEnter}/>
      </div>
    )
  }
}

export default Keypad;
