import React from 'react';
import ReactDOM from 'react-dom';

export default class EyesOnMe extends React.Component{
  blurFunction = () => {
    console.log('Hey! Eyes on me!');
  }
  focusFunction = () => {
    console.log('Good!');
  }

  render() {
    return (

      <button type="button" onBlur={this.blurFunction} onFocus={this.focusFunction}/>

    )
  }
}
