import React from "react";

// Code EyesOnMe Component Here
class EyesOnMe extends React.Component {
    
    focusEvt = () => console.log('Good!')

    blurEvt = () => console.log('Hey! Eyes on me!')


    render() {
        return (
            <div>
                <button
                    onFocus={this.focusEvt}
                    onBlur={this.blurEvt}>
                        Eyes on me, please!
                </button>
            </div>
        )
    }    
}


export default EyesOnMe;