import React from 'react'

class EyesOnMe extends React.Component{

  focusing = () => {
    console.log('Good!');
  }

  blurring = () => {
    console.log('Hey! Eyes on me!');
  }

  render (){
    return(
      <div className="eyesOnMe">
        <button onFocus={this.focusing} onBlur={this.blurring}></button>
      </div>
    );
  }
}

export default EyesOnMe;
