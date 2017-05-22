import React from 'react';

class Keypad extends React.Component {
  constructor() {
    super();

    this.typing = this.typing.bind(this);
  }

  typing(){
    console.log("Entering password...")
  };

  render(){
    return (
      <input type="password" onKeyUp={this.typing} />
    )
  }
};

export default Keypad;
