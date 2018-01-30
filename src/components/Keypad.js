import React from 'react';
// import ReactDom from 'react-dom';

export default class Keypad extends React.Component {
  capturePass = () => {
    console.log('Entering password...');
  }

  render () {
    return(
      <div>
        Enter Password: <br />
        <input onKeyUp={this.capturePass} type="password" />
      </div>
    );
  }
}