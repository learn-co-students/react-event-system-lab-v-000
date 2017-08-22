import React from 'react';

export default class EyesOnMe extends React.Component {
  goodFocus = () => {
    console.log('Good!');
  }
  heyBlur = () => {
    console.log('Hey! Eyes on me!');
  }
  
  render() {
    return (
      <button onFocus={this.goodFocus} onBlur={this.heyBlur}/>
    )
  }
}
