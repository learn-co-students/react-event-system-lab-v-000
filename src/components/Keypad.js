// Code Keypad Component Here
import React from 'react'

export default class Keypad extends React.Component{
  log = () => (
    console.log('Entering password...')
  )
  render(){

    return(
      <input onKeyUp={this.log} type='password'/>
    )
  }
}
