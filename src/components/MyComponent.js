import React from 'react';
export default class MyComponent extends React.Component {
    state = {
        name: 'Quang',
        address: 'Nhà mèo',
        age: 24
    };
    handleClick(event){
          
            console.log(event )
    }
    handleOnMouseOver(event)
    {
        console.log(event)
    }
    // JSX
    render() {
        return (
            <div> My name is {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handleClick}>Click me</button>
                <button onMouseOver={this.handleOnMouseOver}>Mouse over me</button>
            </div>
           
        );
    }
}
