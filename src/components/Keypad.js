import React from 'react'

class Keypad extends React.Component{

  entering = () => {
    console.log('Entering password...');
  }

  render (){
    return(
      <div className="keypad">
        <input type="password" onKeyUp={this.entering}></input>
      </div>
    );
  }
}

export default Keypad;
