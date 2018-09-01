// Code EyesOnMe Component Here
// Code Keypad Component Here
import React from 'react'

export default class EyesOnMe extends React.Component {
    handleOnBlur = () => console.log('Hey! Eyes on me!')
    handleOnFocus = () => console.log('Good!')
    render (){
        return(
            <button
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            />
        )
    }
}
