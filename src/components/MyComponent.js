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
                name: 'Wang'
            })
            this.setState({
                age: Math.floor((Math.random()*100) +1)
            })
    }
    handleOnMouseOver(event)
    {
        // console.log(event)
    }
    // JSX
    render() {
        return (
            <div> My name is {this.state.name} and I'm {this.state.age} yearolds
                <button onClick={(event)=>{this.handleClick(event)}}>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>Mouse over me</button>
            </div>
           
        );
    }
}
