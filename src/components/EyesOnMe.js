import React from 'react';
import ReactDOM from 'react-dom';

class EyesOnMe extends React.Component {

  good = () => { console.log('Good!'); }
  eyes = () => { console.log('Hey! Eyes on me!');}

  render() {
    return (
      <button onFocus={this.good} onBlur={this.eyes}/>
    )
  }
}

export default EyesOnMe;
