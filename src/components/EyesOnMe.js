// Code EyesOnMe Component Here
import React from 'react';

export default class EyesOnMe extends React.Component
{
	focusMe=()=> 
	{
		console.log('Good!')
	}
	blurMe=()=>
	{
		console.log('Hey! Eyes on me!')
	}
	render () {
     return (
       <button onFocus={this.focusMe} onBlur={this.blurMe}></button>
     );
   }
}