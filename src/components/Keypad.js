import React from 'react';
// import EyesOnMe from './EyesOnMe'
class Keypad extends React.Component {


  entering = () => {console.log('Entering password...')}

  render() {
    return (
      <input onKeyUp={this.entering} type="password" />
    )
  }

}

export default Keypad
