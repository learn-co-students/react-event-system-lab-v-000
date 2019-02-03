// // Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component {

  focus = () => {console.log("Good!")}
  blur = () => {console.log("Hey! Eyes on me!")}

  render(){
    return(
      <button onFocus={this.focus} onBlur={this.blur}>
      </button>
    )
  }
}

// import React from 'react';
// class EyesOnMe extends React.Component {

//     onFocus = () => console.log('Good!')
  
//     onBlur = () => console.log('Hey! Eyes on me!')
  
//     render() {
//       return (
//         <button onFocus={this.onFocus} onBlur={this.onBlur}>
//           Eyes on me, please!
//         </button>
//       )
//     }
//   }
  
//   export default EyesOnMe;