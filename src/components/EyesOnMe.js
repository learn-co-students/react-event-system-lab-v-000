import React from 'react';

class EyesOnMe extends React.Component{


  focusGood = ()=>{
    console.log("Good!")
  }

  blurHey = ()=>{
    console.log("Hey! Eyes on me!")
  }

  render(){
    return(
      <div>
        <button onBlur={this.blurHey} onFocus={this.focusGood}>Button</button>
      </div>
    )
  }
}

export default EyesOnMe;
