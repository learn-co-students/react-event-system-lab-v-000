import React from 'react';

class Keypad extends React.Component {
  constructor() {
    super();

    this.keypadFeedback = this.keypadFeedback.bind(this);
  };

  keypadFeedback() {
    console.log('Entering password...');
  }

  render() {
    return(
      <form>
        <label>
          Password:
          <input onKeyUp={this.keypadFeedback} type="password" />
        </label>
      </form>
    );
  }
}

export default Keypad

