// Code EyesOnMe Component Here
import React from 'react';


export default class EyesOnMe extends React.Component{
  render(){
    return(
      <button onFocus={this.good} onBlur={this.eyesOnMe}>Look at me!</button>
    )
  }





good = () =>{
  console.log("Good!")
}

eyesOnMe = () => {
  console.log("Hey! Eyes on me!")
}

}
