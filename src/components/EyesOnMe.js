// Code EyesOnMe Component Here
import { render } from 'enzyme'
import React from 'react'

export default class EyesOnMe extends React.Component {

    handleOnBlur = () => (
        console.log('Hey! Eyes on me!')
    )

    handleOnFocus = () => (
        console.log('Good!')
    )
    render(){
        return(
            <div>
                <button onFocus={this.handleOnFocus} onBlur={this.handleOnBlur}></button>
            </div>
        )
    }
}