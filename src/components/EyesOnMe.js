import React from 'react';

class EyesOnMe extends React.Component{
    focused = () => {
        console.log('Good!')
    }

    blured = () => {
        console.log('Hey! Eyes on me!')        
    }
    render(){
        return(
            <div>
                <button onFocus={this.focused} onBlur={this.blured}>Click Here To Get Focused</button>
            </div>    
        );
    }
}

export default EyesOnMe;