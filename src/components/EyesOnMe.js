import React from 'react';

class EyesOnMe extends React.Component {

  onFocus = () => console.log('Good!')

  onBlur = () => console.log("Hey! Eyes on me!")

  render() {
    <button onFocus={this.onFoucs} onBlur={this.onBlur}>
      Eyes on me, please!
    <button/>
  }
}

export defaul EyesOnMe;
