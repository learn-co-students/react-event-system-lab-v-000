// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component {

   typing = () => {
      console.log('Entering password...')
   }

   render() {
     return (
        <div>Password:<input type="password" onKeyUp={this.typing}/></div>
     )
   }
}
