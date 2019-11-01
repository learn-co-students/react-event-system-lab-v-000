// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  displayGood = () => {
    console.log('Good!')
  }

  displayHey = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button type="button" name="button" onFocus={this.displayGood} onBlur={this.displayHey} />
    )
  }
}

export default EyesOnMe;
