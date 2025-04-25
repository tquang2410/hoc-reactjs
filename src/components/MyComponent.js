import React from 'react';
export default class MyComponent extends React.Component {
    state = {
        name: 'Quang',
        address: 'Nhà mèo',
        age: 24
    };
    handleClick = (event) =>{
          
            // console.log("Random", Math.floor((Math.random()*100) +1) )
            this.setState({
            
                age: Math.floor((Math.random()*100) +1)
            })
          
    }
    handleOnMouseOver(event)
    {
        // console.log(event)
    }
    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    
    }
    handleOnSubmit = (event) =>{
        event.preventDefault();
        alert('me')
    }
    // JSX
    render() {
        return (
            <div> My name is {this.state.name} and I'm {this.state.age} yearolds
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input 
                    type="text"
                    onChange={(event) => this.handleOnChangeInput(event)} 
                    />
                    <button>Submit</button>
                </form>
            </div>
           
        );
    }
}
