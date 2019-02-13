// Code EyesOnMe Component Here
import React, {Component} from 'react';

export default class EyesOnMe extends Component {
    goodJobBuddy = () => {
        console.log('Good!')
    }
    lookAtMe = () => {
        console.log('Hey! Eyes on me!')
    }
    render(){
        return(
            <div>
                <button onFocus={this.goodJobBuddy} onBlur={this.lookAtMe}>
                </button>
            </div>
        )
    }
}